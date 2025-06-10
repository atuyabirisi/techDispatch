import FooterBanner from "../components/footer/FooterBanner";
import FooterLogo from "../components/footer/FooterLogo";
import FooterMenu from "../components/footer/FooterMenu";
import FooterSocialMedia from "../components/footer/FooterSocialMedia";

export default function FooterLayout() {
  return (
    <div className="p-1" style={{ backgroundColor: "wheat" }}>
      <FooterLogo />
      <FooterSocialMedia />
      <FooterMenu />
      <FooterBanner />
    </div>
  );
}
