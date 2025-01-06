"use client";
import { useStoryContext } from "../storycontext"
import StoryDetail from "@/components/story/storydetail";

const StoryPage = ({ params }: { params: { slug: string } }) => {
  const { selectedStory } = useStoryContext();
  if (!selectedStory) {
    return <div>No story selected</div>; // Hiển thị thông báo nếu chưa có câu chuyện được chọn
  }

  return (
    <div>
      <StoryDetail story={selectedStory} />
    </div>
  );
};

export default StoryPage;
