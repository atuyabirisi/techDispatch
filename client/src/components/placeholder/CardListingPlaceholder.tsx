export default function CardListingPlaceholder() {
  return (
    <div className="container my-4">
      <div className="card w-100">
        <div className="row g-0 align-items-stretch">
          <div className="col-md-4">
            <div
              className="w-100 h-100 bg-secondary placeholder"
              style={{ minHeight: "200px" }}
            ></div>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title placeholder-glow">
                <span className="placeholder col-6"></span>
              </h5>
              <p className="card-text placeholder-glow">
                <span className="placeholder col-7"></span>
                <span className="placeholder col-4"></span>
                <span className="placeholder col-4"></span>
                <span className="placeholder col-6"></span>
                <span className="placeholder col-8"></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
