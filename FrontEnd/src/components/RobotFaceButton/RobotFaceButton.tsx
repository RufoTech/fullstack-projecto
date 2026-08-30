"use client";

import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
  type KeyboardEvent,
} from "react";
import * as THREE from "three";

import styles from "./RobotFaceButton.module.css";

const ROBOT_ASPECT_RATIO = 1536 / 1024;
const BLINK_MIN_DELAY = 2;
const BLINK_DELAY_RANGE = 2;
const BLINK_DURATION = 0.18;
const EYE_POSITIONS = [
  new THREE.Vector2(0.348, 0.407),
  new THREE.Vector2(0.544, 0.399),
] as const;

type ChatMessage = {
  id: string;
  role: "assistant" | "user";
  text: string;
  websiteExamples?: WebsiteExample[];
};

type WebsiteExample = {
  id: string;
  website_type: string;
  title: string;
  description: string;
  website_url: string;
  preview_image_url: string;
  source: "curated" | "google" | "google_search";
};

type ChatbotApiMessage = {
  id: number;
  role: "assistant" | "user";
  message: string;
  website_examples?: WebsiteExample[];
};

type ChatbotApiResponse = {
  conversation_id?: string;
  message?: string;
  website_examples?: WebsiteExample[];
  detail?: string;
  error?: string;
};

type ConversationResponse = {
  messages?: ChatbotApiMessage[];
};

const CONVERSATION_STORAGE_KEY = "webora-chatbot-conversation-id";

function getChatbotApiUrl(path: string) {
  const configuredApiUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL?.replace(/\/$/, "");
  if (configuredApiUrl) {
    return `${configuredApiUrl}/api/chatbot${path}`;
  }

  // Both development servers run on this computer. A stable loopback URL
  // also avoids browser IPv6/localhost resolution differences.
  return `http://127.0.0.1:8000/api/chatbot${path}`;
}

type AnimatedEye = {
  baseX: number;
  group: THREE.Group;
  mesh: THREE.Mesh<THREE.TubeGeometry, THREE.MeshBasicMaterial>;
};

const vertexShader = /* glsl */ `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const robotShader = /* glsl */ `
  uniform sampler2D uTexture;

  varying vec2 vUv;

  float eyeArea(vec2 uv, vec2 center) {
    vec2 distanceFromEye = (uv - center) / vec2(0.075, 0.07);
    float ellipse = dot(distanceFromEye, distanceFromEye);

    return 1.0 - smoothstep(0.72, 1.0, ellipse);
  }

  void main() {
    vec4 robot = texture2D(uTexture, vUv);
    vec4 screen = texture2D(uTexture, vec2(0.5, 0.46));
    float sourceEyes = max(
      eyeArea(vUv, vec2(0.348, 0.407)),
      eyeArea(vUv, vec2(0.544, 0.399))
    );

    gl_FragColor = mix(robot, screen, sourceEyes);
  }
`;

function createEyeMesh() {
  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-0.07, -0.024, 0),
    new THREE.Vector3(-0.046, 0.026, 0.014),
    new THREE.Vector3(0, 0.048, 0.02),
    new THREE.Vector3(0.046, 0.026, 0.014),
    new THREE.Vector3(0.07, -0.024, 0),
  ]);
  const geometry = new THREE.TubeGeometry(curve, 32, 0.018, 10, false);
  const material = new THREE.MeshBasicMaterial({
    color: "#6537A6",
    depthTest: false,
    depthWrite: false,
    transparent: true,
  });

  return new THREE.Mesh(geometry, material);
}

function createMessageId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

export default function RobotFaceButton() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const messageInputRef = useRef<HTMLTextAreaElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const activeRequestRef = useRef<AbortController | null>(null);
  const loadedConversationRef = useRef(false);
  const [isOpen, setIsOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [requestError, setRequestError] = useState<string | null>(null);
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    let renderer: THREE.WebGLRenderer;

    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        canvas,
      });
    } catch {
      return;
    }

    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(
      -ROBOT_ASPECT_RATIO / 2,
      ROBOT_ASPECT_RATIO / 2,
      0.5,
      -0.5,
      0.01,
      2,
    );
    const clock = new THREE.Clock();
    const textureLoader = new THREE.TextureLoader();
    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect();

      if (!width || !height) {
        return;
      }

      const canvasAspectRatio = width / height;
      camera.left = -canvasAspectRatio / 2;
      camera.right = canvasAspectRatio / 2;
      camera.top = 0.5;
      camera.bottom = -0.5;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };
    const resizeObserver = new ResizeObserver(resize);

    camera.position.z = 1;
    resize();
    resizeObserver.observe(canvas);

    const animatedEyes: AnimatedEye[] = EYE_POSITIONS.map((position) => {
      const mesh = createEyeMesh();
      const group = new THREE.Group();
      const baseX = (position.x - 0.5) * ROBOT_ASPECT_RATIO;

      group.position.set(baseX, position.y - 0.5, 0.03);
      mesh.renderOrder = 2;
      group.add(mesh);
      scene.add(group);

      return { baseX, group, mesh };
    });

    let disposed = false;
    let animationFrame: number | undefined;
    let robotGeometry: THREE.PlaneGeometry | undefined;
    let robotMaterial: THREE.ShaderMaterial | undefined;
    let robotTexture: THREE.Texture | undefined;
    let isBlinking = false;
    let blinkStartedAt = 0;
    let nextBlinkAt = BLINK_MIN_DELAY + Math.random() * BLINK_DELAY_RANGE;

    const renderFrame = () => {
      if (disposed) {
        return;
      }

      const elapsed = clock.getElapsedTime();

      if (!isBlinking && elapsed >= nextBlinkAt) {
        isBlinking = true;
        blinkStartedAt = elapsed;
      }

      let blinkAmount = 0;

      if (isBlinking) {
        const progress = (elapsed - blinkStartedAt) / BLINK_DURATION;

        if (progress < 1) {
          blinkAmount = Math.sin(progress * Math.PI);
        } else {
          isBlinking = false;
          nextBlinkAt = elapsed + BLINK_MIN_DELAY + Math.random() * BLINK_DELAY_RANGE;
        }
      }

      const horizontalMotion = Math.sin(elapsed * 0.68) * 0.028;
      const eyeHeight = 1 - blinkAmount * 0.92;

      animatedEyes.forEach(({ baseX, group }) => {
        group.position.x = baseX + horizontalMotion;
        group.scale.y = eyeHeight;
      });

      renderer.render(scene, camera);
      animationFrame = window.requestAnimationFrame(renderFrame);
    };

    // This is the sole Three.js loop. It begins immediately and does not wait for the image texture.
    clock.start();
    animationFrame = window.requestAnimationFrame(renderFrame);

    textureLoader.load(
      "/assets/images/robot.png",
      (loadedTexture) => {
        if (disposed) {
          loadedTexture.dispose();
          return;
        }

        robotTexture = loadedTexture;
        robotTexture.colorSpace = THREE.SRGBColorSpace;
        robotTexture.minFilter = THREE.LinearFilter;
        robotTexture.magFilter = THREE.LinearFilter;
        robotTexture.generateMipmaps = false;

        robotGeometry = new THREE.PlaneGeometry(ROBOT_ASPECT_RATIO, 1);
        robotMaterial = new THREE.ShaderMaterial({
          transparent: true,
          depthWrite: false,
          uniforms: { uTexture: { value: robotTexture } },
          vertexShader,
          fragmentShader: robotShader,
        });
        const robotMesh = new THREE.Mesh(robotGeometry, robotMaterial);

        robotMesh.renderOrder = 1;
        scene.add(robotMesh);
      },
      undefined,
      () => {
        // The unchanged image beneath the canvas remains visible as a fallback.
      },
    );

    return () => {
      disposed = true;

      if (animationFrame !== undefined) {
        window.cancelAnimationFrame(animationFrame);
      }

      resizeObserver.disconnect();
      animatedEyes.forEach(({ group, mesh }) => {
        scene.remove(group);
        mesh.geometry.dispose();
        mesh.material.dispose();
      });
      robotGeometry?.dispose();
      robotMaterial?.dispose();
      robotTexture?.dispose();
      renderer.dispose();
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      messageInputRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ block: "end" });
  }, [isOpen, isSending, messages]);

  useEffect(() => {
    return () => activeRequestRef.current?.abort();
  }, []);

  useEffect(() => {
    if (loadedConversationRef.current) {
      return;
    }

    loadedConversationRef.current = true;
    const storedConversationId = window.localStorage.getItem(CONVERSATION_STORAGE_KEY);
    if (!storedConversationId) {
      return;
    }

    const controller = new AbortController();

    void fetch(getChatbotApiUrl(`/conversations/${storedConversationId}/`), {
      signal: controller.signal,
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error("Söhbət tarixçəsi yüklənmədi.");
        }
        return (await response.json()) as ConversationResponse;
      })
      .then((payload) => {
        setConversationId(storedConversationId);
        const previousMessages = (payload.messages ?? [])
          .filter(
            (message): message is ChatbotApiMessage =>
              (message.role === "assistant" || message.role === "user") &&
              typeof message.message === "string" &&
              Boolean(message.message.trim()),
          )
          .map((message) => ({
            id: String(message.id),
            role: message.role,
            text: message.message,
            websiteExamples: message.website_examples ?? [],
          }));

        if (previousMessages.length) {
          setMessages(previousMessages);
        }
      })
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }
        window.localStorage.removeItem(CONVERSATION_STORAGE_KEY);
        setConversationId(null);
      });

    return () => controller.abort();
  }, []);

  const resetMessageInput = () => {
    if (messageInputRef.current) {
      messageInputRef.current.style.height = "auto";
    }
  };

  const handleDraftChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const input = event.currentTarget;

    setDraft(input.value);
    input.style.height = "auto";
    input.style.height = `${Math.min(input.scrollHeight, 120)}px`;
  };

  const sendMessage = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = draft.trim();

    if (!message || isSending) {
      return;
    }

    const controller = new AbortController();
    const userMessage: ChatMessage = {
      id: createMessageId(),
      role: "user",
      text: message,
    };

    activeRequestRef.current?.abort();
    activeRequestRef.current = controller;
    setMessages((currentMessages) => [...currentMessages, userMessage]);
    setDraft("");
    resetMessageInput();
    setIsSending(true);
    setRequestError(null);
    const apiUrl = getChatbotApiUrl("/chat/");

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message,
          ...(conversationId ? { conversation_id: conversationId } : {}),
        }),
        signal: controller.signal,
      });
      const payload = (await response.json().catch(() => null)) as
        | ChatbotApiResponse
        | null;
      const responseMessage = payload?.message;
      const responseError =
        (typeof payload?.detail === "string" && payload.detail.trim()) ||
        (typeof payload?.error === "string" && payload.error.trim());

      if (!response.ok || !responseMessage) {
        console.error("Chatbot API error", {
          endpoint: apiUrl,
          status: response.status,
          response: payload,
        });
        throw new Error(
          responseError || `Server cavabı alınmadı (HTTP ${response.status}).`,
        );
      }

      setMessages((currentMessages) => [
        ...currentMessages,
        {
          id: createMessageId(),
          role: "assistant",
          text: responseMessage,
          websiteExamples: payload?.website_examples ?? [],
        },
      ]);
      if (payload?.conversation_id) {
        setConversationId(payload.conversation_id);
        window.localStorage.setItem(CONVERSATION_STORAGE_KEY, payload.conversation_id);
      }
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") {
        return;
      }

      const isNetworkError = error instanceof TypeError && error.message === "Failed to fetch";
      const errorMessage = isNetworkError
        ? `Chatbot backendinə qoşulmaq mümkün olmadı. ${apiUrl} ünvanını, Django serverini və CORS icazəsini yoxlayın.`
        : error instanceof Error
          ? error.message
          : "Mesaj göndərilərkən gözlənilməyən xəta baş verdi.";

      console.error("Chatbot API request failed", {
        endpoint: apiUrl,
        error,
      });
      setRequestError(errorMessage);
    } finally {
      if (activeRequestRef.current === controller) {
        activeRequestRef.current = null;
        setIsSending(false);
      }
    }
  };

  const handleInputKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      event.currentTarget.form?.requestSubmit();
    }
  };

  return (
    <div className={styles.widget}>
      {isOpen && (
        <section aria-label="AI chatbot" className={styles.panel}>
          <header className={styles.panelHeader}>
            <span aria-hidden="true" className={styles.status} />
            <div>
              <p>Webora AI</p>
              <span>Onlayn köməkçi</span>
            </div>
          </header>

          <div aria-live="polite" className={styles.messages}>
            {messages.map((message) => (
              <div
                className={`${styles.message} ${
                  message.role === "user" ? styles.userMessage : styles.assistantMessage
                }`}
                key={message.id}
              >
                {message.text}
                {message.websiteExamples?.length ? (
                  <div className={styles.exampleList}>
                    {message.websiteExamples.map((example) => (
                      <a
                        className={styles.exampleCard}
                        href={example.website_url}
                        key={example.id}
                        rel="noreferrer"
                        target="_blank"
                      >
                        {example.preview_image_url ? (
                          /* eslint-disable-next-line @next/next/no-img-element -- Preview images are optional URLs managed from Django Admin. */
                          <img alt="" className={styles.exampleImage} src={example.preview_image_url} />
                        ) : null}
                        <span className={styles.exampleContent}>
                          <small>
                            {example.source === "google_search"
                              ? "Google axtarışı"
                              : example.source === "google"
                                ? "Google nəticəsi"
                                : "Sayt nümunəsi"}
                          </small>
                          <strong>{example.title}</strong>
                          {example.description ? <span>{example.description}</span> : null}
                          <em>Nümunəyə bax ↗</em>
                        </span>
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
            {isSending && <div className={`${styles.message} ${styles.assistantMessage}`}>Yazır...</div>}
            {requestError && (
              <p className={styles.requestError} role="alert">
                {requestError}
              </p>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form className={styles.form} onSubmit={sendMessage}>
            <textarea
              aria-label="Mesajınız"
              className={styles.input}
              disabled={isSending}
              onChange={handleDraftChange}
              onKeyDown={handleInputKeyDown}
              placeholder="Mesajınızı yazın..."
              ref={messageInputRef}
              rows={1}
              value={draft}
            />
            <button className={styles.sendButton} disabled={isSending || !draft.trim()} type="submit">
              Göndər
            </button>
          </form>
        </section>
      )}

      <button
        aria-expanded={isOpen}
        aria-label={isOpen ? "AI chatbotu bağla" : "AI chatbotu aç"}
        className={styles.button}
        onClick={() => setIsOpen((open) => !open)}
        type="button"
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- The exact user-provided asset is also the Three.js texture. */}
        <img
          alt=""
          aria-hidden="true"
          className={styles.fallbackImage}
          draggable={false}
          src="/assets/images/robot.png"
        />
        <canvas aria-hidden="true" className={styles.canvas} ref={canvasRef} />
      </button>
    </div>
  );
}
