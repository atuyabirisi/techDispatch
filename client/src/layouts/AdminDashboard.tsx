import { useDispatch } from "react-redux";
import EditorContainer from "../components/admin-ui/editorComponents/EditorContainer";
import Sidepanel from "../components/admin-ui/sidepanel/Sidepanel";
import BrandLogo from "../components/navbar/BrandLogo";
import { TiThMenu } from "react-icons/ti";
import type { AppDispatch } from "../app/store";
import SidepanelOffCanvas from "../components/admin-ui/sidepanel/SidepanelOffCanvas";
import { openSidepanel } from "../slices/toggleSidepanel1";

export default function AdminDashboard() {
  const dispatch: AppDispatch = useDispatch();

  const handleOpenSidepanel = () => {
    dispatch(openSidepanel());
  };

  return (
    <div style={{ maxHeight: "100vh", overflowY: "hidden" }}>
      <nav
        className="d-flex justify-content-center border-bottom py-5"
        aria-label="navigation bar"
      >
        <BrandLogo />
      </nav>
      <div
        className="d-flex d-lg-none justify-content-end"
        style={{ fontSize: "24px" }}
      >
        <button
          type="button"
          aria-label="toggle menu"
          className="btn p-0"
          onClick={handleOpenSidepanel}
        >
          <TiThMenu size={32} />
        </button>
      </div>
      <div className="row">
        <SidepanelOffCanvas />
        <div className="col-3 d-none d-lg-block">
          <Sidepanel />
        </div>
        <div className="col-lg-8 bg-light">
          <EditorContainer />
        </div>
      </div>
    </div>
  );
}
