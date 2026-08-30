"use client";
import React from "react";
import data from "@/data/data";

const { blog } = data;
const posts = blog.posts;

export default function Blog() {
  return (
    <section className="p-0">
      <h1 className="p-0 m-0 text-[#20172A] font-bold text-[20px] leading-[28px] lg:text-[36px] lg:leading-[48px]">
        <a href="#" className="text-[#20172A] no-underline">
          {blog.titleLead}
        </a>{" "}
        {blog.titleRest}
      </h1>

      <div className="max-w-full overflow-x-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-[14px] mt-5 mb-7" id="all">
          {posts.map((p, i) => (
            <div
              key={i}
              className="p-[18px] bg-white rounded-[20px] transition-all duration-300 cursor-pointer hover:bg-[#E3E9EF] group"
            >
              <a href={p.href} target="_blank" rel="noopener noreferrer" className="no-underline text-inherit block">
                <div className="h-[230px] overflow-hidden rounded-[16px]">
                  <img
                    src={p.img}
                    alt="blogimg"
                    loading="lazy"
                    className="w-full h-full object-cover rounded-[16px] border border-[#E3E9EF] transition-all duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="mt-4 flex flex-col gap-2">
                  <p className="flex items-center justify-between m-0 text-[#5E6875] text-[14px] font-medium leading-[20px]">
                    <span className="flex items-center gap-2">
                      <img
                        src="https://code.edu.az/wp-content/themes/codev2024/assets/icons/event/clock.svg"
                        alt="clock"
                        width={16}
                        height={16}
                      />
                      {p.time}
                    </span>
                    <small className="text-[13px] text-[#5E6875]">{p.date}</small>
                  </p>
                  <h4 className="m-0 font-semibold text-[16px] leading-[24px] text-[#20172A] line-clamp-1">
                    {p.title}
                  </h4>
                  <p className="m-0 text-[#5E6875] font-semibold text-[12px] leading-[16px] lg:text-[14px] lg:leading-[20px] line-clamp-2">
                    {p.desc}
                  </p>
                </div>
              </a>
            </div>
          ))}

          <div className="mt-8 col-span-full flex items-center justify-center">
            <a
              href={blog.moreHref}
              className="inline-flex items-center justify-center gap-2 px-4 py-[10px] h-10 rounded-full bg-[#20172A] text-white hover:bg-[#3A294F] hover:shadow-[0_8px_18px_rgba(101,55,166,0.22)] hover:-translate-y-px text-sm font-semibold transition-all duration-250 no-underline shadow-[0_1px_1px_rgba(32,23,42,0.08)] cursor-pointer"
            >
              <img
                src="https://code.edu.az/wp-content/themes/codev2024/assets/icons/plus-circle.svg"
                alt=""
                width={20}
                height={20}
              />
              {blog.moreLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
