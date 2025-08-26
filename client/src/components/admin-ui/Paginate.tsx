import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../app/store";
import { updatePageNumber } from "../../slices/paginationSlice";

export default function Paginate() {
  const dispatch: AppDispatch = useDispatch();

  const { postsPerPage, currentPage, totalPosts } = useSelector(
    (store: RootState) => store.pagination
  );

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <a
              href="#"
              className="page-link link-dark"
              onClick={() => {
                if (currentPage === 1) return;
                dispatch(updatePageNumber(currentPage - 1));
              }}
            >
              Previous
            </a>
          </li>
          {pageNumbers.map((PageNumber) => (
            <li key={PageNumber} className="page-item">
              <a
                href="#"
                className={
                  currentPage === PageNumber
                    ? "page-link link-dark bg-danger"
                    : "page-link link-dark"
                }
                onClick={() => dispatch(updatePageNumber(PageNumber))}
              >
                {PageNumber}
              </a>
            </li>
          ))}
          <li className="page-item">
            <a
              href="#"
              className="page-link link-dark"
              onClick={() => {
                if (currentPage >= pageNumbers.length) return;
                dispatch(updatePageNumber(currentPage + 1));
              }}
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
