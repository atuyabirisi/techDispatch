import HeroSectionSubStories from "../components/herosection/HeroSubStories";
import HeroPodcast from "../components/herosection/HeroPodcast";
import HeroMainStory from "../components/herosection/HeroMainStory";
import HeroTrendingList from "../components/herosection/HeroTrendingList";

export default function HeroSectionLayout() {
  return (
    <div className="row mt-2 py-2">
      <div className="col-md-6 col-lg-4">
        <HeroPodcast />
        <div className="mt-5">
          <HeroTrendingList />
        </div>
      </div>
      <div className="col-md-6 col-lg-4 mt-5">
        <HeroMainStory />
      </div>
      <div className="col-md-12 col-lg-4 mt-5">
        <HeroSectionSubStories />
      </div>
    </div>
  );
}
