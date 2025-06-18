import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { format } from "date-fns";
import parse from "html-react-parser";
import type { Post } from "../../interfaces/types";
import apiClient from "../../utilities/apiClient";
import BlogReactions from "./BlogReactions";
import BlogComments from "./BlogComments";
import useSignedInUser from "../../customHooks/useSignedInUser";

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { loggedInUser } = useSignedInUser();

  useEffect(() => {
    if (!id) return;
    const fetchPost = async () => {
      try {
        const res = await apiClient.get(`/posts/${id}`);
        setArticle(res.data);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  return loading ? (
    <p className="text-center mt-5">Loading article...</p>
  ) : error ? (
    <p className="text-danger text-center mt-5">{error}</p>
  ) : !article ? (
    <p className="text-center mt-5">Post not found.</p>
  ) : (
    <div className="m-1">
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-md-9 col-lg-6 text-center py-3">
          <h4 className="fw-bold lh-base responsive-title">{article.tittle}</h4>
        </div>
      </div>

      <div className="w-50 mx-auto my-2 px-2 py-3 d-flex justify-content-between border-bottom border-top">
        <div className="d-flex flex-column align-items-start">
          <small>
            Published on:
            <span className="text-danger ms-1">
              {format(new Date(article.createdAt), "d MMMM yyyy")}
            </span>
          </small>
          <small>
            Category:
            <Link to="#" className="link-danger text-decoration-none ms-1">
              {article.category.toUpperCase()}
            </Link>
          </small>
        </div>
        <BlogReactions />
      </div>

      <div
        className="mb-3 rounded-3"
        style={{
          maxHeight: "450px",
          maxWidth: "85%",
          margin: "auto",
          overflowY: "hidden",
        }}
      >
        <img
          src={`http://localhost:5000/uploads/${article.imgfile}`}
          alt="article"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      <div
        className="px-lg-2 py-lg-2 lh-lg text-start"
        style={{ fontSize: "16px", maxWidth: "85%", margin: "auto" }}
      >
        {parse(article.article)}
      </div>

      <BlogComments articleId={article._id} username={loggedInUser?.username} />
    </div>
  );
}
