"use client";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils"; // Import hàm cn từ utils
import { useStoryContext } from "@/app/storycontext";
import Link from "next/link";

const Card = () => {
  const { selectedStory, setSelectedStory } = useStoryContext();
  const [stories, setStories] = useState([]);

  const handleSelectStory = (story: {
    id: any;
    name: any;
    urlimage: any;
    author: any;
  }) => {
    setSelectedStory(story);
  };

  return (
    <div>
      <div className={cn("flex")}>
        <div className={cn("mt-5", "basis-2/6")}>
          <div className={cn("mb-4", "flex", "justify-between")}>
            <div>
              <h3 className={cn("ml-2", "text-lg", "font-semibold")}>
                Top trong tuần
              </h3>
            </div>
          </div>
          <div
            className={cn(
              "p-0",
              "border",
              "rounded",
              "shadow-sm",
              "ml-3",
              "mr-4"
            )}
          >
            <ul className={cn("list-none")}>
              {stories.map((story) => (
                <li
                  key={story.id}
                  className={cn("flex", "items-center", "space-x-4", "mb-4")}
                >
                  <div className={cn("mr-2", "basis-1/5")}>
                    {story.urlImage && (
                      <img
                        src={story.urlImage}
                        alt={story.name}
                        className={cn(
                          "w-16",
                          "h-16",
                          "object-cover",
                          "rounded"
                        )}
                      />
                    )}
                  </div>
                  <div id="content-toptuan" className={cn("basis-4/5")}>
                    <div className={cn("line-clamp-1")}>
                      <Link
                        href="/story"
                        className={cn(
                          "text-base",
                          "font-semibold",
                          "hover:text-green-700"
                        )}
                        onClick={() =>
                          handleSelectStory({
                            id: story.id,
                            name: story.name,
                            urlimage: story.urlImage,
                            author: story.authorName,
                          })
                        }
                      >
                        {story.name}
                      </Link>
                    </div>
                    <div>
                      {story.authorName && (
                        <p className={cn("text-sm", "text-gray-600")}>
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
        <div className={cn("mt-5", "basis-4/5")}>
          <div className={cn("flex", "items-center", "justify-between")}>
            <div className={cn("m-0")}>
              <h3 className={cn("text-lg", "font-semibold", "mb-4")}>Đề cử</h3>
            </div>
            <div>
              <img
                className={cn("w-8", "h-8")}
                src="./right-arrow.png"
                alt="Arrow"
              />
            </div>
          </div>
          <div className={cn("p-0")}>
            <ul className={cn("grid", "grid-cols-2", "gap-4", "list-none")}>
              {stories.map((story) => (
                <li
                  key={story.id}
                  className={cn(
                    "flex",
                    "items-center",
                    "space-x-4",
                    "p-4",
                    "border",
                    "rounded",
                    "shadow-sm",
                    "min-h-200"
                  )}
                >
                  <div className={cn("mr-2", "basis-2/5")}>
                    {story.urlImage && (
                      <img
                        src={story.urlImage}
                        alt={story.name}
                        className={cn(
                          "w-18",
                          "h-18",
                          "object-cover",
                          "rounded"
                        )}
                      />
                    )}
                  </div>
                  <div className={cn("basis-3/5")}>
                    <div>
                      <Link
                        href="/story"
                        className={cn(
                          "text-base",
                          "font-semibold",
                          "hover:text-green-700"
                        )}
                        onClick={() =>
                          handleSelectStory({
                            id: story.id,
                            name: story.name,
                            urlimage: story.urlImage,
                            author: story.authorName,
                          })
                        }
                      >
                        {story.name}
                      </Link>
                    </div>
                    <div>
                      {story.authorName && (
                        <p className={cn("text-sm", "text-gray-600")}>
                          {story.authorName}
                        </p>
                      )}
                    </div>
                    <blockquote
                      className={cn("mt-3", "text-sm", "text-gray-600")}
                    >
                      <div className={cn("line-clamp-3")}>
                        {story.description}
                      </div>
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

export default Card;
