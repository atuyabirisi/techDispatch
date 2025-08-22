import { useState, type FormEvent } from "react";
import { Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import useSignedInUser from "../../customHooks/useSignedInUser";
import type { AppDispatch } from "../../app/store";
import apiClient from "../../utilities/apiClient";
import { openSignInModal } from "../../slices/signInModalSlice";
import type { CommentProps } from "../../interfaces/types";

export default function PostComments({
  articleId,
  commentorName,
}: CommentProps) {
  const [comment, setComment] = useState({
    article: articleId,
    commenter: commentorName,
    comment: "",
  });

  const [commentLen, setCommentLength] = useState<number>(100);

  const [response, setResponse] = useState<string | null>(null);

  const { loggedInUser } = useSignedInUser();

  const dispatch: AppDispatch = useDispatch();

  const onComment = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const res = await apiClient.post("/comment", comment);

      setResponse(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  if (!loggedInUser) {
    return (
      <div
        className="my-2 p-2"
        style={{
          maxHeight: "450px",
          maxWidth: "85%",
          margin: "auto",
          overflowY: "hidden",
        }}
      >
        <Link
          to="#"
          onClick={() => dispatch(openSignInModal())}
          className="text-decoration-none"
        >
          <h6 className="text-danger">Sign in to leave a comment</h6>
        </Link>
      </div>
    );
  }

  return (
    <div
      className="my-2 p-2"
      style={{
        maxHeight: "450px",
        maxWidth: "85%",
        margin: "auto",
        overflowY: "hidden",
      }}
    >
      {response && <Alert className="alert alert-success">{response}</Alert>}

      <form onSubmit={onComment}>
        <label
          htmlFor="comment"
          className="form-label text-danger"
          style={{ fontSize: "17px" }}
        >
          Leave your comment below:
        </label>
        <textarea
          id="comment"
          value={comment.comment}
          rows={4}
          maxLength={100}
          className="form-control"
          onChange={(event) => {
            const value = event.target.value;
            setComment((commentMeta) => ({ ...commentMeta, comment: value }));
            setCommentLength(100 - value.length);
          }}
        />
        <div className="py-2 d-flex justify-content-between">
          <h6>{commentLen} characters remaining</h6>
          <button className="btn btn-danger" type="submit">
            Post comment
          </button>
        </div>
      </form>
    </div>
  );
}
