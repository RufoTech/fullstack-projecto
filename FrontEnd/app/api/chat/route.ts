const BACKEND_API_BASE_URL = (
  process.env.NEXT_PUBLIC_BACKEND_API_URL ?? "http://127.0.0.1:8000"
).replace(/\/$/, "");

type LegacyMessage = {
  role?: unknown;
  text?: unknown;
};

function getMessage(payload: unknown): string {
  if (!payload || typeof payload !== "object") {
    return "";
  }

  const requestData = payload as { message?: unknown; messages?: unknown };
  if (typeof requestData.message === "string") {
    return requestData.message.trim();
  }

  if (!Array.isArray(requestData.messages)) {
    return "";
  }

  const lastUserMessage = [...requestData.messages]
    .reverse()
    .find((item) => {
      const message = item as LegacyMessage;
      return message.role === "user" && typeof message.text === "string";
    }) as LegacyMessage | undefined;

  return typeof lastUserMessage?.text === "string" ? lastUserMessage.text.trim() : "";
}

// Compatibility proxy for any older frontend build. The active chatbot widget
// calls the Django endpoint directly; this route never receives an LLM key.
export async function POST(request: Request) {
  const payload = await request.json().catch(() => null);
  const message = getMessage(payload);

  if (!message) {
    return Response.json({ detail: "Göndərmək üçün mesaj daxil edin." }, { status: 400 });
  }

  const conversationId =
    payload && typeof payload === "object" && typeof (payload as { conversation_id?: unknown }).conversation_id === "string"
      ? (payload as { conversation_id: string }).conversation_id
      : undefined;

  try {
    const upstream = await fetch(`${BACKEND_API_BASE_URL}/api/chatbot/chat/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message,
        ...(conversationId ? { conversation_id: conversationId } : {}),
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(25_000),
    });
    const response = await upstream.json().catch(() => null);
    return Response.json(response, { status: upstream.status });
  } catch {
    return Response.json(
      { detail: "Chatbot backend-i ilə əlaqə yaratmaq mümkün olmadı." },
      { status: 502 },
    );
  }
}
