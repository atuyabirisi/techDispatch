import BottomFooter from "./BottomFooter";
import FooterLogo from "./FooterLogo";
import FooterMenu from "./FooterMenu";
import SocialMedia from "./SocialMedia";

export default function FooterLayout() {
  return (
    <div className="px-lg-2 py-2" style={{ backgroundColor: "wheat" }}>
      <FooterLogo />
      <SocialMedia />
      <FooterMenu />
      <BottomFooter />
    </div>
  );
}
