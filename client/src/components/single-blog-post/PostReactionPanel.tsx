import { FaRegBookmark, FaRegCommentAlt } from "react-icons/fa";

export default function PostReactionPanel() {
  const reactions = [
    { icon: <FaRegCommentAlt />, label: "Comment" },
    { icon: <FaRegBookmark />, label: "Bookmark" },
  ];

  return (
    <div className="d-flex align-items-end gap-4 fs-6">
      {reactions.map((reaction, index) => (
        <span key={index} aria-label={reaction.label} title={reaction.label}>
          {reaction.icon}
        </span>
      ))}
    </div>
  );
}
