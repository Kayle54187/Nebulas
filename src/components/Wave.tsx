"use client";

import React from "react";

interface WaveComponentProps {
  children?: React.ReactNode;
}

export default function WaveComponent({ children }: WaveComponentProps) {
  return (
    <div className="w-full relative bg-gradient-to-bl from-[#303c58] to-[#161c2d] overflow-hidden">
      <div className="absolute inset-x-0 bottom-0 h-16">
        <svg
          className="absolute w-[200%] h-full transform rotate-180 animate-wave"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#F4F7FA"
            fillOpacity="1"
            d="M0,160L48,138.7C96,117,192,75,288,64C384,53,480,75,576,85.3C672,96,768,96,864,80C960,64,1056,32,1152,32C1248,32,1344,64,1392,80L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* Main content */}
      <div className="w-full flex flex-col items-center relative z-10 pt-16">
        {children}
      </div>
    </div>
  );
}
