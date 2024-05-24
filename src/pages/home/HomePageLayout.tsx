import EditorPick from "../../components/editorspick/EditorsPick";
import HerosectionLayout from "../../components/herosection/HerosectionLayout";
import LogosectionLayout from "../../components/logosection/LogosetionLayout";
import MenuItems from "../../components/navigationmenu/MenuItems";
import WebSecurity from "../../components/websecurity/WebSecurity";

export default function HomepageLayout() {
  return (
    <div className="mx-3">
      <LogosectionLayout />
      <MenuItems />
      <HerosectionLayout />
      <WebSecurity />
      <EditorPick />
    </div>
  );
}
