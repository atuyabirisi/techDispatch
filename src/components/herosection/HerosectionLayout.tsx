import LatestNewSectionLayout from "./LatestNewsSubSecLayout";
import Podcast from "./Podcast";
import PolicyGovSection from "./PolicyGovSection";
import StartupsSectionLayout from "./StartupsSection";

export default function HerosectionLayout() {
  return (
    <div className="row">
      <div className="col-lg-4 pt-3">
        <LatestNewSectionLayout />
      </div>
      <div className="col-lg-4">
        <StartupsSectionLayout />
      </div>
      <div className="col-lg-4">
        <PolicyGovSection />
      </div>
    </div>
  );
}
