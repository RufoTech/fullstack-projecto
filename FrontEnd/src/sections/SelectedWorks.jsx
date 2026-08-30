"use client";
import React, { useState } from "react";
import data from "@/data/data";

const { selectedWorks } = data;
const { items: works, tabs } = selectedWorks;

export default function SelectedWorks() {
  const [active, setActive] = useState(tabs[0].id);

  const visibleWorks = works.filter((g) => g.cat === active);

  return (
    <section className="flex flex-col gap-6">
      <h4 className="m-0 text-[#20172A] font-bold text-[20px] leading-[28px] lg:text-[36px] lg:leading-[48px]">
        {selectedWorks.title}
      </h4>

      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 lg:gap-0">
        <ul className="inline-flex flex-wrap lg:flex-nowrap gap-2 list-none p-0 m-0">
          {tabs.map((t) => (
            <li key={t.id}>
              <button
                className={`rounded-full border-0 px-4 py-[10px] text-[14px] font-semibold leading-5 text-[#48345D] cursor-pointer transition-all duration-300 whitespace-nowrap hover:bg-[#DFE4EB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#48345D] ${
                  active === t.id
                    ? "!bg-white"
                    : "bg-[#EBEEF2]"
                }`}
                type="button"
                aria-pressed={active === t.id}
                onClick={() => setActive(t.id)}
              >
                {t.label}
              </button>
            </li>
          ))}
        </ul>

        <a href={selectedWorks.moreHref} className="hidden lg:inline-flex no-underline">
          <button
            type="button"
            className="inline-flex items-center gap-2 px-4 py-[10px] h-10 rounded-full bg-[#20172A] text-white hover:bg-[#3A294F] hover:shadow-[0_8px_18px_rgba(101,55,166,0.22)] hover:-translate-y-px text-sm font-semibold transition-all duration-250 cursor-pointer border-0 shadow-[0_1px_1px_rgba(32,23,42,0.08)]"
          >
            {selectedWorks.moreLabel}
            <img
              src={selectedWorks.moreIcon}
              alt=""
              width={20}
              height={20}
            />
          </button>
        </a>
      </div>

      <div>
        <div className="w-full">
          <div className="flex flex-wrap w-full gap-[14px]">
            {visibleWorks.map((g, i) => (
              <a
                key={`${g.name}-${i}`}
                href={g.href}
                className="p-5 flex min-w-0 flex-col justify-center items-start gap-4 bg-white rounded-[20px] overflow-hidden flex-[1_0_48%] max-w-[calc(50%-7px)] lg:flex-[1_0_18%] lg:max-w-[calc(20%-12px)] m-0 box-border text-inherit no-underline transition-colors duration-300 hover:bg-[#E3E9EF]"
              >
                <div className="mb-4">
                  <img src={g.img} alt={g.name} loading="lazy" className="w-20 h-20 object-cover rounded-full" />
                </div>
                <div className="w-full">
                  <h6 className="m-0 mb-[2px] text-[#20172A] font-semibold text-[16px] leading-[24px] line-clamp-2">
                    {g.name} ({g.field})
                  </h6>
                  <p className="m-0 text-[#5E6875] text-[14px] leading-[20px] whitespace-nowrap truncate font-medium">
                    {g.company || "\u00A0"}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
