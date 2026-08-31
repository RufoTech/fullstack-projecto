"use client";
import React from "react";
import data from "@/data/data";

const { advantages } = data;

export default function Advantages() {
  return (
    <section className="text-center">
      <div className="text-left">
        <h4 className="m-0 text-[#20172A] font-bold text-[20px] leading-[28px] lg:text-[36px] lg:leading-[48px]">
          {advantages.title}
        </h4>
      </div>
      <div className="mt-6 lg:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-2">
        {advantages.items.map((it) => {
          const Icon = it.icon;
          return (
            <div
              key={it.title}
              className="flex flex-col items-center px-[22px] lg:px-4"
            >
              <div className="flex items-center justify-center">
                <Icon size={28} strokeWidth={1.8} />
              </div>
              <h3 className="m-0 pt-4 pb-2 text-[#20172A] font-semibold text-[16px] leading-[24px]">
                {it.title}
              </h3>
              <p className="m-0 text-[#5E6875] font-semibold text-[12px] leading-[16px] lg:text-[14px] lg:leading-[20px]">
                {it.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
