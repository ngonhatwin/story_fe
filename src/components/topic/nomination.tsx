import { cn } from "@/lib/utils";
import React from "react";
import { Story } from "@/types/story";
import { Container } from "../ui/container";
import { createSlug } from "@/types/slug";
import Link from "next/link";
interface NominationProps {
  stories: Story[];
  onSelectStory: (story: Story) => void;
}

export const Nomination: React.FC<NominationProps> = ({
  stories,
  onSelectStory,
}) => {
  return (
    <div className="flex justify-center relative">
      <Container className="sticky top-0  bg-neutral-500 rounded-bl-lg rounded-br-lg">
        <h1 className="text-2xl font-bold">Danh sách Đề cử</h1>

        <ul className="list-none pl-6">
          {stories.map((story) => (
            <li
              key={story.id}
              className={cn(
                "flex",
                "space-x-1",
                "p-2",
                "m-5",
                "p-1",
                "border",
                "rounded",
                "shadow-sm",
                "h-200",
                "border-gray-300",
                "transition-transform",
                "duration-300",
                "hover:scale-105",
                "hover:shadow-lg"
              )}
            >
              <div className={cn("flex", "max-h-[244]")}>
                <div>
                  {story.urlImage && (
                    <img
                      src={story.urlImage}
                      alt={story.name}
                      className={cn(
                        "w-18",
                        "h-18",
                        "object-cover",
                        "rounded",
                        "transition-transform",
                        "duration-300",
                        "hover:scale-110",
                        "min-w-[144]",
                        "max-h-[200]",
                        "m-3"
                      )}
                    />
                  )}
                </div>
                <div
                  className={cn("m-3", "flex", "flex-col", "justify-between")}
                >
                  <div className={cn("")}>
                    <div className={cn("mb-2")}>
                      <Link
                        href={`/story/${createSlug(story.name)}`}
                        className={cn(
                          "text-base",
                          "font-semibold",
                          "hover:text-green-700",
                          "transform", // Bật tính năng transform
                          "transition-all", // Tất cả các thay đổi sẽ có hiệu ứng chuyển tiếp
                          "duration-300", // Thời gian chuyển tiếp (300ms)
                          "hover:scale-120",
                          "hover:max-line-clamp-2",
                          "hover:z-10", // Đảm bảo phần tử có độ ưu tiên hiển thị cao hơn khi hover
                          "origin-center",
                          "mb-2"
                        )}
                        onClick={() =>
                          onSelectStory({
                            id: story.id,
                            name: story.name,
                            urlImage: story.urlImage,
                            authorName: story.authorName,
                            description: "",
                          })
                        }
                      >
                        {story.name}
                      </Link>
                    </div>
                    <div>
                      <p>{story.authorName}</p>
                    </div>
                  </div>
                  <p className={cn("text-sm", "text-gray-600", "line-clamp-3")}>
                    {story.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};
