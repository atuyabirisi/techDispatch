import useData from "../../../hooks/useData";
import type { Post } from "../../../interfaces/types";
import giveFirstFortyWords from "../../../utilities/giveFirstFortyWords";
import CardListingPlaceholder from "../../placeholder/CardListingPlaceholder";

export default function ViewAllCloudNative() {
  const { data, isLoading } = useData<Post[]>("/cloud_native");

  const imageUrl = import.meta.env.VITE_UPLOADS_URL;

  const pArray = [1, 2, 3, 4];

  return (
    <>
      {isLoading
        ? pArray.map((item) => <CardListingPlaceholder key={item} />)
        : data
        ? data?.map((item, idx) => (
            <div className="container my-4 py-2" key={idx}>
              <div className="card w-100 border-0 shadow-sm">
                <div className="row g-0 align-items-stretch">
                  <div className="col-md-4">
                    <img
                      src={`${imageUrl}/${item.cover}`}
                      className="img-fluid w-100 h-100 rounded"
                      style={{ objectFit: "cover" }}
                      alt="Card image"
                    />
                  </div>

                  <div className="col-md-8">
                    <div className="card-body h-100 d-flex flex-column">
                      <h5 className="card-title mb-2 fw-semibold">
                        <a
                          href={`/article/${item._id}`}
                          className="link-dark text-decoration-none"
                          onClick={() => {
                            localStorage.setItem("activeStoryId", item._id);
                          }}
                        >
                          {item.tittle}
                        </a>{" "}
                      </h5>
                      <p className="card-text mb-3">
                        {giveFirstFortyWords(item.content)} {"..."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        : null}
    </>
  );
}
