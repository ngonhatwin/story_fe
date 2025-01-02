import { cn } from "@/lib/utils";
import {Story} from "@/types/story";
import Link from "next/link";
import { createSlug } from "@/types/slug";

interface CardProps {
  stories: Story[];
  onSelectStory: (story: Story) => void;
}

const Cardtoptuan: React.FC<CardProps> = ({ stories, onSelectStory }) => {
  return (
    <div >
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
                      className={cn("w-16", "h-16", "object-cover", "rounded")}
                    />
                  )}
                </div>
                <div id="content-toptuan" className={cn("basis-4/5")}>
                  <div className={cn("line-clamp-1")}>
                    <Link
                      href={`/story/${createSlug(story.name)}`}
                      className={cn(
                        "text-base",
                        "font-semibold",
                        "hover:text-green-700"
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
    </div>
  );
};

export default Cardtoptuan;
