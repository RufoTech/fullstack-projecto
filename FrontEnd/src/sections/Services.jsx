"use client";
import React, { useState, useMemo } from "react";
import { motion, useAnimation } from "framer-motion";
import data from "@/data/data";

const { services } = data;
const { items: programs, tabs } = services;

function matchesLevel(level, active) {
  if (active === "all") return true;
  if (active === "starter") {
    return level === "starter" || level === "both" || level === "universal";
  }
  if (active === "upgrader") {
    return level === "upgrader" || level === "both" || level === "universal";
  }
  return false;
}

export default function Services() {
  const [activeTab, setActiveTab] = useState("all");
  const [showAll, setShowAll] = useState(false);
  const [isMoreIconAnimating, setIsMoreIconAnimating] = useState(false);
  const moreIconControls = useAnimation();

  const filtered = useMemo(
    () => programs.filter((p) => matchesLevel(p.level, activeTab)),
    [activeTab]
  );

  const visible = showAll ? filtered : filtered.slice(0, 8);
  const canShowMore = filtered.length > 8 && !showAll;

  const handleTab = (tabFor) => {
    setActiveTab(tabFor);
    setShowAll(false);
  };

  const animateMoreIcon = async () => {
    if (isMoreIconAnimating) return;

    setIsMoreIconAnimating(true);
    await moreIconControls.start({
      y: [0, -50, 0],
      transition: { duration: 0.7, times: [0, 0.5, 1] },
    });
    setIsMoreIconAnimating(false);
  };

  return (
    <section>
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <h4 className="m-0 text-[#20172A] font-bold text-[20px] leading-[28px] lg:text-[36px] lg:leading-[48px]">
          {services.title}
        </h4>

        <div className="flex justify-start md:justify-end">
          <ul className="inline-flex flex-wrap gap-2 p-0 m-0 list-none font-semibold">
            {tabs.map((t) => (
              <li
                key={t.id}
                className={`inline-block w-auto px-4 py-[10px] bg-[#ebeef2] rounded-full cursor-pointer whitespace-nowrap transition-all duration-300 text-[14px] text-[#20172A] hover:bg-[#dfe4eb] ${
                  activeTab === t.for ? "!bg-[#dfe4eb]" : ""
                }`}
                onClick={() => handleTab(t.for)}
              >
                {t.label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="px-0 py-4 lg:py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {visible.map((p) => (
          <div
            key={p.id}
            className="bg-white border border-[#D9E2EA] rounded-[20px] overflow-hidden transition-all duration-300 block hover:bg-[#F7F9FB] hover:shadow-[0_12px_24px_rgba(101,55,166,0.10)] group cursor-pointer"
          >
            <a href={p.href} className="p-5 inline-block w-full no-underline text-inherit">
              <div style={{ minHeight: "90px" }}>
                <div className="flex justify-between items-start gap-2">
                  <div className="overflow-hidden flex-1">
                    <h3 className="whitespace-nowrap overflow-hidden text-ellipsis m-0 font-semibold text-[18px] leading-[28px] text-[#20172A] w-full">
                      {p.title}
                    </h3>
                  </div>
                  <span className="p-[6px] bg-[#F1F6F9] rounded-full flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-[#6537A6]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M7.5 15L12.5 10L7.5 5"
                        stroke="#5E6875"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="group-hover:stroke-white transition-colors"
                      ></path>
                    </svg>
                  </span>
                </div>
                <p className="mt-1 mb-3 text-[#5E6875] font-semibold text-[12px] leading-[16px] lg:text-[14px] lg:leading-[20px] line-clamp-1">
                  {p.desc}
                </p>
              </div>
              <div className="flex items-center justify-center h-[200px] overflow-hidden rounded-[14px] bg-[#F1F6F9]">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="h-[200px] w-[200px] object-cover transition-all duration-300 group-hover:scale-[1.04]"
                />
              </div>
            </a>
          </div>
        ))}
      </div>

      {canShowMore && (
        <button
          type="button"
          className="mx-auto flex items-center justify-center gap-2 overflow-hidden px-4 py-[10px] h-10 rounded-full bg-[#20172A] text-white hover:bg-[#3A294F] hover:shadow-[0_8px_18px_rgba(101,55,166,0.22)] hover:-translate-y-px text-sm font-semibold transition-all duration-250 cursor-pointer border-0 shadow-[0_1px_1px_rgba(32,23,42,0.08)]"
          onClick={() => setShowAll(true)}
          onMouseEnter={animateMoreIcon}
          onMouseLeave={() => setIsMoreIconAnimating(false)}
        >
          <motion.div animate={moreIconControls} initial={{ x: 0, y: 0 }} className="relative">
            <img
              src={services.moreIcon}
              alt=""
              width={20}
              height={20}
              style={{ width: "20px", height: "20px" }}
            />
          </motion.div>
          {services.moreLabel}
        </button>
      )}
    </section>
  );
}
