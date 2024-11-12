"use client";

import { FaArrowRight } from "react-icons/fa6";

export default function SolutionSection() {
  return (
    <div
      className="w-full h-auto flex flex-col items-center bg-[#ECF2F7]"
      id="solution"
    >
      <div className="w-[1200px] flex gap-4 items-start py-20">
        <div className="w-1/3">
          <h1 className="text-[#130D3A] text-4xl font-bold">Our Solution</h1>
          <div className="flex items-center gap-4 text-[#68D585] py-4 cursor-pointer">
            <p className="">Understand Our Solution</p>
            <FaArrowRight />
          </div>
        </div>
        <div className="w-2/3">
          <p className="text-[#161C2D] text-justify leading-7">
            We are committed to empowering rural-urban migrants in Rwanda by
            creating accessible learning hubs and skill-building opportunities
            that enable them to secure stable livelihoods in urban areas. Our
            mission is to bridge the gap between migration and employment by
            providing targeted training programs that equip migrants with the
            practical skills needed in the job market. We also aim to raise
            funds to offer financial support to those who cannot afford the cost
            of these courses, ensuring that everyone, regardless of their
            financial situation, has the opportunity to thrive in urban
            environments. By connecting migrants with the resources they need to
            build their skills and confidence, we are helping them break the
            cycle of poverty and create better futures for themselves and their
            families
          </p>
        </div>
      </div>
    </div>
  );
}
