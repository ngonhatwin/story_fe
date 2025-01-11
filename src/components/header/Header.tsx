"use client";
import HeaderNav from "./navigation";
import Searching from "./search";
import NavigationUser from "./navigation-user";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`sticky top-0 z-50 bg-gray-100 w-full flex justify-between px-20 ${
        isScrolled ? "shadow-md" : "shadow-none"
      }`}
    >
      <HeaderNav />
      <Searching />
      <div className={cn("flex", "basis-1/6", "gap-5", "justify-start")}>
        <div className="content-center"></div>
        <div className="flex justify-center">
          <NavigationUser />
        </div>
      </div>
    </div>
  );
}
