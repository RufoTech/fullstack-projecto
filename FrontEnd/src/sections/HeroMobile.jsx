import React from "react";
import data from "@/data/data";

const { hero } = data;

function HeroMobile() {
  return (
    <section className="w-full pt-4 pb-10 md:hidden">
      <img
        src={hero.mobileImage}
        alt={hero.mobileAlt}
        className="w-full rounded-[20px] object-cover"
      />
    </section>
  );
}

export default HeroMobile;
