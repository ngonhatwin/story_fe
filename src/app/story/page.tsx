"use client";

import { useStoryContext } from "@/app/storycontext";
const story = () => {
  const { selectedStory } = useStoryContext();
    return (
      <div>
      {selectedStory ? (
        <div className="flex">
          <div>
          <img
            src={selectedStory.urlimage}
            alt={selectedStory.name}
            style={{ width: "200px", height: "auto" }}
          />
          </div>
         
          <div>
          <h2>{selectedStory.name}</h2>
          <p>{selectedStory.author}</p>
            </div>
          
        </div>
      ) : (
        <p>Không có truyện nào được chọn.</p>
      )}
    </div>
    );
};

export default story;