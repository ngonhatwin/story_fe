"use client";
//page danh sách truyện theo genreId
import React, { useState, useEffect } from "react";
import { use } from "react";
//component
import { useStoryContext } from "@/app/storycontext";
import { useGenreContext } from "@/app/genrecontext";
import { FindByGenreComponent } from "@/components/topic/findbygenre";
import { LoadingSpinner } from "@/components/LoadingSpinner/LoadingSpinner";
//api
import { GetStoryByGenre } from "@/api/story/GetStoryByGenre";
//types
import { Story } from "@/types/story";

const GenrePage = ({ params }: { params: Promise<{ id: string }> }) => {
  const [loading, setLoading] = useState(true);
  const [stories, setStories] = useState<Story[]>([]); 
  const { setSelectedStory } = useStoryContext();
  const {genreList} = useGenreContext();
  const { id } = use(params);
  const genre = genreList.find((item) => item.id === id);

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
      }finally{
        setLoading(false);
      }
    };
    fetchStoryByGenre();
  }, [id]);

  if (loading) {
      return <LoadingSpinner />;
    }
  return (
    <div>
      <FindByGenreComponent
        genreName={genre?.name}
        stories={stories}
        onSelectStory={handleSelectStory}
      ></FindByGenreComponent>
    </div>
  );
};

export default GenrePage;
