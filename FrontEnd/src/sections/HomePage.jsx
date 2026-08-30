import React from "react";
import HeroSection from "./HeroSection";
import HeroMobile from "./HeroMobile";
import Services from "./Services";
import Statistics from "./Statistics";
import Advantages from "./Advantages";
import SelectedWorks from "./SelectedWorks";
import FindSolution from "./FindSolution";
import ApplyForm from "./ApplyForm";
import CtaBanner from "./CtaBanner";
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
        <Statistics />
        <Advantages />
        <SelectedWorks />
        <FindSolution />
        <ApplyForm />
        <CtaBanner />
        <BlogMedia />
      </main>
    </>
  );
}

export default HomePage;
