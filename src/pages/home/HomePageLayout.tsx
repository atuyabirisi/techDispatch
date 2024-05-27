import EditorPick from "../../components/editorspick/EditorsPick";
import FooterLayout from "../../components/footer/FooterLayout";
import FooterLogo from "../../components/footer/FooterLogo";
import HerosectionLayout from "../../components/herosection/HerosectionLayout";
import LogosectionLayout from "../../components/logosection/LogosetionLayout";
import MenuHumbuger from "../../components/navigationmenu/MenuHumbuger";
import MenuItems from "../../components/navigationmenu/MenuItems";
import MenuOffCanvas from "../../components/navigationmenu/MenuOffcanvas";
import WebSecurity from "../../components/websecurity/WebSecurity";

export default function HomepageLayout() {
  return (
    <div className="mx-1 mx-md-2">
      <LogosectionLayout />
      <MenuItems />
      <MenuHumbuger />
      <MenuOffCanvas />
      <HerosectionLayout />
      <WebSecurity />
      <EditorPick />
      <FooterLayout />
    </div>
  );
}
