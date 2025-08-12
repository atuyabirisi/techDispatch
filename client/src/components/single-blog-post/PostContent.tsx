import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { format } from "date-fns";
import parse from "html-react-parser";

import PostReactionPanel from "./PostReactionPanel";
import apiClient from "../../utilities/apiClient";
import type { Post } from "../../interfaces/types";

export default function PostContent() {
  const { id } = useParams<{ id: string }>();

  const [article, setArticle] = useState<Post | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (!id) return;

    const fetchArticle = () => {
      setLoading(true);

      apiClient
        .get(`/posts/${id}`)
        .then((res) => {
          setArticle(res.data);
          setLoading(false);
        })
        .catch((err: any) => {
          setError(err.message || "Something went wrong");
          setLoading(false);
        });
    };

    fetchArticle();
  }, [id]);

  if (loading) return <p className="text-center mt-5">Loading post...</p>;

  if (error) return <p className="text-center mt-5 text-danger">{error}</p>;

  if (!article) return <p className="text-center mt-5">Post not found.</p>;

  return (
    <div>
      <div className="w-50 mt-4 mx-auto text-center">
        <h4>{article.tittle.toUpperCase()}</h4>
      </div>

      <div className="w-50 mx-auto my-3 my-lg-2 px-2 py-3 d-flex justify-content-between border-bottom border-top">
        <div className="d-flex flex-column align-items-start">
          <small>
            Published on:{" "}
            <span className="text-danger">
              {format(article.createdAt, "d MMMM yyyy")}
            </span>
          </small>
          <small>
            Category:{" "}
            <Link to="#" className="link-danger text-decoration-none">
              {article.category.toUpperCase()}
            </Link>
          </small>
        </div>
        <PostReactionPanel />
      </div>

      <div className="mb-3 rounded-3 imageContainerStyle">
        <img
          src={`http://localhost:3000/uploads/${article.cover}`}
          alt="article"
          className="imageStyle"
        />
      </div>

      <div className="px-lg-2 py-lg-2 lh-lg text-start contentStyle">
        {parse(article.content)}
      </div>
    </div>
  );
}
