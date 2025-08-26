import {
  FcMakeDecision,
  FcWorkflow,
  FcServices,
  FcAdvance,
  FcInfo,
} from "react-icons/fc";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../../app/store";
import {
  manageArticlesScreen,
  showEditor,
} from "../../../slices/adminDashScreens";

const navItems = [
  { icon: <FcMakeDecision />, label: "Editor", href: "#" },
  { icon: <FcWorkflow />, label: "Manage Posts", href: "#" },
  { icon: <FcInfo />, label: "Notifications", href: "#" },
  { icon: <FcServices />, label: "Settings", href: "#" },
  { icon: <FcAdvance />, label: "Log out", href: "#" },
];

export default function Sidepanel() {
  const dispatch: AppDispatch = useDispatch();

  const manageArticles = () => dispatch(manageArticlesScreen());
  const showEditorScreen = () => dispatch(showEditor());

  const handleClick = (label: string) => {
    label == "Editor"
      ? showEditorScreen()
      : label == "Manage Posts"
      ? manageArticles()
      : showEditorScreen();
  };

  return (
    <div>
      <h5 className="m-0 py-2 px-4">Admin Dashboard</h5>
      <ul className="list-group rounded-0">
        {navItems.map(({ icon, label, href }) => (
          <li
            key={label}
            className="list-group-item border-0"
            onClick={() => {
              handleClick(label);
            }}
          >
            <a
              href={href}
              className="d-flex align-items-center gap-3 text-decoration-none"
            >
              {icon}
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
