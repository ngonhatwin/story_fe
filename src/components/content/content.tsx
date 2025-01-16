"use client";
import React from "react";
import { cn } from "@/lib/utils";
//component
import Backgr from "../backgr/backgr";
import Card from "../card/card";

export default function Content() {
  const images = ["../../background-kiem-hiep.jpg"]; // Tên hình ảnh trong thư mục public

  return (
    <div className={cn(
      "flex",
      "justify-center"
    )}>
      <div
      className={cn(
        "bg-gray-100",
        "w-full",
        "justify-between",
        "min-h-screen",
        `bg-cover bg-center`,
        "opacity-100",
        "md:max-w-[1140px]",
      )}
      // style={{ backgroundImage: `url(${images[0]})` }} // Sử dụng hình ảnh từ biến images
    >
      <Backgr  />
      <Card />
    </div>
    </div>
  );
}
