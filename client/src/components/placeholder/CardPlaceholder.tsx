  export default function CardPlaceholder() {
    return(
    <div className="card border-0 my-4" aria-hidden="true">
      <div className="card-img-top bg-secondary" style={{ height: 200, opacity: 0.2 }} />
      <div className="card-body">
        <div className="d-flex py-1 my-1 justify-content-between border-bottom">
          <small className="bg-secondary rounded" style={{ width: 60, height: 10, display: "inline-block", opacity: 0.2 }} />
          <small className="bg-secondary rounded" style={{ width: 80, height: 10, display: "inline-block", opacity: 0.2 }} />
        </div>
        <div className="py-2">
          <div className="bg-secondary rounded" style={{ width: "80%", height: 20, opacity: 0.2 }} />
        </div>
        <div className="bg-secondary rounded" style={{ width: "100%", height: 40, opacity: 0.2 }} />
      </div>
    </div>
    )
  } 