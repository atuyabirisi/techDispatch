export default function LatestNews() {
  return (
    <>
      <div className="card border-0">
        <img src="src\assets\news.jpg" alt="bitcoin" />
        <div className="card-body">
          <div className="d-flex justify-content-between my-1 border-bottom py-1">
            <small>
              <a href="#" className="text-danger text-decoration-none">
                NEW
              </a>
            </small>
            <small className="text-dark">{Date.now()}</small>
          </div>
          <div className="py-2">
            <h5>
              <a href="#" className="text-dark text-decoration-none">
                Bitcoin or Nvidia: Which asset is set to dominate the next
                decade?
              </a>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}
