"use client";
import React, { useState, useEffect } from "react";
import { useStoryContext } from "../../storycontext";
import StoryDetail from "@/components/story/storydetail";
import { GetGenreAStory } from "@/api/story/GetGenreAStory";
import { GetAllChapter } from "@/api/story/GetAllChapter";
import { StoryAndGenre } from "@/types/storyandgenre";
import {GetStoryBySlug} from "@/api/story/GetStoryBySlug"
import { useRouter } from "next/navigation";
import Chapter from "@/components/chapter/chapter";
import { cn } from "@/lib/utils";

const StoryPage = ({ params }: { params: { slug: string } }) => {
  const { selectedStory, setSelectedStory } = useStoryContext();
  const [genreList, setGenreList] = useState<string[]>([]); // State để lưu genre
  const [chapterList, setChapterList] = useState<{ title: string; name: string }[]>([]);
  const pathname = window.location.pathname; // "/story/kiem-lai
  const parts = pathname.split("/");
  const slug = parts[2]; // "kiem-lai"
  //get Genre
  useEffect(() => {
    const fetchGenre = async () => {
      try {
        const response = await GetGenreAStory(selectedStory?.id);
        const data: string[] = Array.from(
          new Set(response.map((item: any) => item.genre))
        );
        setGenreList(data);
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : "Something went wrong";
        console.error("Failed to fetch stories:", errorMessage);
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
          console.log(response);
        }
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : "Something went wrong";
        console.error("Failed to fetch chapters:", errorMessage);
      }
    };
    fetchChapter();
  }, [selectedStory?.id]);

  //Get By Slug
  useEffect(() => {
    const fetchStoryBySlug = async () => {
      try {
        if ( slug) {
          const response = await GetStoryBySlug(slug);
          console.log(response);
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
    genres: genreList, // Thêm danh sách thể loại
  };



  return (
    <div className={cn("flex", "justify-self-center", "flex-col")}>
      <div className={cn("container")}>
        <StoryDetail story={storyWithGenre} />
      </div>
      <div>
        <Chapter chap={chapterList} story={selectedStory} />
      </div>
    </div>
  );
};

export default StoryPage;
