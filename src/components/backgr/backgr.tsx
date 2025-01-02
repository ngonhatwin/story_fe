"use client";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils"; // Import hàm cn từ utils

const Backgr = () => {
  const images = ["./giathien.jpg", "./thanmo.jpg", "./kiemlai.jpg"];
  const [currentImage, setCurrentImage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Bắt đầu mờ dần
      setTimeout(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        setFade(true); // Hiển thị ảnh mới
      }, 1000); // Thời gian cho hiệu ứng fade
    }, 5000); // Chuyển ảnh sau mỗi 5 giây

    return () => clearInterval(interval); // Xóa interval khi unmount
  }, [images.length]);

  return (
    <div className={cn("relative", "flex", "justify-center", "h-[400px]")}> {/* Sử dụng tailwindcss và cn */}
      {/* Hình ảnh chuyển động */}
      <img
        id="img-change"
        className={cn(
          "absolute", // Đảm bảo ảnh luôn ở vị trí cố định trong container
          "h-full",
          fade ? "opacity-100" : "opacity-0", // Điều chỉnh hiệu ứng fade
          "transition-opacity", 
          "duration-1000"
        )}
        src={images[currentImage]}
        alt="Hình ảnh chuyển động"
      />
    </div>
  );
};

export default Backgr;
