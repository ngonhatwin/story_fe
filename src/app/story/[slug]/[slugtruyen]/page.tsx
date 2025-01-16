"use client";
//Page đọc truyện
//lib
import React, { useState, useEffect } from "react";
import AWS from "aws-sdk";

const PageChapter = ({
  params,
}: {
  params: { slug: string; slugtruyen: string };
}) => {
  const [content, setContent] = useState<string>(""); // State để lưu nội dung file
  const [error] = useState<string | null>(null); // State để lưu lỗi nếu có

  const s3 = new AWS.S3({
    endpoint:
      "https://820f1083605b6e348f8c656a30f650eb.r2.cloudflarestorage.com",
    accessKeyId: process.env.NEXT_PUBLIC_R2_ACCESS_KEY, // Thay bằng Access Key ID của bạn
    secretAccessKey: process.env.NEXT_PUBLIC_R2_SECRET_KEY, // Thay bằng Secret Key của bạn
    region: "auto", // Cloudflare R2 không yêu cầu vùng cụ thể
    signatureVersion: "v4", // Sử dụng phiên bản chữ ký V4 của AWS
  });

  useEffect(() => {
    const fetchFile = async () => {
      try {
        const params = {
          Bucket: "storgetruyen", // Tên bucket của bạn
          Key: "noi_dung.txt", // Tên file trong bucket
        };
        const data = await s3.getObject(params).promise();
        if (data.Body) {
          const text = new TextDecoder("utf-8").decode(data.Body as Buffer);
          setContent(text);
        } else {
          throw new Error("Data body is undefined or null");
        }
      } catch (error) {
        console.error("Error fetching file:", error);
      }
    };

    fetchFile(); // Gọi hàm fetch khi component mount
  }, []);
  return (
    <div>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div>
          <div className="flex justify-center gap-4 mt-6">
            <button className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300">
              Chương Trước
            </button>
            <button className="px-4 py-2 bg-green-500 text-white rounded">
              Danh Sách Chương
            </button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300">
              Chương Tiếp Theo
            </button>
          </div>
          <div className="mb-4">
            <p>{content}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PageChapter;
