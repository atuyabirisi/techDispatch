import FooterBanner from "./FooterBanner";
import FooterLogo from "./FooterLogo";
import FooterMenu from "./FooterMenu";
import SocialMedia from "./SocialMedia";

export default function FooterLayout() {
  return (
    <div className="p-2" style={{ backgroundColor: "wheat" }}>
      <FooterLogo />
      <SocialMedia />
      <FooterMenu />
      <FooterBanner />
    </div>
  );
}
