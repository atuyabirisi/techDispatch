import { format } from "date-fns";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img from "../../../public/assets/subscribeBackground.jpg";
import apiClient from "../../utilities/apiClient";
import { type Comment } from "../../interfaces/types";

export default function CommentSection() {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    apiClient
      .get("/comment")
      .then((res) => {
        setComments(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div
        className="card border-0 my-3"
        style={{ maxWidth: "85%", margin: "auto" }}
      >
        {
          <div className="p-1">
            <h4>Comments</h4>
          </div>
        }
        <ul className="list-group">
          {comments.map((comment, index) => (
            <div className="card-header" key={index}>
              <div className="d-flex gap-3 align-items-center px-3">
                <div
                  className="bg-warning rounded-lg"
                  style={{
                    height: "50px",
                    width: "50px",
                    overflow: "hidden",
                    borderRadius: "50%",
                  }}
                >
                  <Link to="/profile">
                    {" "}
                    <img
                      src={img}
                      alt="profile pic"
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Link>
                </div>
                <div className="text-black">
                  <div className="d-flex gap-3 align-items-start">
                    <h6>Author :-</h6>
                    <small>
                      <Link to="/profile" className="text-dark">
                        <span className="text-black">{comment.commenter}</span>
                      </Link>
                    </small>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <h6>{comment.comment}</h6>
              </div>
              <div className="card-footer">
                <div>
                  <h6>{format(comment.createdAt, "MMM dd HH:MM")}</h6>
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}
