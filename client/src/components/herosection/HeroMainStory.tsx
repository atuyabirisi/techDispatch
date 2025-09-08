import { format } from "date-fns";
import { Link } from "react-router-dom";
import type { Post } from "../../interfaces/types";
import giveFirstFortyWords from "../../utilities/giveFirstFortyWords";
import useData from "../../hooks/useData";
import CardPlaceholder from "../placeholder/CardPlaceholder";

export default function HeroMainStory() {
  const { data, isLoading, error } = useData<Post | null>("/hero_main");

  const fileUploadsPath = import.meta.env.VITE_UPLOADS_URL;

  if (isLoading) return <CardPlaceholder />;
  if (error) {
    return <p className="text-danger">Unable to load the main story.</p>;
  }
  if (!data) return <p className="text-danger">No post available.</p>;

  return (
    <div className="card border-bottom-0">
      <Link to={`/article/${data._id}`}>
        <img
          src={`${fileUploadsPath}/${data.cover}`}
          className="card-img-top"
          alt="today story cover"
          style={{ maxHeight: "200px", objectFit: "cover" }}
          onError={(e) => (e.currentTarget.src = "/fallback.jpg")}
        />
      </Link>
      <div className="card-body">
        <div className="d-flex justify-content-between my-1 border-bottom py-1">
          <small className="text-danger">{data.category?.toUpperCase()}</small>
          <small className="text-dark">
            {format(new Date(data.createdAt), "MMMM d, yyyy")}
          </small>
        </div>
        <div className="py-1">
          <h5>
            <Link
              to={`/article/${data._id}`}
              className="link-dark text-decoration-none"
              onClick={() => localStorage.setItem("activeStoryId", data._id)}
            >
              {data.tittle}
            </Link>
          </h5>
        </div>
        <div>{giveFirstFortyWords(data.content)}</div>
      </div>
    </div>
  );
}
