import { cn } from "@/lib/utils";
import React from "react";
import { Story } from "@/types/story";
import { Container } from "../ui/container";
interface NominationProps {
  stories: Story[];
}

export const Nomination: React.FC<NominationProps> = ({ stories }) => {
  return (
    <div className="flex justify-center">
         <Container variant="default">
        <h1 className="text-2xl font-bold mb-4">Danh sách Stories</h1>
        <ul className="list-disc pl-6">
          {stories.map((story) => (
            <li key={story.id} className="mb-2">
              <h2 className="text-lg font-semibold">{story.name}</h2>
              <p className="text-sm text-gray-600">{story.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </div>

  );
};
