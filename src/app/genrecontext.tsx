"use client"; // Bắt buộc với React hooks trong Next.js
import React, { createContext, useContext, useState } from "react";
import { Genre } from "@/types/genre";

// Định nghĩa kiểu dữ liệu cho Context
interface GenreContextType {
  selectedGenre: Genre | null;
  setSelectedGenre: React.Dispatch<React.SetStateAction<Genre | null>>;
  genreList: Genre[]; // Danh sách thể loại
  setGenreList: React.Dispatch<React.SetStateAction<Genre[]>>; // Hàm để cập nhật danh sách thể loại
}

// Tạo Context và cung cấp giá trị mặc định
const GenreContext = createContext<GenreContextType>({
  selectedGenre: null,
  setSelectedGenre: () => {},
  genreList: [], // Giá trị mặc định là mảng rỗng
  setGenreList: () => {},
});

// Hook để sử dụng Context
export const useGenreContext = () => {
  const context = useContext(GenreContext);
  if (!context) {
    throw new Error("useGenreContext must be used within a GenreProvider");
  }
  return context;
};

// Provider bọc toàn bộ ứng dụng
export const GenreProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [genreList, setGenreList] = useState<Genre[]>([]);

  return (
    <GenreContext.Provider value={{ selectedGenre, setSelectedGenre, genreList, setGenreList }}>
      {children}
    </GenreContext.Provider>
  );
};
