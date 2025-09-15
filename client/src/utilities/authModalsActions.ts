import { useDispatch } from "react-redux";
import type { AppDispatch } from "../app/store";
import { closeSignUpModal, openSignUpModal } from "../slices/signUpModalSlice";
import { closeSignInModal, openSignInModal } from "../slices/signInModalSlice";

export default function authModalsDispatcher() {
  const dispatch: AppDispatch = useDispatch();

  const openLoginModal = () => {
    dispatch(closeSignUpModal());
    dispatch(openSignInModal());
  };
  const registerUserModal = () => {
    dispatch(closeSignInModal());
    dispatch(openSignUpModal());
  };
  return { openLoginModal, registerUserModal };
}
