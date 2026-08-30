"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronRight } from "./Icons";
import {
  ACADEMY_ITEMS,
  BOTTOM_MENUS,
  EDUCATION_CATEGORIES,
  SCHOLAR_ITEMS,
} from "./headerData";

export default function MezunlarHeader() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [leftActive, setLeftActive] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  const isOpen = hoverIndex !== null && !mobileOpen;

  const handleEnter = (e: React.MouseEvent<HTMLLIElement>, idx: number) => {
    const li = e.currentTarget;
    setHoverIndex(idx);
    setIndicator({ left: li.offsetLeft, width: li.offsetWidth });
    if (idx === 1) setLeftActive(0);
  };

  const closeMenus = () => {
    setHoverIndex(null);
    setMobileOpen(false);
  };

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setHoverIndex(null);
      }
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  useEffect(() => {
    document.body.style.overflowY = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflowY = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <div
        className={`overlay${isOpen || mobileOpen ? " is-open" : ""}`}
        onClick={closeMenus}
      />
      <header ref={navRef}>
        <nav className={`code-nav${mobileOpen ? " mobile-open" : ""}`}>
          <div className="code-nav-desktop">
            <div className="code-nav-top d-none d-lg-block">
              <div className="d-flex justify-content-between align-items-center h-100">
                <ul style={{ gap: 40 }} className="d-flex h-100 align-items-center">
                  <li className="active">
                    <a href="/">Hər kəs üçün</a>
                  </li>
                  <li>
                    <a href="https://code.edu.az/korporativ/">Korporativ həllər</a>
                  </li>
                </ul>
                <ul
                  style={{ gap: 40 }}
                  className="d-flex code-nav-top-right h-100 align-items-center"
                >
                  <li>
                    <Link href="/karyera-merkezi">Karyera Mərkəzi</Link>
                  </li>
                  <li>
                    <Link href="/mezunlarimiz">Məzunlarımız</Link>
                  </li>
                  <li>
                    <Link href="/elaqe">Əlaqə</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="code-nav-bottom">
              <div className="d-flex justify-content-between align-items-center h-100">
                <a href="/" className="code-logo">
                  <img
                    src="/10il-Logo-300x75_png.webp"
                    alt="site logo"
                    style={{ height: 36 }}
                  />
                </a>
                <div className="d-flex align-items-center gap-2 before-btn nav-active">
                  <img src="/mezunlar/chevron-left.svg" alt="prev" />
                  <p className="code-visby-body2-demibold">Geri</p>
                </div>

                <div
                  className={`h-100 code-navbar-menu-full d-none d-lg-flex${isOpen ? " open" : ""}`}
                  id="code-navbar-menu-full"
                  data-hover={hoverIndex ?? undefined}
                  onMouseLeave={() => setHoverIndex(null)}
                >
                  <ul
                    style={{
                      gap: 40,
                      ["--after-left" as string]: `${indicator.left}px`,
                      ["--after-width" as string]: isOpen ? `${indicator.width}px` : "0px",
                    }}
                    className="d-flex ul-menu h-100 code-navbar-menu-item align-items-center"
                  >
                    {BOTTOM_MENUS.map((item, idx) => (
                      <li
                        key={item.id}
                        className="position-relative has-drop h-100 d-flex align-items-center"
                        onMouseEnter={(e) => handleEnter(e, idx)}
                      >
                        <a href={item.href}>{item.label}</a>
                      </li>
                    ))}
                  </ul>

                  <div className="code-dropdown-menu-top">
                    <div className="code-dropdown-menu">
                      {hoverIndex === 0 && (
                        <div className="code-dropdown-menu-item">
                          <div className="academy">
                            {ACADEMY_ITEMS.map((item) => (
                              <div className="academy-item" key={item.title}>
                                <a href={item.href}>
                                  <div className="text">
                                    <h5 className="code-visby-body1-demibold fw-semibold">
                                      {item.title}
                                    </h5>
                                    <span className="rounded-circle d-flex">
                                      <ChevronRight />
                                    </span>
                                  </div>
                                  <div className="img">
                                    <img src={item.img} alt="academy image" />
                                  </div>
                                </a>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {hoverIndex === 1 && (
                        <div className="code-dropdown-menu-item">
                          <div id="code-dropdown-slider-menu">
                            <ul
                              className="code-nav-dropdown-left"
                              style={{ ["--after-top" as string]: `${leftActive * 96}px` }}
                            >
                              {EDUCATION_CATEGORIES.map((cat, i) => (
                                <li
                                  key={cat.id}
                                  onMouseEnter={() => setLeftActive(i)}
                                >
                                  <a href="#">
                                    <h4>{cat.h}</h4>
                                    <p style={{ maxWidth: 150 }}>{cat.p}</p>
                                  </a>
                                </li>
                              ))}
                            </ul>
                            <div className="code-nav-dropdown-right">
                              <div className="code-nav-dropdown-right-inner">
                                {EDUCATION_CATEGORIES.map((cat, i) => (
                                  <div
                                    key={cat.id}
                                    className={`code-nav-dropdown-right-inner-item code-nav-submenu${
                                      i === leftActive ? " is-active" : ""
                                    }`}
                                  >
                                    <ul>
                                      {cat.items.map((it) => (
                                        <li key={it.title}>
                                          <a href={it.href} className="d-flex">
                                            <div className="img">
                                              <img src={it.img} alt="img" />
                                            </div>
                                            <div>
                                              <h4>{it.title}</h4>
                                              <p>{it.p}</p>
                                              {it.tags.map((tag) => (
                                                <span className="eduleveltag" key={tag}>
                                                  {tag}
                                                </span>
                                              ))}
                                            </div>
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {(hoverIndex === 2 || hoverIndex === 3) && (
                        <div className="code-dropdown-menu-item">
                          <div className="scholar">
                            {SCHOLAR_ITEMS.map((item) => (
                              <div className="scholar-item" key={item.title}>
                                <a href={item.href}>
                                  <div className="text">
                                    <h5 className="code-visby-body1-demibold fw-semibold">
                                      {item.title}
                                    </h5>
                                    <span className="rounded-circle d-flex">
                                      <ChevronRight />
                                    </span>
                                  </div>
                                  <div className="img">
                                    <img src={item.img} alt="img" />
                                  </div>
                                </a>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="d-none d-lg-block">
                  <Link href="/muraciet" className="amuraciet">
                    <button
                      type="button"
                      className="code-btn-base code-btn-medium code-btn-hover-dark code-btn"
                    >
                      <img
                        src="/mezunlar/send-01.svg"
                        alt="apply"
                        style={{ height: 20 }}
                      />
                      Müraciət et
                    </button>
                  </Link>
                </div>

                <div className="d-flex d-lg-none mobile gap-2">
                  <Link href="/muraciet" className="mobile-send amuraciet">
                    <img src="/mezunlar/send-01.svg" alt="send" style={{ height: 20 }} />
                  </Link>
                  <div className="mobile-menu" onClick={() => setMobileOpen(true)}>
                    <img src="/mezunlar/menu-02.svg" alt="mobile menu" />
                  </div>
                  <div className="mobile-close" onClick={() => setMobileOpen(false)}>
                    <img src="/mezunlar/x.svg" alt="close" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {mobileOpen && (
            <div className="mobile-dropdown mt-1">
              <div className="mobile-dropdown-top">
                <ul className="d-flex" style={{ gap: 24 }}>
                  <li className="active">Hər kəs üçün</li>
                  <li>Korporativ həllər</li>
                </ul>
              </div>
              <div className="mobile-dropdown-bottom">
                <ul>
                  {BOTTOM_MENUS.map((item) => (
                    <li key={item.id}>
                      <a href={item.href}>{item.label}</a>
                    </li>
                  ))}
                  <li>
                    <Link href="/karyera-merkezi">Karyera Mərkəzi</Link>
                  </li>
                  <li>
                    <Link href="/mezunlarimiz">Məzunlarımız</Link>
                  </li>
                  <li>
                    <Link href="/elaqe">Əlaqə</Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
