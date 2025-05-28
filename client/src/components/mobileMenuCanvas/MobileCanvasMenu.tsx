import { Offcanvas } from "react-bootstrap";
import MenuItemsCanvas from "./MenuItemsCanvas";
import { closeMenu } from "../../slices/menuToggleSlice";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../app/store";

export default function MenuOffCanvas() {
  const { isOpen } = useSelector((store: RootState) => store.mobileMenuCanvas);

  const dispatch: AppDispatch = useDispatch();
  const handleClose = () => dispatch(closeMenu());

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
        <MenuItemsCanvas />
      </Offcanvas.Body>
    </Offcanvas>
  );
}
