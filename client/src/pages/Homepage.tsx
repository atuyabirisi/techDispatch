import PipelinesStories from "../pipelinesSection/PipelinesStories";
import HeroLayout from "../layouts/HeroLayout";
import MenubarLayout from "../layouts/MenubarLayout";
import NavbarLayout from "../layouts/NavbarLayout";
import CloudNativeInfrastructure from "../cloudNativeSection/CloudNativeInfrastructure";

export default function HomePage() {
  return (
    <main className="mx-1 overflow-hidden">
      <NavbarLayout />
      <MenubarLayout />
      <HeroLayout />
      <PipelinesStories />
      <CloudNativeInfrastructure />
    </main>
  );
}
