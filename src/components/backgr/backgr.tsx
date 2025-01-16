import Image from "next/image";
import { useState, useEffect } from "react";
const Backgr = () => {
  const images = ["/kiemlai.jpg"];
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        setFade(true);
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="relative flex justify-center h-[330px] m-3 rounded-[8px] border-[1px] border-[#ddd]"
    >
      <Image
        className={`absolute h-full ${
          fade ? "opacity-100" : "opacity-0"
        } transition-opacity duration-1000`}
        src={images[currentImage]}
        alt="Hình ảnh chuyển động"
        objectFit="cover" // Đảm bảo ảnh vừa khung
        width={400}
        height={300}
        priority // Đặt ưu tiên tải cho ảnh đầu tiên
      />
    </div>
  );
};

export default Backgr;
