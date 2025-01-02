"use client";
import { cn } from "@/lib/utils";
import { Story } from "@/types/story";

const StoryDetail: React.FC<{ story: Story }> = ({ story }) => (
  
  <div className={cn("p-5", "bg-white", "rounded", "shadow-lg")}>
    <h1 className={cn("text-2xl", "font-bold", "mb-4")}>{story.name}</h1>
    <img
      src={story.urlImage || "/default_image.jpg"}
      alt={story.name}
      className={cn("w-full", "h-auto", "mb-4", "rounded")}
    />
    <p className={cn("text-gray-700")}>{story.description || "Không có mô tả"}</p>
    <p className={cn("text-gray-500", "mt-2")}>
      Tác giả: {story.authorName || "Không rõ"}
    </p>
  </div>
);

export default StoryDetail;