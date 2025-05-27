import ActionButtons from "../components/navbar/ActionButtons";
import BrandLogo from "../components/navbar/BrandLogo";
import NavbarSearch from "../components/navbar/NavbarSearch";

export default function NavbarLayout() {
  return (
    <nav className="row border-bottom py-5" aria-label="navigation bar">
      <div className="col-lg-4 d-none d-lg-flex align-items-center justify-content-center">
        <NavbarSearch />
      </div>
      <div className="col-lg-4 d-flex justify-content-center">
        <BrandLogo />
      </div>
      <div className="col-lg-4 d-none d-lg-flex justify-content-center align-items-center">
        <ActionButtons />
      </div>
    </nav>
  );
}
