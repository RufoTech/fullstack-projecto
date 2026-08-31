"use client";

import React, { useEffect, useRef, useState } from "react";
import data from "@/data/data";
import "./Contact.css";

const { contact } = data;
const FAQ_TABS = contact.faqTabs;
function CopyIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="icon/copy-03">
        <path
          id="Icon"
          d="M7 7V4.9C7 4.05992 7 3.63988 7.16349 3.31901C7.3073 3.03677 7.53677 2.8073 7.81901 2.66349C8.13988 2.5 8.55992 2.5 9.4 2.5H15.1C15.9401 2.5 16.3601 2.5 16.681 2.66349C16.9632 2.8073 17.1927 3.03677 17.3365 3.31901C17.5 3.63988 17.5 4.05992 17.5 4.9V10.6C17.5 11.4401 17.5 11.8601 17.3365 12.181C17.1927 12.4632 16.9632 12.6927 16.681 12.8365C16.3601 13 15.9401 13 15.1 13H13M4.9 17.5H10.6C11.4401 17.5 11.8601 17.5 12.181 17.3365C12.4632 17.1927 12.6927 16.9632 12.8365 16.681C13 16.3601 13 15.9401 13 15.1V9.4C13 8.55992 13 8.13988 12.8365 7.81901C12.6927 7.53677 12.4632 7.3073 12.181 7.16349C11.8601 7 11.4401 7 10.6 7H4.9C4.05992 7 3.63988 7 3.31901 7.16349C3.03677 7.3073 2.8073 7.53677 2.66349 7.81901C2.5 8.13988 2.5 8.55992 2.5 9.4V15.1C2.5 15.9401 2.5 16.3601 2.66349 16.681C2.8073 16.9632 3.03677 17.1927 3.31901 17.3365C3.63988 17.5 4.05992 17.5 4.9 17.5Z"
          stroke="#767F8D"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M9.99935 4.16663V15.8333M4.16602 9.99996H15.8327"
        stroke="#62717C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FaqItem({ item, itemId, isActive, onToggle, copiedId, onCopy }) {
  const descRef = useRef(null);
  const itemRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!descRef.current) return;
    if (isActive) {
      setHeight(descRef.current.scrollHeight + 32);
    } else {
      setHeight(0);
    }
  }, [isActive]);

  return (
    <div
      ref={itemRef}
      className={`questions-item p-2 d-flex flex-column${isActive ? " active" : ""}`}
      onClick={() => onToggle(itemId)}
    >
      <div className="questions-item-title px-3 py-2 d-flex justify-content-between align-items-center">
        <p className="code--visby-body2-demibold">{item.q}</p>
        <div className="d-flex gap-2">
          <span
            className="copy"
            onClick={(event) => {
              event.stopPropagation();
              const text = itemRef.current ? itemRef.current.innerText : item.q;
              onCopy(itemId, text);
            }}
          >
            <CopyIcon />
            <span style={{ animationName: copiedId === itemId ? "showCopy" : "" }}>
              <img src="/contact/check.svg" alt="" />
              Sual kopyalandı
            </span>
          </span>
          <span className="minus">
            <img src="/contact/minus.svg" alt="minus" />
          </span>
          <span className="plus">
            <PlusIcon />
          </span>
        </div>
      </div>
      <div
        className="questions-item-desc"
        ref={descRef}
        style={{ height: isActive ? height : 0 }}
      >
        <p className="code-visby-subtitle1-medium">{item.a}</p>
      </div>
    </div>
  );
}

export default function Contact() {
  const [activeTab, setActiveTab] = useState("umumi");
  const [openId, setOpenId] = useState(null);
  const [copiedId, setCopiedId] = useState(null);
  const [tagBig, setTagBig] = useState(true);
  const tagRef = useRef(null);

  const updateTagPill = () => {
    const nav = tagRef.current;
    if (!nav) return;
    const active = nav.querySelector("li.active");
    if (!active) return;
    const navRect = nav.getBoundingClientRect();
    const liRect = active.getBoundingClientRect();
    nav.style.setProperty("--after-width", `${liRect.width}px`);
    nav.style.setProperty("--after-left", `${liRect.left - navRect.left}px`);
    setTagBig(window.innerWidth >= nav.scrollWidth + 32);
  };

  useEffect(() => {
    updateTagPill();
    window.addEventListener("resize", updateTagPill);
    return () => window.removeEventListener("resize", updateTagPill);
  }, [activeTab]);

  const handleCopy = (itemId, text) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text);
    }
    setCopiedId(itemId);
    window.setTimeout(() => setCopiedId(null), 3000);
  };

  const handleToggle = (itemId) => {
    setOpenId((current) => (current === itemId ? null : itemId));
  };

  return (
    <div className="code-contact-page">
        <main className="code-contact-main">
          <section className="code-contact-communication d-flex flex-column">
            <h1 className="code-visby-h2-bold ">{contact.title}</h1>
            <div className="code-contact-communication-section d-grid">
              <a
                href={contact.cards[0].href}
                target="_blank"
                className="d-flex align-items-center code-contact-communication-info"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M14.0497 6C15.0264 6.19057 15.924 6.66826 16.6277 7.37194C17.3314 8.07561 17.8091 8.97326 17.9997 9.95M14.0497 2C16.0789 2.22544 17.9713 3.13417 19.4159 4.57701C20.8606 6.01984 21.7717 7.91101 21.9997 9.94M10.2266 13.8631C9.02506 12.6615 8.07627 11.3028 7.38028 9.85323C7.32041 9.72854 7.29048 9.66619 7.26748 9.5873C7.18576 9.30695 7.24446 8.96269 7.41447 8.72526C7.46231 8.65845 7.51947 8.60129 7.63378 8.48698C7.98338 8.13737 8.15819 7.96257 8.27247 7.78679C8.70347 7.1239 8.70347 6.26932 8.27247 5.60643C8.15819 5.43065 7.98338 5.25585 7.63378 4.90624L7.43891 4.71137C6.90747 4.17993 6.64174 3.91421 6.35636 3.76987C5.7888 3.4828 5.11854 3.4828 4.55098 3.76987C4.2656 3.91421 3.99987 4.17993 3.46843 4.71137L3.3108 4.86901C2.78117 5.39863 2.51636 5.66344 2.31411 6.02348C2.08969 6.42298 1.92833 7.04347 1.9297 7.5017C1.93092 7.91464 2.01103 8.19687 2.17124 8.76131C3.03221 11.7947 4.65668 14.6571 7.04466 17.045C9.43264 19.433 12.295 21.0575 15.3284 21.9185C15.8928 22.0787 16.1751 22.1588 16.588 22.16C17.0462 22.1614 17.6667 22 18.0662 21.7756C18.4263 21.5733 18.6911 21.3085 19.2207 20.7789L19.3783 20.6213C19.9098 20.0898 20.1755 19.8241 20.3198 19.5387C20.6069 18.9712 20.6069 18.3009 20.3198 17.7333C20.1755 17.448 19.9098 17.1822 19.3783 16.6508L19.1835 16.4559C18.8339 16.1063 18.6591 15.9315 18.4833 15.8172C17.8204 15.3862 16.9658 15.3862 16.3029 15.8172C16.1271 15.9315 15.9523 16.1063 15.6027 16.4559C15.4884 16.5702 15.4313 16.6274 15.3644 16.6752C15.127 16.8453 14.7828 16.904 14.5024 16.8222C14.4235 16.7992 14.3612 16.7693 14.2365 16.7094C12.7869 16.0134 11.4282 15.0646 10.2266 13.8631Z"
                    stroke="#13171A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="d-flex flex-column">
                  <h6 className="code-visby-body2-medium">Əlaqə telefon</h6>
                  <p className="code-visby-body1-demibold">{contact.cards[0].value}</p>
                </div>
              </a>
              <a
                href={contact.cards[1].href}
                target="_blank"
                className="d-flex align-items-center code-contact-communication-info"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 17.5H12.01M8.2 22H15.8C16.9201 22 17.4802 22 17.908 21.782C18.2843 21.5903 18.5903 21.2843 18.782 20.908C19 20.4802 19 19.9201 19 18.8V5.2C19 4.07989 19 3.51984 18.782 3.09202C18.5903 2.71569 18.2843 2.40973 17.908 2.21799C17.4802 2 16.9201 2 15.8 2H8.2C7.0799 2 6.51984 2 6.09202 2.21799C5.71569 2.40973 5.40973 2.71569 5.21799 3.09202C5 3.51984 5 4.0799 5 5.2V18.8C5 19.9201 5 20.4802 5.21799 20.908C5.40973 21.2843 5.71569 21.5903 6.09202 21.782C6.51984 22 7.07989 22 8.2 22ZM12.5 17.5C12.5 17.7761 12.2761 18 12 18C11.7239 18 11.5 17.7761 11.5 17.5C11.5 17.2239 11.7239 17 12 17C12.2761 17 12.5 17.2239 12.5 17.5Z"
                    stroke="#13171A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="d-flex flex-column">
                  <h6 className="code-visby-body2-medium">Mobil/Whatsapp</h6>
                  <p className="code-visby-body1-demibold">{contact.cards[1].value}</p>
                </div>
              </a>
              <a
                href={contact.cards[2].href}
                target="_blank"
                className="d-flex align-items-center code-contact-communication-info"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M13.744 2.63357L21.272 7.52678C21.538 7.69969 21.671 7.78614 21.7674 7.90146C21.8527 8.00354 21.9167 8.12161 21.9558 8.24876C22 8.3924 22 8.55103 22 8.86829V16.2C22 17.8802 22 18.7202 21.673 19.362C21.3854 19.9265 20.9265 20.3854 20.362 20.673C19.7202 21 18.8802 21 17.2 21H6.8C5.11984 21 4.27976 21 3.63803 20.673C3.07354 20.3854 2.6146 19.9265 2.32698 19.362C2 18.7202 2 17.8802 2 16.2V8.86829C2 8.55103 2 8.3924 2.04417 8.24876C2.08327 8.12161 2.14735 8.00354 2.23265 7.90146C2.32901 7.78614 2.46201 7.69969 2.72802 7.52678L10.256 2.63357M13.744 2.63357C13.1127 2.22326 12.7971 2.01811 12.457 1.93829C12.1564 1.86773 11.8436 1.86773 11.543 1.93829C11.2029 2.01811 10.8873 2.22326 10.256 2.63357M13.744 2.63357L19.9361 6.65848C20.624 7.10559 20.9679 7.32914 21.087 7.61263C21.1911 7.86039 21.1911 8.13961 21.087 8.38736C20.9679 8.67085 20.624 8.89441 19.9361 9.34151L13.744 13.3664C13.1127 13.7767 12.7971 13.9819 12.457 14.0617C12.1564 14.1323 11.8436 14.1323 11.543 14.0617C11.2029 13.9819 10.8873 13.7767 10.256 13.3664L4.06386 9.34151C3.37601 8.8944 3.03209 8.67085 2.91297 8.38736C2.80888 8.13961 2.80888 7.86039 2.91297 7.61263C3.03209 7.32914 3.37601 7.10559 4.06386 6.65849L10.256 2.63357M21.5 19L14.8572 13M9.14282 13L2.5 19"
                    stroke="#13171A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="d-flex flex-column">
                  <h6 className="code-visby-body2-medium">Elektron poçt</h6>
                  <p className="code-visby-body1-demibold">{contact.cards[2].value}</p>
                </div>
              </a>
              <a
                href={contact.cards[3].href}
                target="_blank"
                className="d-flex align-items-center code-contact-communication-info"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M2.5 12H5.88197C6.56717 12 7.19357 12.3871 7.5 13C7.80643 13.6129 8.43283 14 9.11803 14H14.882C15.5672 14 16.1936 13.6129 16.5 13C16.8064 12.3871 17.4328 12 18.118 12H21.5M8.96656 4H15.0334C16.1103 4 16.6487 4 17.1241 4.16396C17.5445 4.30896 17.9274 4.5456 18.2451 4.85675C18.6043 5.2086 18.8451 5.6902 19.3267 6.65337L21.4932 10.9865C21.6822 11.3645 21.7767 11.5535 21.8434 11.7515C21.9026 11.9275 21.9453 12.1085 21.971 12.2923C22 12.4992 22 12.7105 22 13.1331V15.2C22 16.8802 22 17.7202 21.673 18.362C21.3854 18.9265 20.9265 19.3854 20.362 19.673C19.7202 20 18.8802 20 17.2 20H6.8C5.11984 20 4.27976 20 3.63803 19.673C3.07354 19.3854 2.6146 18.9265 2.32698 18.362C2 17.7202 2 16.8802 2 15.2V13.1331C2 12.7105 2 12.4992 2.02897 12.2923C2.05471 12.1085 2.09744 11.9275 2.15662 11.7515C2.22326 11.5535 2.31776 11.3645 2.50675 10.9865L4.67331 6.65337C5.1549 5.69019 5.3957 5.2086 5.75495 4.85675C6.07263 4.5456 6.45551 4.30896 6.87589 4.16396C7.35125 4 7.88969 4 8.96656 4Z"
                    stroke="#13171A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="d-flex flex-column">
                  <h6 className="code-visby-body2-medium">Korporativ elektron poçt</h6>
                  <p className="code-visby-body1-demibold">{contact.cards[3].value}</p>
                </div>
              </a>
            </div>
          </section>

          <section className="code-contact-map d-flex flex-column flex-xl-row">
            <div className="code-contact-map-details d-flex flex-column">
              <div>
                <h5 className="code-visby-h5-bold">{contact.addressLine1}</h5>
                <h5 className="code-caveat-h5-bold">{contact.addressLine2}</h5>
                <div className="code-contact-map-details-buttons d-flex">
                  <button className="code-btn-medium code-btn code-btn-primary code-btn-hover-tertiary">
                    <a
                      href={contact.maps.google}
                      target="_blank"
                    >
                      Google Maps
                      <img src="/contact/right-circle-black.svg" alt="" />
                    </a>
                  </button>
                  <button className="code-btn-medium code-btn code-btn-primary code-btn-hover-tertiary">
                    <a
                      href={contact.maps.yandex}
                      target="_blank"
                    >
                      Yandex Maps
                      <img src="/contact/right-circle-black.svg" alt="" />
                    </a>
                  </button>
                </div>
              </div>

              <ul className="d-flex flex-column">
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7.75312 7.05L6.83555 9.71429H17.1645L16.2469 7.05C16.0887 6.59286 15.6633 6.28571 15.1852 6.28571H8.81484C8.33672 6.28571 7.91133 6.59286 7.75312 7.05ZM4.39219 9.88571L5.62969 6.29643C6.1043 4.92143 7.38047 4 8.81484 4H15.1852C16.6195 4 17.8957 4.92143 18.3703 6.29643L19.6078 9.88571C20.4234 10.2286 21 11.0464 21 12V18.8571C21 19.4893 20.4973 20 19.875 20H18.75C18.1277 20 17.625 19.4893 17.625 18.8571V17.1429H6.375V18.8571C6.375 19.4893 5.87227 20 5.25 20H4.125C3.50273 20 3 19.4893 3 18.8571V12C3 11.0464 3.57656 10.2286 4.39219 9.88571ZM7.5 13.1429C7.5 12.8398 7.38147 12.5491 7.1705 12.3347C6.95952 12.1204 6.67337 12 6.375 12C6.07663 12 5.79048 12.1204 5.5795 12.3347C5.36853 12.5491 5.25 12.8398 5.25 13.1429C5.25 13.446 5.36853 13.7367 5.5795 13.951C5.79048 14.1653 6.07663 14.2857 6.375 14.2857C6.67337 14.2857 6.95952 14.1653 7.1705 13.951C7.38147 13.7367 7.5 13.446 7.5 13.1429ZM17.625 14.2857C17.9234 14.2857 18.2095 14.1653 18.4205 13.951C18.6315 13.7367 18.75 13.446 18.75 13.1429C18.75 12.8398 18.6315 12.5491 18.4205 12.3347C18.2095 12.1204 17.9234 12 17.625 12C17.3266 12 17.0405 12.1204 16.8295 12.3347C16.6185 12.5491 16.5 12.8398 16.5 13.1429C16.5 13.446 16.6185 13.7367 16.8295 13.951C17.0405 14.1653 17.3266 14.2857 17.625 14.2857Z"
                      fill="white"
                    />
                  </svg>
                  <div className="d-flex flex-column">
                    <h6 className="code-visby-body2-demibold">{contact.directions[0].title}</h6>
                    <p className="code-visby-subtitle1-medium">
                      {contact.directions[0].text}{" "}
                    </p>
                  </div>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M18 11H13V6H18M16.5 17C16.1022 17 15.7206 16.842 15.4393 16.5607C15.158 16.2794 15 15.8978 15 15.5C15 15.1022 15.158 14.7206 15.4393 14.4393C15.7206 14.158 16.1022 14 16.5 14C16.8978 14 17.2794 14.158 17.5607 14.4393C17.842 14.7206 18 15.1022 18 15.5C18 15.8978 17.842 16.2794 17.5607 16.5607C17.2794 16.842 16.8978 17 16.5 17ZM11 11H6V6H11M7.5 17C7.10218 17 6.72064 16.842 6.43934 16.5607C6.15804 16.2794 6 15.8978 6 15.5C6 15.1022 6.15804 14.7206 6.43934 14.4393C6.72064 14.158 7.10218 14 7.5 14C7.89782 14 8.27936 14.158 8.56066 14.4393C8.84196 14.7206 9 15.1022 9 15.5C9 15.8978 8.84196 16.2794 8.56066 16.5607C8.27936 16.842 7.89782 17 7.5 17ZM12 2C7.58 2 4 2.5 4 6V15.5C4 16.4283 4.36875 17.3185 5.02513 17.9749C5.6815 18.6313 6.57174 19 7.5 19L6 20.5V21H18V20.5L16.5 19C17.4283 19 18.3185 18.6313 18.9749 17.9749C19.6313 17.3185 20 16.4283 20 15.5V6C20 2.5 16.42 2 12 2Z"
                      fill="white"
                    />
                  </svg>
                  <div className="d-flex flex-column">
                    <h6 className="code-visby-body2-demibold">{contact.directions[1].title}</h6>
                    <p className="code-visby-subtitle1-medium">
                      {contact.directions[1].text}
                    </p>
                  </div>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9.84855 4.6875C9.84855 4.23995 10.0224 3.81072 10.3317 3.49426C10.6411 3.17779 11.0607 3 11.4983 3C11.9358 3 12.3554 3.17779 12.6648 3.49426C12.9742 3.81072 13.148 4.23995 13.148 4.6875C13.148 5.13505 12.9742 5.56428 12.6648 5.88074C12.3554 6.19721 11.9358 6.375 11.4983 6.375C11.0607 6.375 10.6411 6.19721 10.3317 5.88074C10.0224 5.56428 9.84855 5.13505 9.84855 4.6875ZM11.2233 15.375V19.875C11.2233 20.4973 10.7318 21 10.1235 21C9.51517 21 9.02369 20.4973 9.02369 19.875V12.0316L8.04072 13.7051C7.72796 14.2359 7.05088 14.4082 6.53191 14.0883C6.01293 13.7684 5.84452 13.0758 6.15728 12.5449L8.16102 9.13477C8.75904 8.11875 9.83137 7.49648 10.9896 7.49648H12.0104C13.1686 7.49648 14.241 8.11875 14.839 9.13477L16.8427 12.5449C17.1555 13.0758 16.9871 13.7684 16.4681 14.0883C15.9491 14.4082 15.272 14.2359 14.9593 13.7051L13.9729 12.0316V19.875C13.9729 20.4973 13.4814 21 12.8731 21C12.2647 21 11.7732 20.4973 11.7732 19.875V15.375H11.2233Z"
                      fill="white"
                    />
                  </svg>
                  <div className="d-flex flex-column">
                    <h6 className="code-visby-body2-demibold">{contact.directions[2].title}</h6>
                    <p className="code-visby-subtitle1-medium">
                      {contact.directions[2].text}{" "}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="text-end">
              <img src="/contact/elage-2_png.webp" alt="" />
            </div>
          </section>

          <section
            className="code-contact-question d-flex flex-column gap-3 align-items-start"
            id="faq"
          >
            <h3 className="code--visby-h4-bold mx-auto code-visby-h5-bold mx-auto">
              {contact.faqTitle}
            </h3>
            <div style={{ width: "100%", overflowX: "auto" }}>
              <ul
                ref={tagRef}
                className={`tag code-visby-subtitle1-medium mx-auto${tagBig ? " big" : ""}`}
                data-slick-initialized="false"
              >
                {FAQ_TABS.map((tab) => (
                  <li
                    key={tab.id}
                    className={
                      activeTab === tab.id ? "active allBg" : ""
                    }
                    data-for={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </li>
                ))}
              </ul>
            </div>
            <div className="tab-content w-100">
              {FAQ_TABS.map((tab) => (
                <div
                  key={tab.id}
                  className="questions  flex-column gap-2"
                  id={tab.id}
                  style={{
                    marginTop: "10px",
                    display: activeTab === tab.id ? "flex" : "none",
                  }}
                >
                  {tab.items.map((item, index) => {
                    const itemId = `${tab.id}-${index}`;
                    return (
                      <FaqItem
                        key={itemId}
                        item={item}
                        itemId={itemId}
                        isActive={openId === itemId}
                        onToggle={handleToggle}
                        copiedId={copiedId}
                        onCopy={handleCopy}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </section>
        </main>
    </div>
  );
}
