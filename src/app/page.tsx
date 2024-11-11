"use client";

import React from "react";

// Components
import HeroSection from "@/components/HeroSection";
import TeamSection from "@/components/TeamSection";
import ValuesSection from "@/components/ValuesSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import InstagramBanner from "@/components/InstagramBanner";
import ChallengesSection from "@/components/ChallengesSection";

export default function Home() {
  return (
    <div className="w-[100vw] h-auto flex flex-col items-center">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ValuesSection />
      <TeamSection />
      <ChallengesSection />
      <InstagramBanner />
    </div>
  );
}
