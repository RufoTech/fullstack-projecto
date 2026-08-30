"use client";

import { useEffect, useState } from "react";
import { HERO_IMAGES } from "@/data/mezunlar";

export default function Hero() {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setVisible((v) => {
        if (v >= HERO_IMAGES.length) {
          window.clearInterval(id);
          return v;
        }
        return v + 1;
      });
    }, 500);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="d-flex flex-wrap flex-lg-nowrap justify-content-between slider-main align-items-center gap-4">
      <div className="col-12 col-lg-6 slider-main-content text-center text-lg-start">
        <h1 className="code-visby-h3-bold mb-2">Müştərilərimiz bizim dəyərlərimizdir</h1>
        <p className="code-visby-body2-medium">
          Webora yalnız veb həllər deyil, həm də biznesinizin böyüməsinə uyğun
          rəqəmsal məhsullar hazırlayır.
        </p>
      </div>
      <div className="col-12 col-lg-6 d-flex justify-content-center">
        <div className="code-galery">
          {HERO_IMAGES.map((img, i) => (
            <div
              key={img.person}
              className={`code-img code-img-${i + 1}${i < visible ? " is-visible" : ""}`}
            >
              <img src={img.person} alt="people" />
              <div className="code-svg">
                <img
                  src={img.company}
                  alt="company"
                  style={{
                    width: 30,
                    height: "auto",
                    maxWidth: "30%",
                    borderRadius: "50%",
                    opacity: 1,
                    display: "block",
                    visibility: "visible",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
