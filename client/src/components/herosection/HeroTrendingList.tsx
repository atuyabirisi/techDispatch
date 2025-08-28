import { format } from "date-fns";
import { Link } from "react-router-dom";
import type { Post } from "../../interfaces/types";
import giveFirstFortyWords from "../../utilities/giveFirstFortyWords";
import useData from "../../hooks/useData";
import CardPlaceholder from "../placeholder/CardPlaceholder";

export default function HeroTrendingList() {
  const { data, isLoading, error } = useData<Post[]>("/top_pick");

  const fileUploadsPath = import.meta.env.VITE_UPLOADS_URL;

  return (
    <div>
      {isLoading && <CardPlaceholder />}
      {error && (
        <div>
          <h6 className="text text-danger">Error loading posts</h6>
        </div>
      )}
      {data?.map((post, index) => (
        <div className="card border-0 my-4" key={index}>
          <Link
            to={`/article/${post._id}`}
            onClick={() => {
              localStorage.setItem("activeStoryId", post._id);
            }}
          >
            <img
              src={`${fileUploadsPath}/${post.cover}`}
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
                to={`/article/${post._id}`}
                className="text-dark text-decoration-none"
                onClick={() => {
                  localStorage.setItem("activeStoryId", post._id);
                }}
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
