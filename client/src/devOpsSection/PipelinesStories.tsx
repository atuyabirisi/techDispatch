import { useEffect, useState } from "react";
import { FiChevronsRight } from "react-icons/fi";
import axios from "axios";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import type { Post } from "../interfaces/types";

export default function PipelinesStories() {
  const [pipelinePosts, setPipelinePosts] = useState<Post[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/web-security")
      .then((res) => setPipelinePosts(res.data))
      .catch((err) => console.error("Failed to fetch pipeline posts:", err));
  }, []);

  return (
    <section className="py-4">
      <hr className="my-4 mx-1" />

      <div className="d-flex justify-content-between align-items-center px-2 mb-3">
        <h4 className="fw-bold m-0">Pipelines & Processes</h4>
        <Link
          to="/category/pipelines"
          className="text-danger text-decoration-none d-flex align-items-center gap-2"
        >
          <span className="fs-5">View All</span>
          <FiChevronsRight className="fs-5" />
        </Link>
      </div>

      <div className="row">
        {pipelinePosts.map((post) => (
          <div className="col-md-6 col-lg-3 mb-4" key={post._id}>
            <div className="card border-0 h-100">
              <Link to={`/posts/${post._id}`}>
                <img
                  src={`http://localhost:5000/uploads/${post.imgfile}`}
                  alt={post.tittle}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
              </Link>
              <div className="card-body bg-light">
                <div className="d-flex justify-content-between border-bottom py-1 mb-2">
                  <small className="text-danger">
                    {post.category.toUpperCase()}
                  </small>
                  <small className="text-dark">
                    {format(post.createdAt, "MMM d, yyyy")}
                  </small>
                </div>
                <h5 className="text-center">
                  <Link
                    to={`/posts/${post._id}`}
                    className="text-dark text-decoration-none fw-bold"
                  >
                    {post.tittle}
                  </Link>
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
