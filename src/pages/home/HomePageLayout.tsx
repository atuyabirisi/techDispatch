import EditorPick from "../../components/editorspick/EditorsPick";
import FooterLayout from "../../components/footer/FooterLayout";
import FooterLogo from "../../components/footer/FooterLogo";
import HerosectionLayout from "../../components/herosection/HerosectionLayout";
import LogosectionLayout from "../../components/logosection/LogosetionLayout";
import MenuItems from "../../components/navigationmenu/MenuItems";
import WebSecurity from "../../components/websecurity/WebSecurity";

export default function HomepageLayout() {
  return (
    <div className="mx-1 mx-md-2">
      <LogosectionLayout />
      <MenuItems />
      <HerosectionLayout />
      <WebSecurity />
      <EditorPick />
      <FooterLayout />
    </div>
  );
}
