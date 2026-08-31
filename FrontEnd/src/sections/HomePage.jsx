import React from "react";
import HeroSection from "./HeroSection";
import HeroMobile from "./HeroMobile";
import Services from "./Services";
import MaestroAdvantages from "./MaestroAdvantages";
import MaestroResults from "./MaestroResults";
import ApplyForm from "./ApplyForm";
import Faq from "./Faq";
import BlogMedia from "./BlogMedia";

function HomePage() {
  return (
    <>
      <div className="md:hidden">
        <HeroMobile />
      </div>
      <div className="hidden md:block">
        <HeroSection />
      </div>

      <main className="flex flex-col gap-[88px]">
        <Services />
        <MaestroAdvantages />
        <MaestroResults />
        <ApplyForm />
        <Faq />
        <BlogMedia />
      </main>
    </>
  );
}

export default HomePage;
