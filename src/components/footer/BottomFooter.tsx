import { AiOutlineCopyrightCircle } from "react-icons/ai";

export default function BottomFooter() {
  return (
    <div className=" p-2 border-top">
      <div className="d-flex justify-content-center align-items-center gap-5">
        <div>
          <AiOutlineCopyrightCircle />
          <small>techDispatch@2024</small>
        </div>
        <small>All rights reserved</small>
      </div>
    </div>
  );
}
