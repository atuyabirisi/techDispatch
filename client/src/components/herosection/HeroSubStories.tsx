import { format } from "date-fns";
import { Link } from "react-router-dom";
import type { Post } from "../../interfaces/types";
import useData from "../../hooks/useData";
import CardPlaceholder from "../placeholder/CardPlaceholder";

export default function HeroSubStories() {
  const { data, isLoading, error } = useData<Post[]>("/hero_docker");

  const fileUploadsPath = import.meta.env.VITE_UPLOADS_URL;

  return (
    <div className="row">
      {isLoading ? (
        <div>
          <CardPlaceholder />
          <CardPlaceholder />
        </div>
      ) : error ? (
        <div>
          <h6 className="text-danger">Error loading articles</h6>
        </div>
      ) : (
        data?.map((story, index) => (
          <div className="col-md-6 col-lg-12" key={index}>
            <div className="card mb-3 border-0">
              <Link
                to={`/article/${story._id}`}
                onClick={() => {
                  localStorage.setItem("activeStoryId", story._id);
                }}
              >
                <img
                  src={`${fileUploadsPath}/${story.cover}`}
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
                      to={`/article/${story._id}`}
                      className="text-dark text-decoration-none fw-bold"
                      onClick={() => {
                        localStorage.setItem("activeStoryId", story._id);
                      }}
                    >
                      {story.tittle}
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
