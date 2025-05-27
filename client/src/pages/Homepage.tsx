import MenubarLayout from "../layouts/MenubarLayout";
import NavbarLayout from "../layouts/NavbarLayout";

export default function HomePage() {
  return (
    <main className="mx-1">
      <NavbarLayout />
      <MenubarLayout />
    </main>
  );
}
