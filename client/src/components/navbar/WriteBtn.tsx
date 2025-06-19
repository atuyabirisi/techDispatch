import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../app/store";
import SignUpModal from "../../modals/SignupModal";
import { openSignUpModal } from "../../slices/signUpModalSlice";
import SignInModal from "../../modals/SignInModal";

export default function WriteBtn(){
    const dispatch: AppDispatch = useDispatch();

    const handleInitiateAuthentication = () => dispatch(openSignUpModal());

    return (
        <div>
            <SignUpModal />
            <SignInModal />
            <button className="btn btn-outline-danger fw-bold" onClick={handleInitiateAuthentication}>Write</button>
        </div>
    )
}