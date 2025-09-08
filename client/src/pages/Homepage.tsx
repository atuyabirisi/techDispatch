import HeroLayout from "../layouts/HeroLayout";
import CloudNativeInfrastructure from "../components/cloudNativeSection/CloudNativeInfrastructure";
import GenericPageWrapper from "./GenericPageWrapper";
import CICDArticles from "../components/cicd-section/CICDArticles";

export default function HomePage() {
  return (
    <main className="mx-1 overflow-hidden">
      <GenericPageWrapper>
        <HeroLayout />
        <CICDArticles />
        <CloudNativeInfrastructure />
      </GenericPageWrapper>
    </main>
  );
}
