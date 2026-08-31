import { PARTNER_SLIDE } from "@/data/mezunlar";
import { ChevronLeft, ChevronRight } from "./Icons";

export default function PartnersCarousel() {
  return (
    <section className="partners-carousel">
      <div className="carousel-imgs">
        <div className="item">
          <img
            style={{ maxHeight: 440, objectFit: "cover" }}
            className="carousel-img"
            src={PARTNER_SLIDE.image}
            alt=""
          />
        </div>
      </div>
      <div className="carousel">
        <div className="item">
          <div className="content d-flex flex-column justify-content-between gap-4">
            <div>
              <a href="/mezunlarimiz">
                <div className="logo">
                  <img style={{ width: 80 }} src={PARTNER_SLIDE.logo} alt="" />
                </div>
              </a>
              <h3 className="code-visby-body1-demibold mb-1">{PARTNER_SLIDE.title}</h3>
              <p className="code-visby-subtitle1-medium" style={{ whiteSpace: "pre-line" }}>
                {PARTNER_SLIDE.text}
              </p>
            </div>
            <div className="pagination">
              <div className="left">
                <ChevronLeft />
              </div>
              <span className="count">{PARTNER_SLIDE.count}</span>
              <div className="right">
                <ChevronRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
