import { format } from "date-fns";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import type { Post } from "../../interfaces/types";
import giveFirstFortyWords from "../../utilities/giveFirstFortyWords";

export default function HeroTrendingList() {
  const [topPost, setTopPost] = useState<Post[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/top_pick")
      .then((res) => setTopPost(res.data))
      .catch((error) => console.error("Error fetching trending posts:", error));
  }, []);

  return (
    <div>
      {topPost.map((post, index) => (
        <div className="card border-0 my-4" key={index}>
          <Link to={`/posts/${post._id}`}>
            <img
              src={`http://localhost:3000/uploads/${post.cover}`}
              className="card-img-top"
              alt={post.category}
            />
          </Link>

          <div className="card-body">
            <div className="d-flex py-1 my-1 justify-content-between border-bottom">
              <small>
                <span className="text-danger text-decoration-none">
                  TOP PICK
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

            <div>{giveFirstFortyWords(post.content)}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
