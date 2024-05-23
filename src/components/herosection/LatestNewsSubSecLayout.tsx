import LatestNews from "./LatestNews";
import Podcast from "./Podcast";

export default function LatestNewSubsecLayout() {
  return (
    <>
      <div>
        <Podcast />
      </div>
      <div className="mt-5">
        <LatestNews />
      </div>
    </>
  );
}
