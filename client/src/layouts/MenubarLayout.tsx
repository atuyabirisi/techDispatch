import MenuHamburger from "../components/menubar/MenuHamburger";
import MenuItems from "../components/menubar/MenuItems";
import MenuOffCanvas from "../components/mobileMenuCanvas/MobileCanvasMenu";

export default function MenubarLayout() {
  return (
    <div>
      <MenuItems />
      <MenuHamburger />
      <MenuOffCanvas />
    </div>
  );
}
