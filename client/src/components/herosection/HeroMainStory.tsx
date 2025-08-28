import { format } from "date-fns";
import { Link } from "react-router-dom";
import type { Post } from "../../interfaces/types";
import giveFirstFortyWords from "../../utilities/giveFirstFortyWords";
import useData from "../../hooks/useData";
import CardPlaceholder from "../placeholder/CardPlaceholder";

export default function HeroMainStory() { 
  const { data, isLoading, error } = useData<Post | null>("/hero_main");

  const fileUploadsPath = import.meta.env.VITE_UPLOADS_URL;

  return (
    <div>
      {isLoading && <CardPlaceholder />}
      {error && <div><h6 className="text text-danger">Error loading main story</h6></div> }
      {!data ? <div><h6 className="text-danger">Oops...no post available</h6></div>:<div className="card border-bottom-0">
        <Link to={`/article/${data._id}`}>
          <img
            src={`${fileUploadsPath}/${data.cover}`}
            className="card-img-top"
            alt={data.category}
            style={{ height: "200px", objectFit: "cover" }}
          />
        </Link>
        <div className="card-body">
          <div className="d-flex justify-content-between my-1 border-bottom py-1">
            <small>
              <span className="text-danger text-decoration-none">
                {data.category.toUpperCase()}
              </span>
            </small>
            <small className="text-dark">
              {format(data.createdAt, "MMMM d, yyyy")}
            </small>
          </div>
          <div className="text-dark py-1">
            <h5>
              <Link
                to={`/article/${data._id}`}
                className="text-dark fw-bold text-decoration-none"
                onClick={() => {
                  localStorage.setItem("activeStoryId", data._id);
                }}
              >
                {data.tittle}
              </Link>
            </h5>
          </div>
          <div>{giveFirstFortyWords(data.content)}</div>
        </div>
      </div>}
    </div>
  );
}
