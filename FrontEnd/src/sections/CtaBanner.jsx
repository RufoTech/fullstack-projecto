"use client";
import React from "react";
import data from "@/data/data";

const { banner } = data;

export default function CtaBanner() {
  return (
    <section
      className="p-[24px_20px] lg:p-[40px_64px] bg-[#281D38] rounded-[20px] cursor-pointer overflow-hidden block"
      onClick={() => (window.location.href = banner.href)}
    >
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-16 w-full text-center lg:text-left">
        <div className="flex-1 min-w-0 text-center lg:text-left">
          <h2 className="m-0 text-[#F7F4FA] font-[family-name:var(--font-geist-mono)] font-bold text-[32px] leading-[36px] lg:text-[48px] lg:leading-[48px] text-center lg:text-left">
            {banner.heading}
          </h2>
          <h4 className="mt-1 mb-0 text-[#F7F4FA] font-bold text-[24px] leading-[36px] lg:text-[36px] lg:leading-[48px] text-center lg:text-left">
            {banner.tag}
          </h4>
          <p className="mt-2 mb-0 text-[#ABB5C1] text-[16px] leading-[24px] max-w-full lg:max-w-[650px] text-center lg:text-left">
            {banner.text}
          </p>
        </div>
        <div className="shrink-0 flex items-center justify-center">
          <img
            src={banner.image}
            alt={banner.imageAlt}
            loading="lazy"
            width={280}
            height={280}
            className="w-[240px] h-[240px] lg:w-[260px] lg:h-[260px] object-contain block"
          />
        </div>
      </div>
    </section>
  );
}
