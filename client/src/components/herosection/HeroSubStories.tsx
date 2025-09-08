import { format } from "date-fns";
import { Link } from "react-router-dom";
import type { Post } from "../../interfaces/types";
import useData from "../../hooks/useData";
import CardPlaceholder from "../placeholder/CardPlaceholder";

export default function HeroSubStories() {
  const { data, isLoading, error } = useData<Post[]>("/hero_docker");
  const fileUploadsPath = import.meta.env.VITE_UPLOADS_URL;

  if (isLoading) {
    return (
      <div>
        <CardPlaceholder />
        <CardPlaceholder />
      </div>
    );
  }

  if (error) {
    return <h6 className="text-danger">Unable to load articles.</h6>;
  }

  if (!data || data.length === 0) {
    return <h6 className="text-muted">No articles available.</h6>;
  }

  return (
    <div className="row">
      {data.map((story) => (
        <div className="col-md-6 col-lg-12" key={story._id}>
          <div className="card mb-3 border-0">
            <Link
              to={`/article/${story._id}`}
              onClick={() => localStorage.setItem("activeStoryId", story._id)}
            >
              <img
                src={`${fileUploadsPath}/${story.cover}`}
                alt="main story cover"
                className="card-img-top"
                style={{ maxHeight: "200px", objectFit: "cover" }}
                onError={(e) => (e.currentTarget.src = "/fallback.jpg")}
              />
            </Link>

            <div className="card-body bg-light">
              <div className="d-flex justify-content-between my-1 border-bottom py-1">
                <small className="text-danger">
                  {story.category?.toUpperCase()}
                </small>
                <small className="text-dark">
                  {format(new Date(story.createdAt), "MMM d, yyyy")}
                </small>
              </div>
              <div className="py-1">
                <h5>
                  <Link
                    to={`/article/${story._id}`}
                    className="text-dark text-decoration-none"
                    onClick={() =>
                      localStorage.setItem("activeStoryId", story._id)
                    }
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
