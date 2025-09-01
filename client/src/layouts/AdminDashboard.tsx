import { useDispatch, useSelector } from "react-redux";
import EditorContainer from "../components/admin-ui/editorComponents/EditorContainer";
import Sidepanel from "../components/admin-ui/sidepanel/Sidepanel";
import BrandLogo from "../components/navbar/BrandLogo";
import { TiThMenu } from "react-icons/ti";
import type { AppDispatch, RootState } from "../app/store";
import SidepanelOffCanvas from "../components/admin-ui/sidepanel/SidepanelOffCanvas";
import { openSidepanel } from "../slices/toggleSidepanel1";
import AllArticles from "../components/admin-ui/manage-posts/Articles";

export default function AdminDashboard() {
  const dispatch: AppDispatch = useDispatch();

  const { adminScreenState } = useSelector(
    (state: RootState) => state.adminDashScreen
  );

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
          {adminScreenState == 1 && <EditorContainer />}
          {adminScreenState == 2 && <AllArticles />}
        </div>
      </div>
    </div>
  );
}
