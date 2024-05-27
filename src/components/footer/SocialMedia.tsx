import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { SiFacebook } from "react-icons/si";

export default function SocialMedia() {
  return (
    <div className="p-3 fs-4 mb-3 d-flex gap-3 justify-content-center">
      <a href="#" className="text-dark">
        <FaXTwitter />
      </a>
      <a href="#" className="link-primary">
        <FaLinkedinIn />
      </a>
      <a href="#" className="link-primary">
        <SiFacebook />
      </a>
    </div>
  );
}
