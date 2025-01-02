"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils"; // Import hàm cn từ utils
import { useStoryContext } from "@/app/storycontext";
import Carddecu from "./carddecu/carddecu";
import Cardtoptuan from "./cardtop/cardtoptuan";
import { Story } from "@/types/story";

const Card: React.FC = () => {
  const { selectedStory, setSelectedStory } = useStoryContext();
  const [stories, setStories] = useState<Story[]>([]); // Sử dụng kiểu Story[]

  const handleSelectStory = (story: Story) => {
    setSelectedStory({
        ...story,
        urlimage: story.urlImage || "default_image.jpg", // Cung cấp giá trị mặc định nếu thiếu
        author: story.authorName || "Unknown", // Cung cấp giá trị mặc định nếu thiếu
      });
  };

  return (
    <div>
      <div className={cn("flex")}>
        <Cardtoptuan stories={stories} onSelectStory={handleSelectStory} />
        <Carddecu stories={stories} onSelectStory={handleSelectStory} />
      </div>
    </div>
  );
};

export default Card;
