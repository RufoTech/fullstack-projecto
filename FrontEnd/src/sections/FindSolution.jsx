"use client";
import React from "react";
import data from "@/data/data";

const { findSolution } = data;

export default function FindSolution() {
  return (
    <section className="overflow-hidden grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-1">
      <div className="p-6 bg-white rounded-[20px] flex flex-col justify-center lg:order-1">
        <div className="self-start inline-flex items-center gap-[6px] px-2 py-[6px] pl-2 bg-[#F1F6F9] text-[#5E6875] text-[12px] leading-[16px] rounded-full border-0 font-semibold">
          <img
            src={findSolution.badgeIcon}
            alt=""
            width={16}
            height={16}
          />
          {findSolution.badge}
        </div>
        <h6 className="mt-6 mb-0 text-[#20172A] font-semibold text-[16px] leading-[24px] lg:text-[18px] lg:leading-[28px]">
          {findSolution.title}
        </h6>
        <p className="mt-1 mb-3 text-[#5E6875] font-semibold text-[12px] leading-[16px] lg:text-[14px] lg:leading-[20px]">
          {findSolution.text}
        </p>
        <a href={findSolution.ctaHref} className="self-start no-underline">
          <button
            type="button"
            className="inline-flex items-center justify-center px-4 py-[10px] h-10 rounded-[12px] bg-[#6537A6] text-white text-sm font-semibold hover:bg-[#493365] hover:shadow-[0_8px_18px_rgba(101,55,166,0.22)] hover:-translate-y-px transition-all duration-250 cursor-pointer border-0 shadow-[0_1px_1px_rgba(32,23,42,0.08)]"
          >
            {findSolution.ctaLabel}
          </button>
        </a>
      </div>

      <div className="lg:order-2">
        <img
          className="rounded-[20px] w-full h-full object-cover block"
          src={findSolution.image}
          alt={findSolution.imageAlt}
          loading="lazy"
        />
      </div>
    </section>
  );
}
