import { RiMenuUnfoldFill } from "react-icons/ri";
import { LiaSearchSolid } from "react-icons/lia";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { openMenuCanvas } from "../../slices/menuCanvas";

export default function MenuHumbuger() {
  const dispatch: AppDispatch = useDispatch();
  const openMenu = () => dispatch(openMenuCanvas());

  return (
    <div className="fs-3 py-3 border-bottom d-md-none">
      <div className="p-4 d-flex align-items-center justify-content-between">
        <LiaSearchSolid />
        <RiMenuUnfoldFill onClick={openMenu} />
      </div>
    </div>
  );
}
