import { Offcanvas } from "react-bootstrap";
import MenuItemsCanvas from "./MenuItemsCanvas";

export default function MenuOffCanvas() {
  return (
    <Offcanvas placement={"start"} aria-labelledby="mobile-menu-title">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="mobile-menu-title">Menu</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <MenuItemsCanvas />
      </Offcanvas.Body>
    </Offcanvas>
  );
}
