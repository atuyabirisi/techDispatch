import { BsHeadphones } from "react-icons/bs";

export default function Podcast() {
  return (
    <>
      <div className="mb-3 py-1 d-flex gap-3 align-items-center">
        <BsHeadphones />
        <small>Podcast episodes</small>
      </div>
      <div>
        <h3>
          The Tech Minute: Which asset is set to dominate the next decade?
        </h3>
      </div>
      <div className="mt-4 d-flex align-items-center">
        <audio src="" controls></audio>
      </div>
    </>
  );
}
