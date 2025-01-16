"use client";
import React, { useState, useEffect } from "react";
//component
import { LoadingSpinner } from "@/components/LoadingSpinner/LoadingSpinner";
import { useStoryContext } from "@/app/storycontext";
import { LastedComponent } from "@/components/topic/lasted";
//api
import { getAllStories } from "@/api/story/GetAllStory";
//types
import { Story } from "@/types/story";
const LastedPage = () => {
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
  return <LastedComponent stories={stories} onSelectStory={handleSelectStory} />;
};

export default LastedPage;
