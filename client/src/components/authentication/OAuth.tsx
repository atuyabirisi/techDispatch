import { AiFillGoogleCircle } from "react-icons/ai";

export default function OAuth() {
  return (
    <div className="d-grid">
      <button
        className="btn btn-danger d-flex gap-3 align-items-center justify-content-center text-dark fw-bold"
        type="button"
      >
        <AiFillGoogleCircle />
        Continue with Goggle
      </button>
    </div>
  );
}
