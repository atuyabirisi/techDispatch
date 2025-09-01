import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../app/store";
import { closeDeleteModal } from "../../../slices/deleteModalSlice";
import axios from "axios";
import type { deleteArticleSchema } from "../../../zodSchemas/deleteArticleSchema";
import { useForm, type FieldValues } from "react-hook-form";
import { useState } from "react";
import type z from "zod";

export default function DeleteArticle() {
  const dispatch: AppDispatch = useDispatch();

  const { articleId } = useSelector((store: RootState) => store.deleteModal);

  type DeleteArticleSchema = z.infer<typeof deleteArticleSchema>;

  const { register, handleSubmit } = useForm<DeleteArticleSchema>();

  const [error, setError] = useState("");

  const onSubmit = ({ article_id }: FieldValues) => {
    if (articleId === article_id) {
      axios
        .delete(`http://localhost:3000/article/${articleId}`)
        .then((_response) => {
          dispatch(closeDeleteModal());
        })
        .catch((error) => setError(error.message));
    } else {
      setError("Article ID does not match");
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-center">
        <p className="text-center">
          Confirm deletion by <br /> entering the Id{" "}
          <span className="text-danger">{articleId}</span> Below
        </p>
      </div>
      {error && (
        <div className="d-flex justify-content-center">
          <h6 className="text-danger">{error}</h6>
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          id="article_id"
          type="text"
          className="form-control"
          {...register("article_id")}
        />
        <div className="d-flex justify-content-end gap-2 mt-3">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => dispatch(closeDeleteModal())}
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-danger">
            Delete
          </button>
        </div>
      </form>
    </div>
  );
}
