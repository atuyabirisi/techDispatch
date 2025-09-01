import { useDispatch, useSelector } from "react-redux";
import { Modal } from "react-bootstrap";
import type { AppDispatch, RootState } from "../app/store";
import DeleteArticle from "../components/admin-ui/manage-posts/DeleteArticle";
import { closeDeleteModal } from "../slices/deleteModalSlice";

export default function DeleteModal() {
  const { isOpen } = useSelector((state: RootState) => state.deleteModal);

  const dispatch: AppDispatch = useDispatch();

  const handleClose = () => dispatch(closeDeleteModal());

  return (
    <Modal centered show={isOpen} onHide={handleClose}>
      <Modal.Body>
        <DeleteArticle />
      </Modal.Body>
    </Modal>
  );
}
