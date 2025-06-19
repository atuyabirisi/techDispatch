import { useDispatch, useSelector } from "react-redux";
import { Modal } from "react-bootstrap";
import type { AppDispatch, RootState } from "../app/store";
import { closeSignUpModal } from "../slices/signUpModalSlice";
import SignUp from "../components/authentication/SignUp";

export default function SignUpModal() {
  const { isOpen } = useSelector((state: RootState) => state.signUpModal);

  const dispatch: AppDispatch = useDispatch();

  const handleClose = () => dispatch(closeSignUpModal());

  return (
    <Modal centered show={isOpen} onHide={handleClose}>
      <Modal.Body>
        <SignUp />
      </Modal.Body>
    </Modal>
  );
}

