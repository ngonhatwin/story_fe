"use client";
import React, { useState, useEffect } from "react";
import Carddecu from "./carddecu/carddecu";
import Cardtoptuan from "./cardtop/cardtoptuan";
import { PagingStory } from "@/api/PagingStory";
import { Story } from "@/types/story";
import { cn } from "@/lib/utils"; // Import hàm cn từ utils
import { useStoryContext } from "@/app/storycontext";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";

const Card: React.FC = () => {
  const { selectedStory, setSelectedStory } = useStoryContext();
  const [stories, setStories] = useState<Story[]>([]); // Sử dụng kiểu Story[]
  const [loading, setLoading] = useState(true);
  const handleSelectStory = (story: Story) => {
    setSelectedStory({
      ...story,
      urlImage: story.urlImage || "default_image.jpg", // Cung cấp giá trị mặc định nếu thiếu
      authorName: story.authorName || "Unknown", // Cung cấp giá trị mặc định nếu thiếu
    });
  };

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const pageNumber = 1;
        const pageSize = 6;
        const response = await PagingStory(pageNumber, pageSize);
        setStories(response.stories);
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : "Something went wrong";
        console.error("Failed to fetch stories:", errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <div>
      <div className={cn("flex")}>
        <div className={cn("basis-1/5")}>
          <Cardtoptuan stories={stories} onSelectStory={handleSelectStory} />
        </div>
        <div className={cn("basis-4/5")}>
          <Carddecu stories={stories} onSelectStory={handleSelectStory} />
        </div>
      </div>
    </div>
  );
};

export default Card;
