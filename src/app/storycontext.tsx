"use client"; // Bắt buộc với React hooks trong Next.js

import React, { createContext, useContext, useState } from "react";
type Story = {
    id: any;
    name: any;
    urlimage: any;
    author: any;
  };
  
// Định nghĩa kiểu dữ liệu cho Context
interface StoryContextType {
  selectedStory: Story | null;
  setSelectedStory: (story: Story | null) => void;
}

// Tạo Context
const StoryContext = createContext<StoryContextType | undefined>(undefined);

// Hook để sử dụng Context
export const useStoryContext = () => {
  const context = useContext(StoryContext);
  if (!context) {
    throw new Error("useStoryContext must be used within a StoryProvider");
  }
  return context;
};

// Provider bọc toàn bộ ứng dụng
export const StoryProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);

  return (
    <StoryContext.Provider value={{ selectedStory, setSelectedStory }}>
      {children}
    </StoryContext.Provider>
  );
};
