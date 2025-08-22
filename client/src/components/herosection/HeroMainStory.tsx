import { useEffect, useState } from "react";
import axios from "axios";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import type { Post } from "../../interfaces/types";
import giveFirstFortyWords from "../../utilities/giveFirstFortyWords";

export default function HeroMainStory() {
  const [mainStory, setMainStory] = useState<Post | null>(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/hero_main")
      .then((res) => setMainStory(res.data))
      .catch((error) => console.error("Failed to fetch main story:", error));
  }, []);

  if (!mainStory) return null;

  return (
    <div className="card border-bottom-0">
      <Link to={`/article/${mainStory._id}`}>
        <img
          src={`http://localhost:3000/uploads/${mainStory.cover}`}
          className="card-img-top"
          alt={mainStory.category}
          style={{ height: "200px", objectFit: "cover" }}
        />
      </Link>

      <div className="card-body">
        <div className="d-flex justify-content-between my-1 border-bottom py-1">
          <small>
            <span className="text-danger text-decoration-none">
              {mainStory.category.toUpperCase()}
            </span>
          </small>

          <small className="text-dark">
            {format(mainStory.createdAt, "MMMM d, yyyy")}
          </small>
        </div>

        <div className="text-dark py-1">
          <h5>
            <Link
              to={`/article/${mainStory._id}`}
              className="text-dark fw-bold text-decoration-none"
              onClick={() => {
                localStorage.setItem("activeStoryId", mainStory._id);
              }}
            >
              {mainStory.tittle}
            </Link>
          </h5>
        </div>

        <div>{giveFirstFortyWords(mainStory.content)}</div>
      </div>
    </div>
  );
}
