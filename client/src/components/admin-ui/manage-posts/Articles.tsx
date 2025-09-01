import { AiFillDelete } from "react-icons/ai";
import { RiEdit2Fill } from "react-icons/ri";
import { format } from "date-fns";
import { useArticles } from "../../../hooks/useArticles";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../app/store";
import { usePagination } from "../../../utilities/usePagination";
import Paginate from "./Paginate";
import { openDeleteModal } from "../../../slices/deleteModalSlice";
import DeleteModal from "../../../modals/DeleteModal";

export default function AllArticles() {
  const { articles } = useArticles();

  const dispatch: AppDispatch = useDispatch();

  const { currentPage, postsPerPage } = useSelector(
    (store: RootState) => store.pagination
  );
  const paginatedArticles = usePagination(articles, postsPerPage, currentPage);

  return (
    <>
      <DeleteModal />
      <div className="card mb-1" style={{ maxHeight: "400px" }}>
        <div className="card-body p-0">
          <table className="table">
            <thead className="sticky-top table-active">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Tittle</th>
                <th scope="col">Category</th>
                <th scope="col">UpdatedAt</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedArticles.map((article, index) => (
                <tr key={index}>
                  <td>{article._id}</td>
                  <td>{article.tittle}</td>
                  <td>{article.category.toUpperCase()}</td>
                  <td>
                    {format(new Date(article.updatedAt), "MMM d, yyyy HH:mm")}
                  </td>
                  <td>
                    <div className="d-flex gap-2">
                      <div>
                        <a
                          href="#"
                          className="link-danger fs-5"
                          //   onClick={() => {
                          //     dispatch(openPickArticle());
                          //     dispatch(setViewArticleToPick(article));
                          //   }}
                        >
                          <RiEdit2Fill />
                        </a>
                      </div>
                      <div>
                        <a
                          href="#"
                          className="link-danger fs-5"
                          onClick={() => {
                            console.log(article._id);
                            dispatch(openDeleteModal(article._id));
                          }}
                        >
                          <AiFillDelete />
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="d-flex justify-content-end">
        <Paginate />
      </div>
    </>
  );
}
