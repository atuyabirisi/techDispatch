import { RiMenuUnfoldFill } from "react-icons/ri";
import { LiaSearchSolid } from "react-icons/lia";
import { openMenu } from "../../slices/menuToggleSlice";
import type { AppDispatch } from "../../app/store";
import { useDispatch } from "react-redux";

export default function MenuHamburger() {
  const dispatch: AppDispatch = useDispatch();
  const handleOpenMenu = () => dispatch(openMenu());

  return (
    <div className="fs-3 py-3 border-bottom d-md-none">
      <div className="p-4 d-flex align-items-center justify-content-between">
        <button type="button" aria-label="open search" className="btn p-0">
          <LiaSearchSolid size={32} />
        </button>
        <button
          type="button"
          aria-label="toggle menu"
          className="btn p-0"
          onClick={handleOpenMenu}
        >
          <RiMenuUnfoldFill size={32} />
        </button>
      </div>
    </div>
  );
}
