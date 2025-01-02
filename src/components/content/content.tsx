"use client";
import React from "react";
import { cn } from "@/lib/utils";
import Backgr from "../backgr/backgr";
import Card from "../card/card";

export default function Content() {
  const images = ["./background.jpg"]; // Tên hình ảnh trong thư mục public

  return (
    <div
      className={cn(
        "bg-gray-100",
        "w-full",
        "justify-between",
        "px-20",
        "py-10",
        "min-h-screen",
        `bg-cover bg-center`
      )}
      style={{ backgroundImage: `url(${images[0]})` }} // Sử dụng hình ảnh từ biến images
    >
      <Backgr />
      <Card />
    </div>
  );
}
