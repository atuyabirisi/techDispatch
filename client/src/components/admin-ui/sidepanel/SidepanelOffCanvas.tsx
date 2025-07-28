import { Offcanvas } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { closeSidepanel } from "../../../slices/toggleSidepanel1";
import type { AppDispatch, RootState } from "../../../app/store";
import Sidepanel from "./Sidepanel";

export default function SidepanelOffCanvas() {
  const { isOpen } = useSelector((store: RootState) => store.sidepanelCanvas);

  const dispatch: AppDispatch = useDispatch();
  const handleClose = () => dispatch(closeSidepanel());

  return (
    <Offcanvas
      placement={"start"}
      aria-labelledby="mobile-menu-title"
      show={isOpen}
      onHide={handleClose}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="mobile-menu-title"></Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Sidepanel />
      </Offcanvas.Body>
    </Offcanvas>
  );
}
