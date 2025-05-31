import { useEffect, useState } from "react";
import axios from "axios";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import type { Post } from "../interfaces/types";

export default function HeroSubStories() {
  const [subStories, setSubStories] = useState<Post[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/hero-startup")
      .then((res) => setSubStories(res.data))
      .catch((error) => console.error("Failed to fetch sub-stories:", error));
  }, []);

  return (
    <div className="row">
      {subStories.map((story, index) => (
        <div className="col-md-6 col-lg-12" key={index}>
          <div className="card mb-3 border-0">
            <Link to={`/posts/${story._id}`}>
              <img
                src={`http://localhost:5000/uploads/${story.imgfile}`}
                className="card-img-top"
                alt={story.category}
                style={{ height: "200px", objectFit: "cover" }}
              />
            </Link>

            <div className="card-body bg-light">
              <div className="d-flex justify-content-between my-1 border-bottom py-1">
                <small>
                  <span className="text-danger text-decoration-none">
                    {story.category.toUpperCase()}
                  </span>
                </small>

                <small className="text-dark">
                  {format(story.createdAt, "MMM d, yyyy")}
                </small>
              </div>

              <div>
                <h5>
                  <Link
                    to={`/posts/${story._id}`}
                    className="text-dark text-decoration-none fw-bold"
                  >
                    {story.tittle}
                  </Link>
                </h5>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
