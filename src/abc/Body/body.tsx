"use client";
import React, { useState, useEffect } from "react";
import { LoadingSpinner } from "../../components/LoadingSpinner/LoadingSpinner";
import { getAllStories } from "@/api/GetAllStory.js";
import { PagingStory } from "@/api/PagingStory.js";
import { useStoryContext } from "@/app/storycontext";
import "../Body/body.css";
import Link from "next/link";
const Body = () => {
  const { selectedStory, setSelectedStory } = useStoryContext();

  const handleSelectStory = (story: { id: any; name: any; urlimage: any; author: any }) => {
    setSelectedStory(story);
  };
  const images = ["./giathien.jpg", "./thanmo.jpg", "./kiemlai.jpg"];
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(true);
  const [loading, setLoading] = useState(true);
  const [stories, setStories] = useState([]);

  // Auto đổi hình ảnh
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Bắt đầu mờ dần
      setTimeout(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        setFade(true); // Hiển thị ảnh mới
      }, 1000); // Thời gian cho hiệu ứng fade
    }, 5000); // Chuyển ảnh sau mỗi 5 giây

    return () => clearInterval(interval); // Xóa interval khi unmount
  }, [images.length]);

  // Fetch stories từ API
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
    <div className="container mx-auto mt-3">
      {/* Hình ảnh chuyển động */}
      <div className="flex justify-center h-30 relative">
        <img
          id="img-change"
          className={`h-30 ${
            fade ? "opacity-100" : "opacity-0"
          } transition-opacity duration-1000`}
          src={images[currentImage]}
          style={{ maxHeight: "400px", minHeight: "400px" }}
          alt="Hình ảnh chuyển động"
        />
      </div>

      <div className="flex ">
        <div className="mt-5 basis-2/6">
          <div className="mb-4 flex justify-between">
            <div>
              <h3 className="ml-2 text-lg font-semibold">Top trong tuần</h3>
            </div>
          </div>
          <div className="p-0 border rounded shadow-sm ml-3 mr-4">
            <ul className="list-none">
              {stories.map((story) => (
                <li key={story.id} className="flex items-center space-x-4 mb-4">
                  <div className="mr-2 basis-1/5">
                    {story.urlImage && (
                      <img
                        src={story.urlImage}
                        alt={story.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                    )}
                  </div>
                  <div id="content-toptuan" className="basis-4/5">
                    <div className="line-clamp-1">
                      <Link
                        href="/story"
                        className="text-base font-semibold hover:text-green-700"
                        onClick={() =>
                          handleSelectStory({
                            id: story.id,
                            name: story.name,
                            urlimage: story.urlImage,
                            author: story.authorName
                          })
                        }
                      >
                        {story.name}
                      </Link>
                    </div>
                    <div>
                      {story.authorName && (
                        <p className="text-sm text-gray-600">
                          {story.authorName}
                        </p>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Đề cử */}
        <div className="mt-5 basis-4/5">
          <div className="flex items-center justify-between">
            <div className="m-0 ">
              <h3 className="text-lg font-semibold mb-4">Đề cử</h3>
            </div>
            <div>
              <img className="w-8 h-8" src="./right-arrow.png"></img>
            </div>
          </div>
          <div className="p-0">
            <ul className="grid grid-cols-2 gap-4 list-none">
              {stories.map((story) => (
                <li
                  key={story.id}
                  className="flex items-center space-x-4 p-4 border rounded shadow-sm min-h-200"
                >
                  <div className="mr-2 basis-2/5">
                    {story.urlImage && (
                      <img
                        src={story.urlImage}
                        alt={story.name}
                        className="w-18 h-18 object-cover rounded"
                      />
                    )}
                  </div>
                  <div className="basis-3/5">
                    <div>
                      <Link
                        href="/story"
                        className="text-base font-semibold hover:text-green-700"
                        onClick={() =>
                          handleSelectStory({
                            id: story.id,
                            name: story.name,
                            urlimage: story.urlImage,
                            author: story.authorName
                          })
                        }
                      >
                        {story.name}
                      </Link>
                    </div>
                    <div>
                      {story.authorName && (
                        <p className="text-sm text-gray-600">
                          {story.authorName}
                        </p>
                      )}
                    </div>
                    <blockquote className="mt-3 text-sm text-gray-600">
                      <div className="line-clamp-3">{story.description}</div>
                    </blockquote>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
