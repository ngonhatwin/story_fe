"use client";
import React, { useState, useEffect } from "react";
import { getAllStories } from "@/api/GetAllStory";
import { Story } from "@/types/story";
import { LoadingSpinner } from "@/components/LoadingSpinner/LoadingSpinner";
import { Nomination } from "@/components/topic/nomination";
import { Container } from "@/components/ui/container";
const Nomi = () => {
  const [loading, setLoading] = useState(true);
  const [stories, setStories] = useState<Story[]>([]); // Sử dụng kiểu Story[]
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
      <Nomination stories={stories} />
  );
};

export default Nomi;
