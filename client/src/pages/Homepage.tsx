import PipelinesStories from "../components/pipelinesSection/PipelinesStories";
import HeroLayout from "../layouts/HeroLayout";
import CloudNativeInfrastructure from "../components/cloudNativeSection/CloudNativeInfrastructure";
import GenericPageWrapper from "./GenericPageWrapper";

export default function HomePage() {
  return (
    <main className="mx-1 overflow-hidden">
      <GenericPageWrapper>
        <HeroLayout />
        <PipelinesStories />
        <CloudNativeInfrastructure />
      </GenericPageWrapper>
    </main>
  );
}
