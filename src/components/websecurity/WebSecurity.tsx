import { FiChevronsRight } from "react-icons/fi";

export default function WebSecurity() {
  return (
    <div className="px-2 py-4 border-top border-bottom">
      <div className="d-flex justify-content-between">
        <h3>Trends in web security</h3>
        <a href="#" className="link-danger text-decoration-none">
          <div className="d-flex gap-2">
            <div className="d-flex align-items-center fs-5">
              <strong>View all</strong>
            </div>
            <div className="d-flex align-items-center fs-5">
              <FiChevronsRight />
            </div>
          </div>
        </a>
      </div>
      <div className="row my-3 pt-2">
        <div className="col-md-6 col-lg-3">
          <div className="card mb-3 border-0">
            <img
              src="src\assets\deriv.webp"
              className="card-img-top"
              style={{ minHeight: "200px", objectFit: "cover" }}
              alt="..."
            />
            <div className="card-body bg-light">
              <div className="d-flex justify-content-between my-1 border-bottom py-1">
                <small>
                  <a href="#" className="text-danger text-decoration-none">
                    INVESTORS
                  </a>
                </small>
                <small className="text-dark">21 April 2024</small>
              </div>
              <div>
                <h5>
                  <a href="#" className="text-dark text-decoration-none">
                    Best summer reads for your vacation
                  </a>
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="card mb-3 border-0">
            <img
              src="src\assets\deriv2.jpg"
              className="card-img-top"
              style={{ minHeight: "200px", objectFit: "cover" }}
              alt="..."
            />
            <div className="card-body bg-light px-1">
              <div className="d-flex justify-content-between my-1 border-bottom py-1">
                <small>
                  <a href="#" className="text-danger text-decoration-none">
                    STARTUPS
                  </a>
                </small>
                <small className="text-dark">21 April 2024</small>
              </div>
              <h5>Best summer reads for your vacation</h5>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="card mb-3 border-0">
            <img
              src="src\assets\news.jpg"
              className="card-img-top"
              alt="..."
              style={{ minHeight: "200px", objectFit: "cover" }}
            />
            <div className="card-body bg-light px-1">
              <div className="d-flex justify-content-between my-1 border-bottom py-1">
                <small>
                  <a href="#" className="text-danger text-decoration-none">
                    STARTUPS
                  </a>
                </small>
                <small className="text-dark">21 April 2024</small>
              </div>
              <div>
                <h5>Best summer reads for your vacation</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="card mb-1 border-0">
            <img
              src="src\assets\deriv.webp"
              className="card-img-top"
              style={{ minHeight: "200px", objectFit: "cover" }}
              alt="..."
            />
            <div className="card-body bg-light px-1">
              <div className="d-flex justify-content-between my-1 border-bottom py-1">
                <small>
                  <a href="#" className="text-danger text-decoration-none">
                    STARTUPS
                  </a>
                </small>
                <small className="text-dark">21 April 2024</small>
              </div>
              <div>
                <h5>Best summer reads for your vacation</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
