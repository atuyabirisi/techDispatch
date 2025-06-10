import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { SiFacebook } from "react-icons/si";

export default function FooterSocialMedia() {
  return (
    <div className="d-flex p-3 justify-content-center gap-3 fs-4 mb-5">
      <a href="#" className="text-dark">
        <FaXTwitter />
      </a>
      <a href="#" className="text-dark">
        <FaLinkedinIn />
      </a>
      <a href="#" className="text-dark">
        <SiFacebook />
      </a>
    </div>
  );
}
