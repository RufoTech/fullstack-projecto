import React from "react";
import data from "@/data/data";

const { hero } = data;

function HeroSection() {
  return (
    <section className="w-full pt-4 pb-10">
      <div className="relative overflow-hidden rounded-[24px]">
        <img
          src={hero.image}
          alt={hero.imageAlt}
          className="w-full h-[220px] sm:h-[280px] md:h-[330px] lg:h-[400px] object-cover transition-transform duration-500"
        />
      </div>
    </section>
  );
}

export default HeroSection;
