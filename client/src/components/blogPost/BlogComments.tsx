import axios from "axios";
import { useState, type FormEvent } from "react";
import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import useSignedInUser from "../../customHooks/useSignedInUser";
import type { BlogCommentsProps } from "../../interfaces/types";

export default function BlogComments({
  articleId,
  username,
}: BlogCommentsProps) {
  const [commentText, setCommentText] = useState("");
  const [charRemaining, setCharRemaining] = useState(100);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);
  const { loggedInUser } = useSignedInUser();

  const handleCommentSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/comment", {
        article: articleId,
        commenter: username,
        comment: commentText,
      });

      setCommentText("");
      setCharRemaining(100);
      setResponseMessage(res.data);
    } catch (error) {
      console.error("Comment submission failed", error);
    }
  };

  return !loggedInUser ? (
    <div className="my-2 p-2 mx-auto" style={{ maxWidth: "85%" }}>
      <Link to="#" className="text-decoration-none">
        <h6 className="text-danger">Sign in to leave a comment</h6>
      </Link>
    </div>
  ) : (
    <div className="my-2 p-2 mx-auto" style={{ maxWidth: "85%" }}>
      {responseMessage && <Alert variant="success">{responseMessage}</Alert>}

      <form onSubmit={handleCommentSubmit}>
        <label htmlFor="comment" className="form-label text-danger fs-6">
          Leave your comment below:
        </label>
        <textarea
          id="comment"
          value={commentText}
          rows={4}
          maxLength={100}
          className="form-control"
          onChange={(e) => {
            setCommentText(e.target.value);
            setCharRemaining(100 - e.target.value.length);
          }}
        />
        <div className="py-2 d-flex justify-content-between">
          <small>{charRemaining} characters remaining</small>
          <button className="btn btn-danger" type="submit">
            Post Comment
          </button>
        </div>
      </form>
    </div>
  );
}
