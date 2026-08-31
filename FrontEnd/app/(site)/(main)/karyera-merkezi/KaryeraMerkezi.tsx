"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import {
  ACTIVITIES,
  ADVICE,
  CAROUSEL_IMAGES,
  CAROUSEL_SLIDES,
  COPY,
  HERO,
  PEOPLE,
  STATS,
} from "@/data/karyera";
import "./karyera.css";

const WP = "https://code.edu.az/wp-content";

function ChevronLeft() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M12.5 15L7.5 10L12.5 5"
        stroke="#62717C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M7.5 15L12.5 10L7.5 5"
        stroke="#62717C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function KaryeraMerkezi({ basePath = "/karyera-merkezi" }: { basePath?: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const showAdviceParam = searchParams.get("showadvice");
  const adviceIndex =
    showAdviceParam !== null && showAdviceParam !== ""
      ? Number.parseInt(showAdviceParam, 10)
      : null;
  const openAdvice =
    adviceIndex !== null && !Number.isNaN(adviceIndex) && ADVICE[adviceIndex]
      ? ADVICE[adviceIndex]
      : null;

  const [activeSlide, setActiveSlide] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const slideCount = CAROUSEL_SLIDES.length;

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % ACTIVITIES.length);
    }, 10000);
    return () => window.clearInterval(id);
  }, [activeSlide]);

  useEffect(() => {
    if (!openAdvice) {
      document.body.style.overflowY = "";
      return;
    }
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "";
    };
  }, [openAdvice]);

  const selectActivity = useCallback((index: number) => {
    setActiveSlide(index);
  }, []);

  const goCarousel = useCallback(
    (direction: -1 | 1) => {
      setCarouselIndex((current) => (current + direction + slideCount) % slideCount);
    },
    [slideCount]
  );

  const closeAdvice = useCallback(() => {
    router.replace(basePath, { scroll: false });
  }, [basePath, router]);

  return (
    <div className="code-career-page">
      <section className="d-flex career-slider-main align-items-center flex-column flex-lg-row">
        <div className="col-lg-8 col-12">
          <div className="career-slider-main-content">
            <h1 className="code-visby-h4-bold slider-main-content-sub-title">{HERO.title}</h1>
            <p className="code-visby-body2-medium">
              {HERO.text}
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-12 career-slider-main-img">
          <img
            src={HERO.image}
            alt=""
            loading="lazy"
          />
        </div>
      </section>

      <main className="code-career-main">
        <section className="code-home-statistics-main">
          <div className="d-grid right-part">
            {STATS.items.map((item) => (
              <div className="d-flex flex-column" key={item.value}>
                <h2 className="code-visby-h3-bold">{item.value}</h2>
                <p className="code-visby-body2-medium w-75 m-auto m-lg-0">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          <div className="left-part d-flex justify-content-md-start justify-content-center">
            <h4 className="code-visby-h4-bold w-65 w-md-75">{STATS.title}</h4>
          </div>
        </section>

        <section className="code-scholar-about">
          <div>
            <h2 className="code-scholar-visby-h4-bold mb-4">{COPY.activitiesTitle}</h2>
            <div className="code-scholar-about-box d-flex">
              <div className="col-12 col-lg-7 pe-0 pe-lg-4">
                <div className="code-scholar-about-box-left">
                  {ACTIVITIES.map((item, index) => (
                    <div
                      key={item.id}
                      className={`code-scholar-about-option${activeSlide === index ? " active" : ""}`}
                      data-slide={item.id}
                      onClick={() => selectActivity(index)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          selectActivity(index);
                        }
                      }}
                    >
                      <div className="d-flex">
                        <div>
                          <img
                            src={`${WP}/themes/codev2024/assets/icons/career/about-5.svg`}
                            alt="about-img"
                            loading="lazy"
                          />
                        </div>
                        <div className="text">
                          <h3 className="code-visby-body2-demibold text-truncate">{item.title}</h3>
                          <p className="code-visby-subtitle1-medium"></p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-5 d-none d-lg-block">
                <div className="code-scholar-about-box-right">
                  {ACTIVITIES.map((item, index) => (
                    <div
                      key={item.id}
                      className={`img${activeSlide === index ? " active" : ""}`}
                    >
                      <img src={item.image} alt="image" loading="lazy" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="code-career-collective">
          <div className="code-career-collective-box">
            <div className="title text-center">
              <h3 className="code-caveat-h3-bold">{COPY.peopleTitle}</h3>
              <p className="code-visby-body2-medium w-75 mx-auto">
                {COPY.peopleText}
              </p>
            </div>
            <div className="people">
              <div className="row justify-content-center flex-nowrap people-part">
                {PEOPLE.map((src, index) => (
                  <div className="people-item" key={`person-${index}`}>
                    <div className="img">
                      {src ? <img src={src} alt="people" loading="lazy" /> : null}
                    </div>
                  </div>
                ))}
              </div>
              <div className="row justify-content-center flex-nowrap people-part"></div>
              <div className="row justify-content-center flex-nowrap people-part"></div>
            </div>
            <Link href={COPY.peopleCtaHref}>
              <button className="code-btn-medium code-btn-black d-flex mx-auto" type="button">
                {COPY.peopleCta}
                <span>
                  <img
                    src={`${WP}/themes/codev2024/assets/icons/career/collective.svg`}
                    alt="next"
                    loading="lazy"
                  />
                </span>
              </button>
            </Link>
          </div>
        </section>

        <section className="code-career-advice">
          <h4 className="code-visby-h4-bold text-center">
            {COPY.adviceTitle}
          </h4>
          <div className="col-lg-10 code-career-advice-box mx-auto">
            {ADVICE.map((item, index) => (
              <div className="code-career-advice-box-item" key={item.title}>
                <div className="title d-flex align-items-center justify-content-between">
                  <p className="code-visby-body1-demibold">{item.title}</p>
                  <span className="circle">
                    <span>{index + 1}</span>
                  </span>
                </div>
                <div className="content d-flex flex-column flex-lg-row gap-4 gap-lg-0">
                  <div className="col-lg-6 col-12">
                    <div className="text code-visby-subtitle1-medium d-flex flex-column justify-content-between h-100 gap-4 pe-4 pe-lg-0">
                      {item.teaser}
                      <div>
                        <Link
                          href={`${basePath}?showadvice=${index}`}
                          className="code-btn-medium code-btn-base career-detail-btn-no"
                          scroll={false}
                        >
                          {COPY.moreLabel}
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-12">
                    <div className="img">
                      <img src={item.image} alt="adviceimg" loading="lazy" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {openAdvice ? (
            <section className="career-detail" style={{ display: "block" }}>
              <div className="career-detail-top text-end">
                <button
                  className="code-btn-black code-close-btn"
                  type="button"
                  onClick={closeAdvice}
                  aria-label="Bağla"
                >
                  <img
                    src={`${WP}/themes/codev2024/assets/icons/navigation/x.svg`}
                    alt="close"
                  />
                </button>
              </div>
              <div className="career-detail-box">
                <div className="code-container-modal">
                  <h4 className="code-visby-h4-bold mb-2 mt-1">{openAdvice.title}</h4>
                  <div className="career-detail-box-content d-flex flex-column gap-4">
                    <p style={{ whiteSpace: "pre-line" }}>{openAdvice.detail}</p>
                  </div>
                </div>
              </div>
            </section>
          ) : null}
        </section>

        <section className="partners-carousel">
          <div className="carousel-imgs">
            <div
              className="partners-track"
              style={{ transform: `translateX(-${carouselIndex * 100}%)` }}
            >
              {CAROUSEL_IMAGES.map((src) => (
                <div className="item" key={src}>
                  <img
                    style={{ maxHeight: 440, objectFit: "cover" }}
                    className="carousel-img"
                    src={src}
                    alt=""
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="carousel">
            <div
              className="partners-track"
              style={{ transform: `translateX(-${carouselIndex * 100}%)` }}
            >
              {CAROUSEL_SLIDES.map((slide) => (
                <div className="item" key={slide.text}>
                  <div className="content d-flex flex-column justify-content-between gap-4">
                    <div>
                      <a href={basePath}>
                        <div className="logo">
                          <span className="studio-wordmark">Webora</span>
                        </div>
                      </a>
                      <h3 className="code-visby-body1-demibold mb-1">{slide.title} </h3>
                      <p className="code-visby-subtitle1-medium" style={{ whiteSpace: "pre-line" }}>
                        {slide.text}
                      </p>
                    </div>
                    <div className="pagination">
                      <div
                        className="left"
                        onClick={() => goCarousel(-1)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(event) => {
                          if (event.key === "Enter" || event.key === " ") goCarousel(-1);
                        }}
                      >
                        <ChevronLeft />
                      </div>
                      <span className="count">
                        {carouselIndex + 1}/{slideCount}
                      </span>
                      <div
                        className="right"
                        onClick={() => goCarousel(1)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(event) => {
                          if (event.key === "Enter" || event.key === " ") goCarousel(1);
                        }}
                      >
                        <ChevronRight />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
