"use client";
//Page thông tin từng truyện
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { use } from "react";
//component
import { useStoryContext } from "../../storycontext";
import ChapterComponent from "@/components/chapter/chapter";
import StoryDetailComponent from "@/components/story/storydetail";
//api
import { GetGenreAStory } from "@/api/story/GetGenreAStory";
import { GetAllChapter } from "@/api/story/GetAllChapter";
import { GetStoryBySlug } from "@/api/story/GetStoryBySlug";
//types
import { StoryAndGenre } from "@/types/storyandgenre";
import { chapter } from "@/types/chapter";
import { Genre } from "@/types/genre";

const StoryPage = ({ params }: { params: Promise<{ slug: string }> }) => {
  const { selectedStory, setSelectedStory } = useStoryContext();
  const [genreList, setGenreList] = useState<Genre[]>([]); // State để lưu genre
  const [chapterList, setChapterList] = useState<chapter[]>([]);
  const { slug } = use(params);
  //get Genre
  useEffect(() => {
    const fetchGenre = async () => {
      if (!selectedStory?.id) {
        return;
      }
      try {
        const response = await GetGenreAStory(selectedStory?.id);
        const data: Genre[] = Array.from(
          new Set(
            response.map((item: Genre) => ({ name: item.name, id: item.id }))
          )
        );
        setGenreList(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchGenre();
  }, [selectedStory?.id]);

  //Get Chapter
  useEffect(() => {
    const fetchChapter = async () => {
      try {
        if (selectedStory?.id) {
          const response = await GetAllChapter(selectedStory.id);
          setChapterList(response);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchChapter();
  }, [selectedStory?.id]);

  //Get Story By Slug
  useEffect(() => {
    const fetchStoryBySlug = async () => {
      try {
        if (slug) {
          const response = await GetStoryBySlug(slug);
          setSelectedStory(response);
        }
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : "Something went wrong";
        console.error("Failed to fetch chapters:", errorMessage);
      }
    };
    fetchStoryBySlug();
  }, [slug]);

  if (!selectedStory) {
    return <div>No story selected</div>; // Hiển thị thông báo nếu chưa có câu chuyện được chọn
  }

  const storyWithGenre: StoryAndGenre = {
    id: selectedStory.id,
    name: selectedStory.name,
    urlImage: selectedStory.urlImage,
    authorName: selectedStory.authorName,
    description: selectedStory.description,
    genres: genreList,
  };

  return (
    <div className={cn("flex", "justify-self-center", "flex-col")}>
      <div className={cn("container")}>
        <StoryDetailComponent story={storyWithGenre} />
      </div>
      <div>
        <ChapterComponent chap={chapterList} story={selectedStory} />
      </div>
    </div>
  );
};

export default StoryPage;
