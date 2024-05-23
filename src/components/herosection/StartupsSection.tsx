export default function StartupsSection() {
  return (
    <>
      <div className="card mt-5 border-bottom-0">
        <img src="src\assets\blog.jpg" alt="techDispatch_headquaters" />
        <div className="card-body">
          <div className="py-2 d-flex justify-content-between border-bottom">
            <small className="text-dark py-1">
              <a href="#" className="text-danger text-decoration-none">
                STARTUPS
              </a>
            </small>
            <small className="text-dark">{Date.now()}</small>
          </div>
          <div className="text-dark py-1">
            <h4>
              <a href="#" className="text-dark text-decoration-none">
                Using redux state & actions in react components
              </a>
            </h4>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Blanditiis sint, cumque veniam
              magnam consectetur voluptate, recusandae beatae aut ut vero vitae,
              sed alias expedita reiciendis quos officia quo facilis eum.
              Maiores, incidunt.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
