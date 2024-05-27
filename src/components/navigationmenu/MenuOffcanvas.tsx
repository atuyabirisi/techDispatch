import { Offcanvas } from "react-bootstrap";
import MenuCanvasItems from "./MenuCanvasItems";
import { AppDispatch, RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { closeMenuCanvas } from "../../slices/menuCanvas";

export default function MenuOffCanvas() {
  const { isOpen } = useSelector((store: RootState) => store.menuCanvas);
  const dispatch: AppDispatch = useDispatch();

  const closeMenuOffCanvas = () => dispatch(closeMenuCanvas());

  return (
    <Offcanvas placement={"start"} show={isOpen} onHide={closeMenuOffCanvas}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title></Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <MenuCanvasItems />
      </Offcanvas.Body>
    </Offcanvas>
  );
}
