import type { Post } from "../../interfaces/types";
import { Link } from "react-router-dom";
import { FiChevronsRight } from "react-icons/fi";
import useData from "../../hooks/useData";
import CardPlaceholder from "../placeholder/CardPlaceholder";
import { format } from "date-fns";

export default function CloudNativeInfrastructure() {
  const { data, isLoading, error } = useData<Post[]>("/cloud_native");

  const articles = data?.slice(0, 4) ?? [];
  const placeholders = Array.from({ length: 4 });

  if (isLoading) {
    return (
      <div className="py-2">
        <SectionHeader />
        <div className="row my-3">
          {placeholders.map((_, i) => (
            <div className="col-md-6 col-lg-3 mb-4" key={i}>
              <CardPlaceholder />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-2">
        <SectionHeader />
        <CardPlaceholder />
      </div>
    );
  }

  if (articles.length === 0) {
    return (
      <div className="py-2">
        <SectionHeader />
        <h6 className="text-muted my-3">No articles available.</h6>
      </div>
    );
  }

  return (
    <div className="py-2">
      <SectionHeader />
      <div className="row my-3">
        {articles.map((article) => (
          <div className="col-md-6 col-lg-3" key={article._id}>
            <div className="card mb-3 border-0">
              <img
                src={article.cover}
                className="card-img-top"
                alt="article image"
                style={{ maxHeight: "200px", objectFit: "cover" }}
                onError={(e) => (e.currentTarget.src = "/fallback.jpg")}
              />
              <div className="card-body px-1">
                <div className="d-flex justify-content-between my-1 border-bottom py-1">
                  <small className="text-danger">{article.category}</small>
                  <small className="text-dark">
                    {format(new Date(article.createdAt), "MMM d, yyyy")}
                  </small>
                </div>
                <div className="py-1">
                  <h5>
                    <Link
                      to={`/article/${article._id}`}
                      className="link-dark text-decoration-none"
                      onClick={() =>
                        localStorage.setItem("activearticleId", article._id)
                      }
                    >
                      {article.tittle}
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="d-flex justify-content-between align-items-center border-top border-bottom py-5">
      <h4 className="fw-bold m-0">Cloud Native and Infrastructure</h4>
      <Link
        to="/all/cloud_native"
        className="text-danger text-decoration-none d-flex align-items-center gap-2"
      >
        <span className="fs-5">View All</span>
        <FiChevronsRight className="fs-5" />
      </Link>
    </div>
  );
}
