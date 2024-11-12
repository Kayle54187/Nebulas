"use client";

import Image from "next/image";

export default function ProblemSection() {
  return (
    <div className="w-full flex flex-col items-center mb-20 mt-28" id="problem">
      <div className="w-[1200px] flex items-center gap-10 px-4">
        <Image
          width={500}
          height={500}
          alt="Problem"
          src={"/problem.jpeg"}
          className="w-1/2 h-[350px] object-cover rounded-xl shadow-xl"
        />
        <div className="w-1/2">
          <h1 className="text-[#130D3A] text-4xl font-bold mb-6">
            The Problem
          </h1>
          <p className="text-[#161C2D] text-justify leading-7">
            According to World Bank data, 38% of Rwanda&apos;s urban population
            lives in slums. A large portion of these residents are rural-urban
            migrants who move to cities seeking better opportunities. However,
            many arrive without the skills or resources needed to secure stable
            incomes, and the high cost of living in urban areas makes it even
            harder for them to survive.
          </p>
        </div>
      </div>
    </div>
  );
}
