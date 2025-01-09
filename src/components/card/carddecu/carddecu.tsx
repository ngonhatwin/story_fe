import { cn } from "@/lib/utils";
import Link from "next/link";
import { Story } from "@/types/story";
import { createSlug } from "@/types/slug";
import { Button } from "@/components/ui/button";

interface CarddecuProps {
  stories: Story[];
  onSelectStory: (story: Story) => void;
}

const Carddecu: React.FC<CarddecuProps> = ({ stories, onSelectStory }) => {
  return (
    <div>
      <div className={cn("mt-5", "basis-4/5")}>
        <div className={cn("flex", "items-center", "justify-between")}>
          <div className={cn("m-0")}>
            <h3 className={cn("text-lg", "font-semibold", "mb-4")}>Đề cử</h3>
          </div>
          <Link 
          href={"/story/nomination"}>
            <Button variant="link">
              <img
                className={cn("w-8", "h-8")}
                src="./right-arrow.png"
                alt="Arrow"
              />
            </Button>
          </Link>
        </div>
        <div className={cn("pr-3")}>
          <ul className={cn("grid", "grid-cols-3", "gap-4", "list-none")}>
            {stories.map((story) => (
              <li
                key={story.id}
                className={cn(
                  "flex",
                  "items-center",
                  "space-x-1",
                  "p-4",
                  "border",
                  "rounded",
                  "shadow-sm",
                  "min-h-200",
                  "border-gray-300"
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
                        "rounded",
                        "transition-transform",
                        "duration-300",
                        "hover:scale-110"
                      )}
                    />
                  )}
                </div>
                <div className={cn("basis-3/5")}>
                  <div className={cn("min-h-3", "items-center")}>
                    <Link
                      href={`/story/${createSlug(story.name)}`}
                      className={cn(
                        "items-center",
                        "text-base",
                        "font-semibold",
                        "hover:text-green-700",
                        "line-clamp-2",
                        "transform", // Bật tính năng transform
                        "transition-all", // Tất cả các thay đổi sẽ có hiệu ứng chuyển tiếp
                        "duration-300", // Thời gian chuyển tiếp (300ms)
                        "hover:scale-110",
                        "hover:z-10", // Đảm bảo phần tử có độ ưu tiên hiển thị cao hơn khi hover
                        "origin-center" // Đảm bảo phóng to từ giữa phần tử
                      )}
                      onClick={() => onSelectStory(story)}
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
  );
};

export default Carddecu;
