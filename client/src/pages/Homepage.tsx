import PipelinesStories from "../components/pipelinesSection/PipelinesStories";
import HeroLayout from "../layouts/HeroLayout";
import MenubarLayout from "../layouts/MenubarLayout";
import NavbarLayout from "../layouts/NavbarLayout";
import CloudNativeInfrastructure from "../components/cloudNativeSection/CloudNativeInfrastructure";
import SubscribeLayout from "../layouts/SubscribeLayout";
import FooterLayout from "../layouts/FooterLayout";

export default function HomePage() {
  return (
    <main className="mx-1 overflow-hidden">
      <NavbarLayout />
      <MenubarLayout />
      <HeroLayout />
      <PipelinesStories />
      <CloudNativeInfrastructure />
      <SubscribeLayout />
      <FooterLayout />
    </main>
  );
}
