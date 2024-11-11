"use client";

import Image from "next/image";

export default function ValuesSection() {
  return (
    <div className="w-[1200px] py-20 flex items-start justify-between px-4">
      <div className="grid grid-cols-6">
        <div className="relative col-span-1">
          <Image src={"/stack.svg"} width={30} height={40} alt="Stack image" />
        </div>
        <div className="space-y-2 col-span-4">
          <h1 className="text-xl font-bold">Community-Centered Vision</h1>
          <p className="text-[#130D3A] text-justify">
            We are committed to empowering Rwanda’s urban migrants with skills,
            support, and opportunity, working hand-in-hand with communities to
            create lasting impact.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-6">
        <div className="relative col-span-1">
          <Image src={"/stack.svg"} width={30} height={40} alt="Stack image" />
        </div>
        <div className="space-y-2 col-span-4">
          <h1 className="text-xl font-bold">Driven by Compassion</h1>
          <p className="text-[#130D3A] text-justify">
            Our team believes in uplifting lives and understands the unique
            challenges rural-urban migrants face. We bring empathy and
            dedication to every step of our work.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-6">
        <div className="relative col-span-1">
          <Image src={"/stack.svg"} width={30} height={40} alt="Stack image" />
        </div>
        <div className="space-y-2 col-span-4">
          <h1 className="text-xl font-bold">Sustainable Impact</h1>
          <p className="text-[#130D3A] text-justify">
            We focus on long-term solutions that empower individuals to thrive
            independently, creating a sustainable path to income, education, and
            opportunity.
          </p>
        </div>
      </div>
    </div>
  );
}
