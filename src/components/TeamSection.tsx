"use client";

import Image from "next/image";

// Imports
import { teamMembers } from "@/constants";

export default function TeamSection() {
  return (
    <div className="w-[1000px] px-4 py-10" id="team">
      <h1 className="text-[#130D3A] text-center text-4xl font-bold mb-16">
        Our Team
      </h1>
      <div className="grid grid-cols-2 justify-around gap-10">
        <div className="flex flex-col gap-10">
          <div className="">
            <Image
              width={500}
              height={500}
              objectFit="cover"
              objectPosition="center"
              alt={teamMembers[0].name}
              src={teamMembers[0].image}
              className="w-full h-[640px] rounded-xl object-cover"
            />
            <div className="flex flex-col mt-4 gap-2 ml-4">
              <p className="text-[#161C2D]">{teamMembers[0].role}</p>
              <h1 className="text-[#161C2D] text-xl font-bold">
                {teamMembers[0].name}
              </h1>
            </div>
          </div>
          <div className="">
            <Image
              width={500}
              height={500}
              alt={teamMembers[1].name}
              src={teamMembers[1].image}
              className="w-full h-[440px] rounded-xl object-cover object-bottom"
            />
            <div className="flex flex-col mt-4 gap-2 ml-4">
              <p className="text-[#161C2D]">{teamMembers[1].role}</p>
              <h1 className="text-[#161C2D] text-xl font-bold">
                {teamMembers[1].name}
              </h1>
            </div>
          </div>
          <div className="">
            <Image
              width={500}
              height={500}
              objectFit="cover"
              objectPosition="center"
              alt={teamMembers[2].name}
              src={teamMembers[2].image}
              className="w-full h-[640px] rounded-xl object-cover"
            />
            <div className="flex flex-col mt-4 gap-2 ml-4">
              <p className="text-[#161C2D]">{teamMembers[2].role}</p>
              <h1 className="text-[#161C2D] text-xl font-bold">
                {teamMembers[2].name}
              </h1>
            </div>
          </div>
          <div className="w-full h-[510px] rounded-xl bg-[#473BF0] flex items-center justify-center p-20">
            <p className="text-center text-xl font-bold text-white">
              Behind evey great team, are individuals who make it happend
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="">
            <Image
              width={500}
              height={500}
              objectFit="cover"
              alt={teamMembers[4].name}
              src={teamMembers[4].image}
              className="w-full h-[440px] rounded-xl object-cover object-top"
            />
            <div className="flex flex-col mt-4 gap-2 ml-4">
              <p className="text-[#161C2D]">{teamMembers[4].role}</p>
              <h1 className="text-[#161C2D] text-xl font-bold">
                {teamMembers[4].name}
              </h1>
            </div>
          </div>
          <div className="">
            <Image
              width={500}
              height={500}
              objectFit="cover"
              objectPosition="center"
              alt={teamMembers[5].name}
              src={teamMembers[5].image}
              className="w-full h-[640px] rounded-xl object-cover"
            />
            <div className="flex flex-col mt-4 gap-2 ml-4">
              <p className="text-[#161C2D]">{teamMembers[5].role}</p>
              <h1 className="text-[#161C2D] text-xl font-bold">
                {teamMembers[5].name}
              </h1>
            </div>
          </div>
          <div className="">
            <Image
              width={500}
              height={500}
              objectFit="cover"
              alt={teamMembers[6].name}
              src={teamMembers[6].image}
              className="w-full h-[440px] rounded-xl object-cover object-bottom"
            />
            <div className="flex flex-col mt-4 gap-2 ml-4">
              <p className="text-[#161C2D]">{teamMembers[6].role}</p>
              <h1 className="text-[#161C2D] text-xl font-bold">
                {teamMembers[6].name}
              </h1>
            </div>
          </div>
          <div className="">
            <Image
              width={500}
              height={500}
              objectFit="cover"
              objectPosition="center"
              alt={teamMembers[3].name}
              src={teamMembers[3].image}
              className="w-full h-[640px] rounded-xl object-cover"
            />
            <div className="flex flex-col mt-4 gap-2 ml-4">
              <p className="text-[#161C2D]">{teamMembers[3].role}</p>
              <h1 className="text-[#161C2D] text-xl font-bold">
                {teamMembers[3].name}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
