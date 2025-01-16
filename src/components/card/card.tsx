"use client";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
//component
import Carddecu from "./carddecu/carddecu";
import Cardtoptuan from "./cardtop/cardtoptuan";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";
import { useStoryContext } from "@/app/storycontext";
//api
import { PagingStory } from "@/api/story/PagingStory";
//types
import { Story } from "@/types/story";

const Card: React.FC = () => {
  const { setSelectedStory } = useStoryContext();
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const handleSelectStory = (story: Story) => {
    setSelectedStory({
      ...story,
      urlImage: story.urlImage || "default_image.jpg",
      authorName: story.authorName || "Unknown",
    });
  };

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const pageNumber = 1;
        const pageSize = 11;
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
        <div className={cn("basis-2/6")}>
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
