import HerosectionLayout from "../../components/herosection/HerosectionLayout";
import LogosectionLayout from "../../components/logosection/LogosetionLayout";
import MenuItems from "../../components/navigationmenu/MenuItems";

export default function HomepageLayout() {
  return (
    <div className="mx-3">
      <LogosectionLayout />
      <MenuItems />
      <HerosectionLayout />
    </div>
  );
}
