"use client";
import React from "react";
import data from "@/data/data";

const { statistics } = data;

export default function Statistics() {
  return (
    <section className="grid grid-cols-1 gap-6 items-start text-center min-[993px]:grid-cols-2 min-[993px]:gap-2 min-[993px]:text-left">
      <div className="flex items-start justify-center min-[768px]:justify-start">
        <h4 className="w-[75%] min-[993px]:w-[65%] m-0 font-bold text-[20px] leading-[28px] min-[993px]:text-[36px] min-[993px]:leading-[48px] text-[#20172A]">
          {statistics.title}
        </h4>
      </div>

      <div className="grid grid-cols-1 gap-6 min-[993px]:grid-cols-2 min-[993px]:gap-x-2 min-[993px]:gap-y-12">
        {statistics.items.map((item) => (
          <div className="flex flex-col" key={item.value}>
            <h2 className="font-bold text-[36px] min-[769px]:text-[40px] leading-[48px] text-[#20172A] m-0">
              {item.value}
            </h2>
            <p className="text-[#5E6875] font-medium text-[14px] min-[769px]:text-[16px] leading-[20px] min-[769px]:leading-[24px] w-[75%] m-auto min-[993px]:m-0">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
