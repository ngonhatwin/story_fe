"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
//types
import { CreateSlug } from "@/types/slug";
import { Story } from "@/types/story";

interface ChapterProps {
  chap: { title: string; name: string }[];
  story: Story;
}

const ChapterComponent: React.FC<ChapterProps> = ({ chap, story }) => {
  const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
  const chaptersPerPage = 10; // Số chương mỗi trang

  // Tính toán các chỉ số cần thiết
  const totalChapters = chap.length;
  const totalPages = Math.ceil(totalChapters / chaptersPerPage);

  const indexOfLastChapter = currentPage * chaptersPerPage;
  const indexOfFirstChapter = indexOfLastChapter - chaptersPerPage;
  const currentChapters = chap.slice(indexOfFirstChapter, indexOfLastChapter);

  // Xử lý chuyển trang
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className={cn("w-full", "mt-4")}>
      <div>
        <h2 className={cn("text-lg", "font-semibold", "mb-4")}>
          Danh sách chương
        </h2>
        <ul className={cn("list-none", "mb-4")}>
          {currentChapters.map((chapter, index) => (
            <li key={index} className={cn("mb-2")}>
              <Link
                href={`/story/${CreateSlug(story.name)}/${CreateSlug(
                  chapter.title
                )}`}
              >
                <strong>{chapter.title}</strong>: {chapter.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* Phân trang */}
        <div className={cn("flex", "justify-between", "items-center", "mt-4")}>
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={cn(
              "px-4 py-2 rounded",
              currentPage === 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-500 text-white"
            )}
          >
            Previous
          </button>
          <span className={cn("text-sm", "font-medium")}>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={cn(
              "px-4 py-2 rounded",
              currentPage === totalPages
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-500 text-white"
            )}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChapterComponent;
