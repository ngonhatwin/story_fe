"use client";
import React, { useState, useEffect } from "react";
import { getAllStories } from "@/api/GetAllStory";
import { Story } from "@/types/story";
import { LoadingSpinner } from "@/components/LoadingSpinner/LoadingSpinner";
import { Nomination } from "@/components/topic/nomination";
import { useStoryContext } from "@/app/storycontext";
const Nomi = () => {
  const [loading, setLoading] = useState(true);
  const [stories, setStories] = useState<Story[]>([]); // Sử dụng kiểu Story[]
    const { selectedStory, setSelectedStory } = useStoryContext();
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
  return (
      <Nomination stories={stories} onSelectStory={handleSelectStory} />
  );
};

export default Nomi;
