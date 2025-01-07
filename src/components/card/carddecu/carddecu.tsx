import { cn } from "@/lib/utils";
import Link from "next/link";
import { Story } from "@/types/story";
import { createSlug } from "@/types/slug";

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
          <div>
            <img
              className={cn("w-8", "h-8")}
              src="./right-arrow.png"
              alt="Arrow"
            />
          </div>
        </div>
        <div className={cn("p-0")}>
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
                        "rounded",
                        "transition-transform",
                        "duration-300",
                        "hover:scale-105"
                      )}
                    />
                  )}
                </div>
                <div className={cn("basis-3/5")}>
                  <div>
                    <Link
                      href={`/story/${createSlug(story.name)}`}
                      className={cn(
                        "text-base",
                        "font-semibold",
                        "hover:text-green-700"
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
