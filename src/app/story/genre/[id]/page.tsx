"use client";
import React, { useState, useEffect } from "react";
import { GetStoryByGenre } from "@/api/story/GetStoryByGenre";
import { useStoryContext } from "@/app/storycontext";
import { Story } from "@/types/story";
import { FindByGenre } from "@/components/topic/findbygenre";
const GenrePage = ({ params }: { params: { id: string } }) => {
  const [loading, setLoading] = useState(true);
  const [stories, setStories] = useState<Story[]>([]); // Sử dụng kiểu Story[]
  const { selectedStory, setSelectedStory } = useStoryContext();
  const { id } = params;
  const handleSelectStory = (story: Story) => {
    setSelectedStory({
      ...story,
      urlImage: story.urlImage || "default_image.jpg", // Cung cấp giá trị mặc định nếu thiếu
      authorName: story.authorName || "Unknown", // Cung cấp giá trị mặc định nếu thiếu
    });
  };
  useEffect(() => {
    const fetchStoryByGenre = async () => {
      try {
        const pageNumber = 1;
        const pageSize = 11;
        const response = await GetStoryByGenre(
          pageNumber,
          pageSize,
          id
        );
        setStories(response.stories);
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : "Something went wrong";
        console.error("Failed to fetch storys:", errorMessage);
      }
    };
    fetchStoryByGenre();
  }, [id]);
  return (
    <div>
      <FindByGenre
        stories={stories}
        onSelectStory={handleSelectStory}
      ></FindByGenre>
    </div>
  );
};

export default GenrePage;
