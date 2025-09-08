import { FiChevronsRight } from "react-icons/fi";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import type { Post } from "../../interfaces/types";
import useData from "../../hooks/useData";
import CardPlaceholder from "../placeholder/CardPlaceholder";

export default function CICDArticles() {
  const { data, isLoading, error } = useData<Post[]>("/cicd");
  const fileUploadsPath = import.meta.env.VITE_UPLOADS_URL;

  const articles = data?.slice(0, 4) ?? [];
  const placeholders = Array.from({ length: 4 });

  if (isLoading) {
    return (
      <section className="py-6">
        <SectionHeader />
        <div className="row">
          {placeholders.map((_, i) => (
            <div className="col-md-6 col-lg-3 mb-4" key={i}>
              <CardPlaceholder />
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-6">
        <SectionHeader />
        <h6 className="text-danger my-3">Ooops...something went wrong</h6>
      </section>
    );
  }

  if (articles.length === 0) {
    return (
      <section className="py-6">
        <SectionHeader />
        <h6 className="text-muted my-3">No CI/CD articles available.</h6>
      </section>
    );
  }

  return (
    <section className="py-6">
      <SectionHeader />
      <div className="row">
        {articles.map((article) => (
          <div className="col-md-6 col-lg-3 mb-4" key={article._id}>
            <div className="card border-0 h-100">
              <img
                src={`${fileUploadsPath}/${article.cover}`}
                alt="article image"
                className="card-img-top"
                style={{ maxHeight: "200px", objectFit: "cover" }}
                onError={(e) => (e.currentTarget.src = "/fallback.jpg")}
              />
              <div className="card-body bg-light">
                <div className="d-flex justify-content-between border-bottom py-1 mb-2">
                  <h6 className="text-danger">{article.category}</h6>
                  <small className="text-danger">
                    {format(new Date(article.createdAt), "MMM d, yyyy")}
                  </small>
                </div>
                <div className="py-1">
                  <h5>
                    <Link
                      to={`/article/${article._id}`}
                      className="text-dark text-decoration-none"
                      onClick={() =>
                        localStorage.setItem("activeStoryId", article._id)
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
    </section>
  );
}

function SectionHeader() {
  return (
    <>
      <hr className="my-3 mx-1" />
      <div className="d-flex justify-content-between align-items-center border-bottom py-5 mb-3">
        <h4 className="fw-bold m-0">
          Continuous Integration/Continuous Deployment
        </h4>
        <Link
          to="/all/cicd"
          className="text-danger text-decoration-none d-flex align-items-center gap-2"
        >
          <span className="fs-5">View All</span>
          <FiChevronsRight className="fs-5" />
        </Link>
      </div>
    </>
  );
}
