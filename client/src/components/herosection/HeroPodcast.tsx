import { BsHeadphones } from "react-icons/bs";

export default function HeroPodcast() {
  return (
    <section>
      <header className="d-flex align-items-center mb-3 gap-3 py-1">
        <BsHeadphones />
        <div className="d-flex align-items-center">Podcast episodes</div>
      </header>

      <h3 className="fw-bold">
        The Tech Minute: Which asset is set to dominate the next decade?
      </h3>

      <div className="mt-4 d-flex align-items-center">
        <audio src="#" controls />
      </div>
    </section>
  );
}
