"use client";
import { useState } from "react";
//component
import { Button } from "../ui/button";
//lib
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
//types
import { StoryAndGenre } from "@/types/storyandgenre";
import { Fullscreen } from "lucide-react";

const StoryDetailComponent: React.FC<{ story: StoryAndGenre }> = ({
  story,
}) => {
  const [isClamped, setIsClamped] = useState(true);

  const toggleClamp = () => {
    setIsClamped((prev) => !prev);
  };

  return (
    <div className={cn("flex", "justify-center")}>
      <div
        className={cn(
          "my-4",
          "flex",
          "flex-row",
          "flex-wrap",
          "justify-between",
          "rounded-[8px]",
          "border-[1px]",
          "border-[#ddd]",
          "bg-transparent",
          "p-[10px]",
          "md:flex-nowrap",
          "lg:flex-row",
          "md:max-w-[1140px]"
        )}
      >
        <div className={cn("w-50", "h-auto", "rounded", "basis-2/6")}>
          <Image
            src={story.urlImage || "/default_image.jpg"}
            alt={story.name || "default"}
            width={96}
            height={100}
            className={cn("", "max-h-96", "mb-4", "rounded")}
          />
        </div>
        <div className={cn("basis-4/5")}>
          <h1 className={cn("text-2xl", "font-bold", "mb-4")}>{story.name}</h1>
          <p className={cn("text-gray-500", "mt-2")}>
            Tác giả: {story.authorName || "Không rõ"}
          </p>
          <p
            className={cn("text-gray-700", "mt-5", {
              "line-clamp-5": isClamped,
              "line-clamp-full": !isClamped,
            })}
          >
            {story.description || "Không có mô tả"}
          </p>
          <Button
            className="p-0 text-blue-500"
            variant="link"
            onClick={toggleClamp}
          >
            {isClamped ? "Xem thêm" : "Thu gọn"}
          </Button>
          {story.genres && story.genres.length > 0 && (
            <div className={cn("mt-10", "flex", "gap-2", "flex-wrap")}>
              {story.genres.map((genre, index) => (
                <Link
                  key={index}
                  href={`/story/genre/${genre.id}`}
                  className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-300"
                >
                  {genre.name}
                </Link>
              ))}
            </div>
          )}
          <div className={cn("mt-10", "flex", "gap-10")}>
            <div>
              <Button variant="destructive">Danh sách chương</Button>
            </div>
            <div>
              <Button variant="destructive">Yêu thích</Button>
            </div>
            <div>
              <Button variant="destructive">Đánh giá</Button>
            </div>
            <div>
              <Button variant="destructive">Bình luận</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryDetailComponent;
