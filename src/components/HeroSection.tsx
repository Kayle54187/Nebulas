"use client";

import React from "react";
import Image from "next/image";

// Icons
import { FaArrowRight } from "react-icons/fa6";
import WaveComponent from "./Wave";

export default function HeroSection() {
  return (
    <WaveComponent>
      <div className="w-full h-[800px] relative text-white">
        <div className="w-[1150px] h-full mx-auto space-y-8 flex flex-col items-start justify-center gap-20">
          <div className="flex items-center justify-between">
            <div className="w-1/2 flex flex-col gap-6">
              <h1 className="text-6xl font-bold leading-tight">
                Build Skills. <br /> Transform Lives.
              </h1>
              <p className="pr-28 leading-7">
                Empowering Rwanda’s urban migrants with access to skills and
                opportunities for a brighter, more sustainable future.
              </p>
              <div className="flex items-center gap-4 text-[#68D585] py-4 cursor-pointer">
                <p className="">Understand Our Solution</p>
                <FaArrowRight />
              </div>
            </div>
            <div className="w-1/2 relative">
              <Image
                width={500}
                height={500}
                src={"/team.JPG"}
                alt="Team picture"
                className="w-[85%] rounded-xl z-10 relative"
              />
              <Image
                alt="Dots"
                width={200}
                height={200}
                src={"/Dots.svg"}
                className="absolute -top-14 right-10"
              />
            </div>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <h1 className="text-2xl font-bold">Our Mission Statement</h1>
            <p className="leading-7 pr-4">
              Our mission is to empower rural-urban migrants by raising
              awareness of accessible learning hubs and skills-building
              opportunities in Rwanda. We also aim to raise funds to support
              those who need help paying for these courses, so they can earn
              money and support their lives in urban areas.
            </p>
          </div>
        </div>
      </div>
    </WaveComponent>
  );
}
