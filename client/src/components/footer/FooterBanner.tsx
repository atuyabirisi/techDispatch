import { AiOutlineCopyrightCircle } from "react-icons/ai";

function FooterBanner() {
  return (
    <footer className="border-top py-3">
      <div className="container">
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3">
          <small className="mb-2 mb-md-0 d-flex align-items-center gap-1">
            <AiOutlineCopyrightCircle />
            <span>techDispatch 2025</span>
          </small>
          <small>All rights reserved</small>
        </div>
      </div>
    </footer>
  );
}

export default FooterBanner;
