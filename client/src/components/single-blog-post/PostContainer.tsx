import CommentSection from "./CommentSection";
import PostContent from "./PostContent";

export default function PostContainer() {
  return (
    <div className="w-75 mx-auto">
      <PostContent />
      <CommentSection />
    </div>
  );
}
