import type { Post } from "../../interfaces/types";
import { Link } from "react-router-dom";
import { FiChevronsRight } from "react-icons/fi";
import useData from "../../hooks/useData";
import CardPlaceholder from "../placeholder/CardPlaceholder";

export default function CloudNativeInfrastructure() {
  const { data, isLoading, error } = useData<Post[]>("/cicd");

  const fileUploadsPath = import.meta.env.VITE_UPLOADS_URL;

  const pArray = [1, 2, 3, 4];

  return (
    <div className="py-2">
      <div className="d-flex justify-content-between align-items-center border-top border-bottom py-5">
        <h4 className="fw-bold m-0">Cloud Native & Infrastructure</h4>
        <Link
          to="/category/pipelines"
          className="text-danger text-decoration-none d-flex align-items-center gap-2"
        >
          <span className="fs-5">View All</span>
          <FiChevronsRight className="fs-5" />
        </Link>
      </div>

      <div className="row my-3">
        {isLoading ? (
          pArray.map((n) => (
            <div className="col-md-6 col-lg-3 mb-4" key={n}>
              <CardPlaceholder />
            </div>
          ))
        ) : error ? (
          <div>
            <h6 className="text-danger">Ooops...something went wrong</h6>
          </div>
        ) : (
          data?.map((story) => (
            <div className="col-md-6 col-lg-3" key={story._id}>
              <div className="card mb-3 border-0">
                <img
                  src={`${fileUploadsPath}/${story.cover}`}
                  className="card-img-top"
                  alt={story.tittle || "Article image"}
                />
                <div className="card-body px-1">
                  <h6>
                    <a href="#" className="link-danger text-decoration-none">
                      {story.category?.toUpperCase()}
                    </a>
                  </h6>
                  <h5>
                    <a
                      href={`/article/${story._id}`}
                      className="link-dark text-decoration-none"
                      onClick={() => {
                        localStorage.setItem("activeStoryId", story._id);
                      }}
                    >
                      {story.tittle}
                    </a>
                  </h5>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
