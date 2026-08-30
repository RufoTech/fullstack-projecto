"use client";

import { useEffect, useState } from "react";
import { VIDEOS } from "@/data/mezunlar";

const INITIAL = 4;
const STEP = 4;

export default function VideoGrid() {
  const [shown, setShown] = useState(INITIAL);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!videoUrl) return;
    document.body.style.overflowY = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setVideoUrl(null);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflowY = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [videoUrl]);

  return (
    <section className="code-video code-about-question">
      <h5 className="code-visby-h4-bold mb-4">Müştərilərimiz deyir...</h5>
      <div
        className="tag code-visby-subtitle1-medium code-video-nav"
        style={{ display: "none" }}
      >
        <p className="active code-visby-subtitle1-medium" data-for="programming">
          Proqramlaşdırma
        </p>
      </div>
      <div className="tab-content">
        <div className="questions code-video-cards" id="programming">
          {VIDEOS.map((item, i) => (
            <div
              key={item.video + item.name}
              className={`col-6 col-md-3 item${i < shown ? " is-shown" : ""}`}
              data-video={item.video}
              onClick={() => setVideoUrl(item.video)}
            >
              <div className="code-video-card">
                <div className="code-img">
                  <img src={item.img} alt="people" />
                </div>
                <span>
                  <img
                    src="https://code.edu.az/wp-content/themes/codev2024/assets/icons/play.svg"
                    alt="play"
                  />
                </span>
                <p className="code-visby-subtitle1-medium">{item.name}</p>
              </div>
            </div>
          ))}
          {shown < VIDEOS.length ? (
            <div className="mx-auto">
              <button
                className="code-btn-medium code-btn-black mx-auto more-btn"
                type="button"
                onClick={() => setShown((s) => s + STEP)}
              >
                <img
                  src="https://code.edu.az/wp-content/themes/codev2024/assets/icons/plus-circle.svg"
                  alt="plus"
                />
                Daha çox
              </button>
            </div>
          ) : null}
        </div>
      </div>

      <div className={`code-video-card-modal${videoUrl ? " is-open" : ""}`}>
        <div className="img close" onClick={() => setVideoUrl(null)}>
          <img src="/mezunlar/x.svg" alt="img" />
        </div>
        <div className="video videoyoutube">
          {videoUrl ? (
            <iframe
              width="420"
              height="540"
              src={videoUrl}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : null}
        </div>
      </div>
    </section>
  );
}
