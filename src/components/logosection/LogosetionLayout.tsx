import Logo from "./Logo";
import LogosectionBtns from "./LogosectionBtns";
import SearchInput from "./SearchInput";

export default function LogosectionLayout() {
  return (
    <div className="row py-5 border-bottom">
      <div className="col-lg-4 d-none d-lg-flex">
        <SearchInput />
      </div>
      <div className="col-lg-4">
        <Logo />
      </div>
      <div className="col-lg-4 d-none d-lg-flex">
        <LogosectionBtns />
      </div>
    </div>
  );
}
