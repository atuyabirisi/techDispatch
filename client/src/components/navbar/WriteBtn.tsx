import SignUpModal from "../../modals/SignupModal";
import SignInModal from "../../modals/SignInModal";
import authModalsDispatcher from "../../utilities/authModalsActions";

export default function WriteBtn() {
  const { openLoginModal } = authModalsDispatcher();

  return (
    <div>
      <SignUpModal />
      <SignInModal />
      <button
        className="btn btn-outline-danger fw-bold"
        onClick={openLoginModal}
      >
        Write
      </button>
    </div>
  );
}
