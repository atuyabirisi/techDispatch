import { format } from "date-fns";
import { useEffect, useState } from "react";
import parse from "html-react-parser";
import axios from "axios";
import { Link } from "react-router-dom";
import type { Post } from "../interfaces/types";

export default function HeroTrendingList() {
  const [trendingPosts, setTrendingPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/trending")
      .then((res) => setTrendingPosts(res.data))
      .catch((error) => console.error("Error fetching trending posts:", error));
  }, []);

  return (
    <div>
      {trendingPosts.map((post, index) => (
        <div className="card border-0 my-4" key={index}>
          <Link to={`/posts/${post._id}`}>
            <img
              src={`http://localhost:5000/uploads/${post.imgfile}`}
              className="card-img-top"
              alt={post.category}
            />
          </Link>

          <div className="card-body">
            <div className="d-flex py-1 my-1 justify-content-between border-bottom">
              <small>
                <span className="text-danger text-decoration-none">
                  TRENDING
                </span>
              </small>
              <small className="text-dark">
                {format(post.createdAt, "MMMM d, yyyy")}
              </small>
            </div>

            <div className="py-2">
              <Link
                to={`/posts/${post._id}`}
                className="text-dark text-decoration-none"
              >
                <h5 className="fw-bold">{post.tittle}</h5>
              </Link>
            </div>

            <div>{parse(post.abstract)}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
