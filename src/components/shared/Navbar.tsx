"use client";

import { useEffect, useState } from "react";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full h-[80px] top-0 left-0 flex items-center justify-center fixed z-50 transition-colors duration-300 ${
        isScrolled ? "bg-[#161C2D]" : "bg-transparent"
      }`}
    >
      <div className="w-[1200px] h-full flex items-center justify-between px-4">
        <h1 className="text-[#F4F7FA] text-2xl font-bold">The Nebulas</h1>
        <nav className="flex items-center text-[#F4F7FA] gap-10">
          <a href="#">Home</a>
          <a href="#solution">Our Solution</a>
          <a href="#team">Our Team</a>
          <a href="#journey">E-Lab Journey</a>
          <button className="bg-[#68D585] py-3 px-6 rounded-lg">
            <a className="text-[#161C2D] text-sm">Understand Our Solution</a>
          </button>
        </nav>
      </div>
    </div>
  );
}
