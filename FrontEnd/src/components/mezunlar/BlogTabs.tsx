"use client";

import { useState } from "react";
import { BLOG_CARDS, BLOG_TABS } from "@/data/mezunlar";
import { ChevronRight } from "./Icons";
import StudentModal from "./StudentModal";

const INITIAL = 9;
const STEP = 3;

export default function BlogTabs() {
  const [active, setActive] = useState<string>(BLOG_TABS[0].id);
  const [shown, setShown] = useState<Record<string, number>>({});
  const [openId, setOpenId] = useState<string | null>(null);

  const cards = BLOG_CARDS[active] ?? [];
  const visibleCount = shown[active] ?? INITIAL;
  const showMore = cards.length > visibleCount;

  return (
    <section className="code-blog">
      <h4 className="code-visby-h4-bold mb-4">#UğurHekayəsiBurada</h4>
      <div className="code-blog-nav" role="tablist" aria-label="Layihə kateqoriyaları">
        {BLOG_TABS.map((tab) => (
          <button
            type="button"
            key={tab.id}
            className={`code-blog-tab code-visby-subtitle1-medium${tab.id === active ? " active" : ""}`}
            role="tab"
            aria-selected={tab.id === active}
            aria-controls={tab.id}
            onClick={() => setActive(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {BLOG_TABS.map((tab) => {
          const list = BLOG_CARDS[tab.id] ?? [];
          const count = shown[tab.id] ?? INITIAL;
          if (tab.id !== active) return null;
          return (
            <div className="code-blog-cards" id={tab.id} key={tab.id}>
              {list.map((card, i) => (
                <div
                  key={card.id}
                  className={`col-12 code-blog-cards-item${i < count ? " is-shown" : ""}`}
                  data-id={card.id}
                  onClick={() => setOpenId(card.id)}
                >
                  <div className="code-blog-cards-item-inner d-flex flex-column">
                    <div className="code-blog-card-header d-flex justify-content-between">
                      <div className="code-blog-card-header-text d-flex align-items-center">
                        <img
                          style={{ width: 56, height: "auto", borderRadius: "50%" }}
                          src={card.img}
                          alt=""
                        />
                        <div className="d-flex flex-column">
                          <h6 className="code-visby-body1-demibold">{card.name}</h6>
                          <p className="code-visby-subtitle1-medium">{card.role}</p>
                        </div>
                      </div>
                      <div className="code-blog-card-header-btn">
                        <span>
                          <ChevronRight />
                        </span>
                      </div>
                    </div>
                    <p className="code-visby-subtitle1-medium">{card.quote}</p>
                  </div>
                </div>
              ))}
              {showMore ? (
                <div className="mx-auto">
                  <button
                    className="code-btn-medium code-btn-black mx-auto more-btn"
                    type="button"
                    onClick={() =>
                      setShown((s) => ({
                        ...s,
                        [active]: (s[active] ?? INITIAL) + STEP,
                      }))
                    }
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
          );
        })}
      </div>
      <StudentModal studentId={openId} onClose={() => setOpenId(null)} />
    </section>
  );
}
