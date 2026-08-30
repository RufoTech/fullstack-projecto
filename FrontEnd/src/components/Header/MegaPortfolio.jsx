import React from "react";
import { ArrowRight } from "lucide-react";
import data from "@/data/data";

function MegaPortfolio({ active }) {
  const portfolioItems = data.header.megaPortfolioItems;

  return (
    <div className="relative overflow-hidden w-full">
      <div
        className={`mt-4 w-full bg-[#F1F6F9] p-2 rounded-3xl transition-all duration-500 ease-out ${
          active === "portfolio"
            ? "translate-x-0 pointer-events-auto"
            : "-translate-x-full pointer-events-none absolute"
        }`}
      >
        <div className="grid grid-cols-5 gap-4">
          {portfolioItems.map(({ title, icon: Icon }) => (
            <div
              key={title}
              className="bg-white p-5 rounded-xl group shadow-[0_10px_30px_rgba(15,23,42,0.03)] transition-all duration-300 hover:shadow-[0_16px_32px_rgba(101,55,166,0.08)]"
            >
              <div className="flex flex-col justify-between h-full">
                <div className="flex items-center justify-between w-full cursor-pointer">
                  <span className="text-lg font-medium text-[#20172A] transition-colors duration-300 group-hover:text-[#6537A6]">
                    {title}
                  </span>

                  <div className="w-11 h-11 rounded-3xl bg-[#F1F6F9] flex items-center justify-center transition-all duration-300 group-hover:bg-[#6537A6]">
                    <ArrowRight
                      size={16}
                      className="text-[#20172A] transition-colors duration-300 group-hover:text-white"
                    />
                  </div>
                </div>

                <div className="flex justify-center mt-6">
                  <Icon size={200} className="text-[#20172A]/90" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MegaPortfolio;
