import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import SignIn from "../components/authentication/SignIn";
import type { AppDispatch, RootState } from "../app/store";
import { closeSignInModal } from "../slices/signInModalSlice";

export default function SignInModal() {
  const { isOpen } = useSelector((state: RootState) => state.signInModal);

  const dispatch: AppDispatch = useDispatch();

  const handleClose = () => dispatch(closeSignInModal());

  return (
    <Modal centered show={isOpen} onHide={handleClose}>
      <Modal.Body>
        <SignIn />
      </Modal.Body>
    </Modal>
  );
}
