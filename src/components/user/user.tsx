"use client";
import React from "react";
//lib
import { cn } from "@/lib/utils";
import { User } from "@/types/user";
import Image from "next/image";

const UserComponent: React.FC<{ infoUser: User | undefined }> = ({
  infoUser,
}) => {
  const images = ["../../backgroundprofile2.jpg"]; // Tên hình ảnh trong thư mục public
  return (
    <div>
      <div className="relative h-[400px] w-full ">
        <div
          className={cn(
            "flex",
            "justify-center",
            "flex-col",
            "items-center",
            "relative"
          )}
        >
          {/* Div 1: Giới hạn chiều cao */}
          <div
            className={cn(
              "w-full",
              "h-[300px]", // Chiều cao cố định là 300px
              "max-h-[400px]", // Giới hạn chiều cao tối đa là 400px
              "justify-between",
              "overflow-hidden", // Ẩn nội dung vượt quá
              "bg-cover bg-center",
              "opacity-100",
              "md:max-w-[1140px]"
            )}
            style={{
              backgroundImage: `url(${images[0]})`,
              backgroundPosition: "50%",
            }} // Sử dụng hình ảnh từ biến images
          ></div>

          <div className="absolute md:max-w-[1140px] bottom-0 flex w-full translate-y-[46%] justify-center px-5 md:justify-start  ">
            <div className="relative top-6 flex flex-col items-center md:top-0 md:flex-row md:items-start md:gap-5">
              <div className="relative h-[150px] w-[150px] rounded-full border-[4px] border-white shadow-lg md:h-[200px] md:w-[200px]">
                <Image
                  src="../../img-user.png"
                  alt="avatar"
                  sizes="200px"
                  className="rounded-full object-cover"
                ></Image>
              </div>
              <div className="flex flex-col text-center md:pt-28 md:text-left">
                <h2 className="text-2xl">{infoUser?.name}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full mt-5">
        {/* Div thứ hai */}
        <div className="w-full md:max-w-[1140px]">
          {/* Nội dung */}
          <div className="flex flex-row gap-8">
            <div
              className={cn(
                "basis-70",
                "rounded-[8px]",
                "border-[1px]",
                "border-[#ddd]",
                "bg-transparent",
                "p-[10px]",
                "md:flex-nowrap",
                "lg:flex-row"
              )}
            >
              <div className="space-y-2 text-sm text-gray-700">
                <p className="font-medium">
                  Email: <span className="font-normal">{infoUser?.email}</span>
                </p>
                <p className="font-medium">
                  Ngày sinh:{" "}
                  <span className="font-normal">{infoUser?.dateofBirth}</span>
                </p>
                <p className="font-medium">
                  Giới tính:{" "}
                  <span className="font-normal">{infoUser?.gender}</span>
                </p>
                <p className="font-medium">
                  Số điện thoại:{" "}
                  <span className="font-normal">{infoUser?.phone}</span>
                </p>
                <p className="font-medium">
                  Tiên thạch:{" "}
                  <span className="font-normal">{infoUser?.tienThach}</span>
                </p>
                <p className="font-medium">
                  Số dư tiên thạch:{" "}
                  <span className="font-normal">{infoUser?.sodutienthach}</span>
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl text-center md:text-left">
                Truyện sáng tác
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserComponent;
