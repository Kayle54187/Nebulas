"use client";

import Image from "next/image";

export default function InstagramBanner() {
  return (
    <div className="w-full bg-[#ECF2F7] text-center flex items-center justify-center py-8 space-x-4">
      <div className="relative">
        <Image width={25} height={30} alt="play icon" src={"/play.svg"} />
      </div>
      <div>
        <p>
          Interested how our work?{" "}
          <a
            href="https://instagram.com/___nebulas__"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Checkout our Instagram Page
          </a>
        </p>
      </div>
    </div>
  );
}
