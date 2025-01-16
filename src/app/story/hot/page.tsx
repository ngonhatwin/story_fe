"use client";
import React, { useState, useEffect } from "react";
//Component
import { LoadingSpinner } from "@/components/LoadingSpinner/LoadingSpinner";
import { useStoryContext } from "@/app/storycontext";
import { HotComponent } from "@/components/topic/hot";
//api
import { getAllStories } from "@/api/story/GetAllStory";
//types
import { Story } from "@/types/story";
const HotPage = () => {
  const [loading, setLoading] = useState(true);
  const [stories, setStories] = useState<Story[]>([]); // Sử dụng kiểu Story[]
  const { setSelectedStory } = useStoryContext();

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
        const response = await getAllStories();
        setStories(response);
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
  return <HotComponent stories={stories} onSelectStory={handleSelectStory} />;
};

export default HotPage;
