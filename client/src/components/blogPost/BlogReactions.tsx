import { FaRegCommentAlt } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";

export default function BlogReactions() {
  return (
    <div className="d-flex align-items-end gap-4 fs-6">
      <button className="btn p-0 border-0 bg-transparent" aria-label="Comment">
        <FaRegCommentAlt />
      </button>
      <button className="btn p-0 border-0 bg-transparent" aria-label="Bookmark">
        <FaRegBookmark />
      </button>
    </div>
  );
}
