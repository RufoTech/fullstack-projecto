"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import data from "@/data/data";

const { brand, header } = data;
const topLeft = header.topLeft;
const topRight = header.topRight;
const bottomMenus = header.bottomMenus;
const academyItems = header.studioItems;
const educationCategories = header.serviceCategories;
const scholarItems = header.processItems;
const projectItems = header.projectItems;

function ChevronRight() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M7.5 15L12.5 10L7.5 5" stroke="#62717C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Header() {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [leftActive, setLeftActive] = useState(0);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubMenu, setMobileSubMenu] = useState(null);

  const navRef = useRef(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });

  const isDesktopOpen = hoverIndex !== null && !mobileOpen;

  const handleMenuEnter = (e, idx) => {
    const li = e.currentTarget;
    setHoverIndex(idx);
    setIndicatorStyle({
      left: li.offsetLeft,
      width: li.offsetWidth,
      opacity: 1,
    });

    if (idx === 1) {
      setLeftActive(0);
    }
  };

  const handleMenuLeave = () => {
    setHoverIndex(null);
    setIndicatorStyle((prev) => ({ ...prev, opacity: 0, width: 0 }));
  };

  useEffect(() => {
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        handleMenuLeave();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add("nav-open");
    } else {
      document.body.classList.remove("nav-open");
    }
    return () => document.body.classList.remove("nav-open");
  }, [mobileOpen]);

  const handleMobileBack = () => {
    setMobileSubMenu(null);
  };

  const handleOverlayClick = () => {
    handleMenuLeave();
    setMobileOpen(false);
    setMobileSubMenu(null);
  };

  const isMobileSubActive = mobileSubMenu !== null;
  const isOverlayActive = isDesktopOpen || mobileOpen;

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className={`fixed inset-0 w-screen h-screen bg-[#13171a]/45 backdrop-blur-[2px] z-[95] transition-all duration-300 ${
          isOverlayActive ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={handleOverlayClick}
      />

      <div className="w-full">
        <header ref={navRef} className="relative z-[100]">
          <nav className="relative">
            <div className="bg-white border border-[#D9E2EA] rounded-[16px] shadow-[0_8px_24px_rgba(43,61,78,0.05)] relative z-[100]">
              {/* Top subnav (Desktop) */}
              <div className="hidden lg:block border-b border-[#F1F6F9] px-6 h-[52px]">
                <div className="flex justify-between items-center h-full">
                  <ul className="flex h-full items-center gap-10 p-0 m-0 list-none">
                    {topLeft.map((item) => (
                      <li
                        key={item.label}
                        className={`h-full flex items-center -mb-[1px] transition-all duration-300 ${
                          item.active
                            ? "text-[#13171A] font-semibold border-b-2 border-[#6537A6]"
                            : "text-[#62717C] border-b-2 border-transparent hover:border-[#6537A6] hover:text-[#13171A]"
                        }`}
                      >
                        <Link href={item.href} className="h-full flex items-center text-inherit no-underline">
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <ul className="flex h-full items-center gap-10 p-0 m-0 list-none">
                    {topRight.map((item) => (
                      <li
                        key={item.label}
                        className="h-full flex items-center -mb-[1px] border-b-2 border-transparent hover:border-[#6537A6] transition-all duration-300 text-[#62717C] hover:text-[#13171A]"
                      >
                        <Link href={item.href} className="h-full flex items-center text-inherit no-underline">
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom main nav */}
              <div className="relative px-6 h-[80px]">
                <div className="flex justify-between items-center h-full">
                  <Link href="/" className={`flex items-center no-underline cursor-pointer ${isMobileSubActive ? "hidden" : "flex"}`}>
                    <span className="text-[#20172A] font-[family-name:var(--font-geist-mono)] text-[18px] font-bold tracking-[-1.3px] transition-colors duration-300 hover:text-[#6537A6]" aria-label={brand.ariaLabel}>
                      {brand.prefix}<span className="text-[#6537A6]">{brand.accent}</span>{brand.suffix}
                    </span>
                  </Link>

                  {/* Mobile Submenu Back Button */}
                  <div
                    className={`items-center gap-2 cursor-pointer select-none ${isMobileSubActive ? "flex" : "hidden"}`}
                    onClick={handleMobileBack}
                  >
                    <img
                      src={header.icons.chevronLeft}
                      alt="prev"
                    />
                    <p className="m-0 text-[#20172A] font-semibold text-[16px] leading-[24px]">{header.mobile.backLabel}</p>
                  </div>

                  {/* Desktop Nav Items */}
                  <div
                    className="h-full hidden lg:flex"
                    onMouseLeave={handleMenuLeave}
                  >
                    <ul className="flex h-full items-center gap-8 xl:gap-10 p-0 m-0 list-none relative">
                      {bottomMenus.map((menu, idx) => (
                        <li
                          key={menu.id}
                          className="h-full flex items-center cursor-pointer"
                          onMouseEnter={(e) => handleMenuEnter(e, idx)}
                        >
                          <Link
                            href={menu.href}
                            className="py-[10px] text-[#62717C] text-sm font-semibold flex items-center no-underline transition-colors duration-200 hover:text-[#13171A]"
                          >
                            {menu.label}
                          </Link>
                        </li>
                      ))}
                      {/* Active indicator bar */}
                      <span
                        className="absolute bottom-0 h-[2px] bg-[#6537A6] transition-all duration-300 pointer-events-none"
                        style={{
                          left: `${indicatorStyle.left}px`,
                          width: `${indicatorStyle.width}px`,
                          opacity: indicatorStyle.opacity,
                        }}
                      />
                    </ul>

                    {/* Mega Dropdown Menus */}
                    <div
                      className={`absolute top-[50px] left-0 right-0 w-full z-10 transition-all duration-300 ${
                        isDesktopOpen ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
                      }`}
                    >
                      <div className="pt-[38px] rounded-[20px] overflow-hidden">
                        {/* Dropdown 0: Studiyamız (Slides from left) */}
                        {hoverIndex === 0 && (
                          <div
                            key={`dropdown-0-${hoverIndex}`}
                            className="anim-left bg-[#F1F6F9] rounded-[20px] p-2 grid grid-cols-4 gap-2 overflow-hidden"
                          >
                            {academyItems.map((item) => (
                              <div
                                key={item.title}
                                className="bg-white rounded-[16px] transition-all duration-300 hover:bg-[#E3E9EF] group"
                              >
                                <Link href={item.href} className="p-5 block no-underline text-[#62717C] transition-colors duration-200 group-hover:text-[#13171A]">
                                  <div className="flex justify-between items-center">
                                    <h5 className="m-0 text-inherit font-semibold text-[18px] leading-[28px]">
                                      {item.title}
                                    </h5>
                                    <span className="p-[6px] rounded-full bg-[#E3E9EF] transition-all duration-300 group-hover:bg-[#6537A6] flex items-center justify-center">
                                      <ChevronRight />
                                    </span>
                                  </div>
                                  <div className="flex justify-center mt-2">
                                    <img className="w-[200px] h-[200px] object-cover rounded-[12px] mx-auto" src={item.img} alt="academy image" />
                                  </div>
                                </Link>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Dropdown 1: Services Slider / Xidmətlər (Slides from right) */}
                        {hoverIndex === 1 && (
                          <div
                            key={`dropdown-1-${hoverIndex}`}
                            className="anim-right w-full relative rounded-[20px] bg-[#F1F6F9] inline-flex p-[8px_8px_8px_40px] overflow-hidden"
                          >
                            {/* Colored ribbon indicator */}
                            <div
                              className="absolute top-0 left-0 h-full w-8 rounded-l-[20px] transition-colors duration-400 bg-cover bg-no-repeat"
                              style={{ backgroundColor: educationCategories[leftActive]?.color || "#0257f5", backgroundImage: `url(${header.icons.ribbon})` }}
                            />

                            {/* Left category list */}
                            <ul className="w-[244px] shrink-0 relative z-[2] flex flex-col p-0 m-0 list-none">
                              {/* Sliding active pill indicator */}
                              <div
                                className="absolute w-full h-[96px] bg-white rounded-[16px] z-[1] transition-all duration-200 pointer-events-none"
                                style={{ top: `${leftActive * 96}px` }}
                              />
                              <div
                                className="absolute w-[14px] h-[14px] bg-white z-[2] rotate-45 transition-all duration-200 pointer-events-none right-[-7px]"
                                style={{ top: `${leftActive * 96 + 41}px` }}
                              />

                              {educationCategories.map((cat, cIdx) => (
                                <li
                                  key={cat.id}
                                  className="p-[16px_20px] rounded-[16px] w-[244px] h-[96px] box-border relative z-[3] cursor-pointer list-none flex flex-col justify-center"
                                  onMouseEnter={() => setLeftActive(cIdx)}
                                >
                                  <Link href="/xidmetler" className="block no-underline group">
                                    <h4 className={`m-0 font-semibold text-[16px] leading-[24px] transition-colors ${leftActive === cIdx ? "text-[#13171A]" : "text-[#62717C] group-hover:text-[#13171A]"}`}>{cat.h}</h4>
                                    <p className="m-0 text-[#62717C] text-[14px] leading-[20px] font-medium max-w-[150px]">{cat.p}</p>
                                  </Link>
                                </li>
                              ))}
                            </ul>

                            {/* Right area with sub-items */}
                            <div className="p-[20px_32px] bg-white rounded-[16px] overflow-hidden ml-1 flex-1 min-h-[576px] flex items-start">
                              <div className="w-full">
                                {educationCategories.map((cat, cIdx) => (
                                  <div
                                    key={cat.id}
                                    className={leftActive === cIdx ? "flex flex-col gap-[30px] w-full" : "hidden"}
                                  >
                                    <ul className="m-0 p-0 flex flex-wrap gap-y-2 list-none w-full">
                                      {cat.items.map((it) => (
                                        <li
                                          key={it.title}
                                          className="w-1/2 p-0 transition-all duration-300 cursor-pointer flex hover:bg-[#F1F6F9] hover:rounded-[16px]"
                                        >
                                          <Link href={it.href} className="p-3 w-full flex justify-start items-start gap-3 no-underline text-[#62717C] group">
                                            <div className="min-w-[44px] h-[44px] bg-[#C5D0DB] rounded-[12px] overflow-hidden shrink-0">
                                              <img src={it.img} alt="img" className="w-11 h-11 object-cover rounded-[12px] block bg-white" />
                                            </div>
                                            <div>
                                              <h4 className="m-0 text-inherit font-semibold text-[16px] leading-[24px] flex items-center flex-wrap transition-colors group-hover:text-[#13171A]">
                                                {it.title}
                                                {it.tag && (
                                                  <span className="inline-block bg-[#6537A6] text-white rounded-full px-[10px] py-[2px] ml-[6px] text-[10px] font-medium leading-[16px]">
                                                    {it.tag}
                                                  </span>
                                                )}
                                              </h4>
                                              <p className="mt-[2px] mb-0 text-[#62717C] text-[14px] leading-[20px] font-medium">{it.desc ?? it.p}</p>
                                            </div>
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Dropdown 2: Model / İş prosesimiz (Slides from right) */}
                        {hoverIndex === 2 && (
                          <div
                            key={`dropdown-2-${hoverIndex}`}
                            className="anim-right bg-[#F1F6F9] rounded-[20px] p-2 grid grid-cols-3 gap-2 overflow-hidden"
                          >
                            {scholarItems.map((item) => (
                              <div
                                key={item.title}
                                className="bg-white rounded-[16px] transition-all duration-300 hover:bg-[#E3E9EF] group"
                              >
                                <Link href={item.href} className="p-5 block no-underline text-[#62717C] transition-colors duration-200 group-hover:text-[#13171A]">
                                  <div className="flex justify-between items-center">
                                  <h5 className="m-0 text-inherit font-semibold text-[18px] leading-[28px]">
                                      {item.title}
                                    </h5>
                                    <span className="p-[6px] rounded-full bg-[#E3E9EF] transition-all duration-300 group-hover:bg-[#6537A6] flex items-center justify-center">
                                      <ChevronRight />
                                    </span>
                                  </div>
                                  <div className="flex justify-center mt-2">
                                    <img className="w-[200px] h-[200px] object-cover rounded-[12px] mx-auto" src={item.img} alt="img" />
                                  </div>
                                </Link>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Dropdown 3: Layihələr */}
                        {hoverIndex === 3 && (
                          <div
                            key={`dropdown-3-${hoverIndex}`}
                            className="anim-right bg-[#F1F6F9] rounded-[20px] p-2 grid grid-cols-3 gap-2 overflow-hidden"
                          >
                            {projectItems.map((item) => (
                              <div
                                key={item.title}
                                className="bg-white rounded-[16px] transition-all duration-300 hover:bg-[#E3E9EF] group"
                              >
                                <Link href={item.href} className="p-5 block no-underline text-[#62717C] transition-colors duration-200 group-hover:text-[#13171A]">
                                  <div className="flex justify-between items-center">
                                  <h5 className="m-0 text-inherit font-semibold text-[18px] leading-[28px]">
                                      {item.title}
                                    </h5>
                                    <span className="p-[6px] rounded-full bg-[#E3E9EF] transition-all duration-300 group-hover:bg-[#6537A6] flex items-center justify-center">
                                      <ChevronRight />
                                    </span>
                                  </div>
                                  <div className="flex justify-center mt-2">
                                    <img className="w-[200px] h-[200px] object-cover rounded-[12px] mx-auto" src={item.img} alt="img" />
                                  </div>
                                </Link>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* CTA button (Desktop) */}
                  <div className="hidden lg:block">
                    <Link href={header.cta.href} className="no-underline">
                      <button
                        type="button"
                        className="inline-flex items-center justify-center gap-2 px-4 py-[10px] h-10 rounded-[12px] bg-[#6537A6] hover:bg-[#48345d] text-white text-sm font-semibold transition-all duration-300 cursor-pointer border-0 shadow-[0_10px_18px_rgba(101,55,166,0.18)]"
                      >
                        <img
                          src={header.cta.icon}
                          alt=""
                          style={{ height: "20px", filter: "brightness(0) invert(1)" }}
                        />
                        {header.cta.label}
                      </button>
                    </Link>
                  </div>

                  {/* Mobile Action Buttons */}
                  <div className="flex lg:hidden items-center gap-2">
                    {!mobileOpen && (
                      <>
                        <Link
                          href="/muraciet"
                          className="p-2 bg-[#F1F6F9] rounded-[12px] flex items-center justify-center cursor-pointer no-underline"
                        >
                          <img
                            src={header.icons.send}
                            alt="send"
                            style={{ height: "20px" }}
                          />
                        </Link>
                        <div
                          className="p-2 bg-[#F1F6F9] rounded-[12px] flex items-center justify-center cursor-pointer"
                          onClick={() => setMobileOpen(true)}
                        >
                          <img
                            src={header.icons.menu}
                            alt="mobile menu"
                          />
                        </div>
                      </>
                    )}
                    {mobileOpen && (
                      <div
                        className="p-2 bg-[#F1F6F9] rounded-[12px] flex items-center justify-center cursor-pointer"
                        onClick={() => {
                          setMobileOpen(false);
                          setMobileSubMenu(null);
                        }}
                      >
                        <img
                          src={header.icons.close}
                          alt="close"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Drawer */}
            {mobileOpen && (
              <div className="bg-white rounded-[20px] mt-2 shadow-[0_16px_40px_rgba(0,0,0,0.08)] overflow-hidden relative">
                <div className="p-5 border-b border-[#F1F6F9]">
                  <ul className="flex gap-6 p-0 m-0 list-none font-semibold text-[14px] leading-[20px]">
                    <li className="text-[#13171A] relative after:content-[''] after:absolute after:-bottom-5 after:left-0 after:w-full after:h-[2px] after:bg-[#6537A6]">
                      <Link href="/startaplar-ucun" className="no-underline text-inherit">{header.mobile.audienceLeft}</Link>
                    </li>
                    <li className="text-[#62717C] hover:text-[#13171A] transition-colors">
                      <Link href="/biznes-helleri" className="no-underline text-inherit">{header.mobile.audienceRight}</Link>
                    </li>
                  </ul>
                </div>

                <div className="p-[20px_8px] relative">
                  <ul className="flex flex-col gap-6 p-0 m-0 list-none font-semibold text-[16px] leading-[24px]">
                    {/* Studiyamız */}
                    <li className="px-3 cursor-pointer text-[#62717C] hover:text-[#13171A] transition-colors" onClick={() => setMobileSubMenu("academy")}>
                      <div className="flex items-center justify-between">
                        <span>Studiyamız</span>
                        <img
                          src={header.icons.chevronRight}
                          alt="next"
                        />
                      </div>
                      {mobileSubMenu === "academy" && (
                        <div className="absolute inset-0 bg-white p-[20px_8px] z-10 overflow-y-auto rounded-[20px] flex flex-col gap-3">
                          <h5 className="px-3 text-[#62717C] font-semibold text-[16px] leading-[24px] m-0 mb-3">Studiyamız</h5>
                          <ul className="flex flex-col gap-3 p-0 m-0 list-none">
                            {academyItems.map((item) => (
                              <li key={item.title} className="px-3 flex items-center gap-3">
                                <div className="w-11 h-11 bg-[#C5D0DB] rounded-[12px] overflow-hidden shrink-0">
                                  <img src={item.img} alt="academy image" className="w-full h-full object-cover rounded-[12px]" />
                                </div>
                                <Link href={item.href} className="no-underline text-[#62717C] transition-colors hover:text-[#13171A]">
                                  <p className="m-0 font-semibold text-[16px] leading-[24px]">{item.title}</p>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>

                    {/* Xidmətlər */}
                    <div>
                      <li className="bg-[#F1F6F9] p-[20px_12px_20px_16px] rounded-[16px] flex flex-col gap-4">
                        <Link href="/xidmetler" className="block mb-4 no-underline">
                          <h5 className="m-0 text-[#62717C] font-semibold text-[16px] leading-[24px]">Xidmətlər</h5>
                        </Link>
                        <ul className="flex flex-col gap-6 p-0 m-0 list-none">
                          {educationCategories.map((cat, cIdx) => (
                            <li
                              key={cat.id}
                              className="flex items-center justify-between cursor-pointer text-[#62717C] hover:text-[#13171A] transition-colors"
                              onClick={(e) => {
                                e.stopPropagation();
                                setMobileSubMenu(`edu-${cIdx}`);
                              }}
                            >
                              <div className="w-full">
                                <p className="m-0 text-inherit font-semibold text-[16px] leading-[24px]">{cat.h}</p>
                                <p className="mt-[2px] mb-0 text-[#62717C] font-medium text-[14px] leading-[20px] line-clamp-1 max-w-[85%]">
                                  {cat.p}
                                </p>
                              </div>
                              <img
                                src={header.icons.chevronRight}
                                alt="next"
                              />
                              {mobileSubMenu === `edu-${cIdx}` && (
                                <div className="absolute inset-0 bg-white p-[20px_8px] z-10 overflow-y-auto rounded-[20px] flex flex-col gap-3">
                                  <h5 className="px-3 text-[#62717C] font-semibold text-[16px] leading-[24px] m-0 mb-3">{cat.h}</h5>
                                  <ul className="flex flex-col gap-3 p-0 m-0 list-none">
                                    {cat.items.map((it) => (
                                      <li key={it.title} className="px-3 flex items-center gap-3">
                                        <div className="w-11 h-11 bg-[#C5D0DB] rounded-[12px] overflow-hidden shrink-0">
                                          <img src={it.img} alt="img" className="w-full h-full object-cover rounded-[12px]" />
                                        </div>
                                        <div>
                                          <Link href={it.href} className="no-underline text-[#62717C] transition-colors hover:text-[#13171A]">
                                            <p className="m-0 font-semibold text-[16px] leading-[24px]">{it.title}</p>
                                          </Link>
                                        </div>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </li>
                          ))}
                        </ul>
                      </li>
                    </div>

                    {/* İş prosesimiz */}
                    <li className="px-3 cursor-pointer text-[#62717C] hover:text-[#13171A] transition-colors" onClick={() => setMobileSubMenu("model")}>
                      <div className="flex items-center justify-between">
                        <span>{header.mobile.processLabel}</span>
                        <img
                          src={header.icons.chevronRight}
                          alt="next"
                        />
                      </div>
                      {mobileSubMenu === "model" && (
                        <div className="absolute inset-0 bg-white p-[20px_8px] z-10 overflow-y-auto rounded-[20px] flex flex-col gap-3">
                          <h5 className="px-3 text-[#62717C] font-semibold text-[16px] leading-[24px] m-0 mb-3">{header.mobile.processLabel}</h5>
                          <ul className="flex flex-col gap-3 p-0 m-0 list-none">
                            <li className="px-3 flex items-center gap-3">
                              <Link href="/is-prosesimiz" className="no-underline text-[#62717C] transition-colors hover:text-[#13171A]">
                                <p className="m-0 font-semibold text-[16px] leading-[24px]">{scholarItems[0]?.title}</p>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      )}
                    </li>

                    <li className="px-3 text-[#62717C] hover:text-[#13171A] transition-colors">
                      <Link href="/is-prosesimiz" className="flex items-center justify-between no-underline text-inherit">
                        {header.mobile.processLabel}
                        <img
                          src={header.icons.chevronRight}
                          alt="next"
                        />
                      </Link>
                    </li>

                    <li className="px-3 text-[#62717C] hover:text-[#13171A] transition-colors">
                      <Link href="/layiheler" className="flex items-center justify-between no-underline text-inherit">
                        {header.mobile.projectsLabel}
                        <img
                          src={header.icons.chevronRight}
                          alt="next"
                        />
                      </Link>
                    </li>

                    <li className="px-3 text-[#62717C] hover:text-[#13171A] transition-colors">
                      <Link href={header.mobile.contactHref} className="flex items-center justify-between no-underline text-inherit">
                        {header.mobile.contactLabel}
                        <img
                          src={header.icons.chevronRight}
                          alt="next"
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </nav>
        </header>
      </div>
    </>
  );
}
