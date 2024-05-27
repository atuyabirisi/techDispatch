import { FiChevronsRight } from "react-icons/fi";

export default function EditorPick() {
  return (
    <div className="p-2 my-3">
      <div className="d-flex justify-content-between">
        <h3>Editor's Pick</h3>
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
      <div className="row my-3">
        <div className="col-md-6 col-lg-4">
          <div className="row">
            <div className="col-md-2 d-flex justify-content-start">
              <h1>1.</h1>
            </div>
            <div className="col-md-10">
              <div className="card mb-3 border-0">
                <img
                  src="src\assets\deriv.webp"
                  className="card-img-top"
                  style={{ minHeight: "200px", objectFit: "cover" }}
                  alt="..."
                />
                <div className="card-body px-1">
                  <h6>
                    <a href="#" className="link-dark">
                      NODE.JS
                    </a>
                  </h6>
                  <h5>
                    <a href="#" className="link-dark text-decoration-none">
                      Best summer reads for your vacation
                    </a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="row">
            <div className="col-md-2 d-flex justify-content-start">
              <h1>2.</h1>
            </div>
            <div className="col-md-10">
              <div className="card mb-1 border-0">
                <img
                  src="src\assets\deriv2.jpg"
                  className="card-img-top"
                  style={{ minHeight: "200px", objectFit: "cover" }}
                  alt="..."
                />
                <div className="card-body px-1">
                  <h6>
                    <a href="#" className="link-dark">
                      NODE.JS
                    </a>
                  </h6>
                  <h5>
                    <a href="#" className="link-dark text-decoration-none">
                      Best summer reads for your vacation
                    </a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="row">
            <div className="col-md-2 d-flex justify-content-start">
              <h1>3.</h1>
            </div>
            <div className="col-md-10">
              <div className="card mb-1 border-0">
                <img
                  src="src\assets\news.jpg"
                  className="card-img-top"
                  style={{ minHeight: "200px", objectFit: "cover" }}
                  alt="..."
                />
                <div className="card-body px-1">
                  <h6 className="text-dark">
                    <a href="#" className="link-dark">
                      STARTUPS
                    </a>
                  </h6>
                  <h5>
                    <a href="#" className="link-dark text-decoration-none">
                      Best summer reads for your vacation
                    </a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
