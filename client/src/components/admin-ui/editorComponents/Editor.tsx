import "../styles.css";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { initialConfig } from "./initialConfig";
import EditorToolbar from "./EditorToolbar";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { $getRoot, type EditorState } from "lexical";
import axios from "axios";

const categoryArray = [
  "CI/CD & Pipelines",
  "Docker & Containerization",
  "Cloud & Infrastructure (Azure)",
  "DevOps Practices",
];

export default function Editor() {
  const [tittle, setTittle] = useState("");

  const [file, setFile] = useState<FileList | null>(null);

  const [category, setCategory] = useState("");

  const [content, setContent] = useState("");

  const handleLexicalChange = (editorState: EditorState): void => {
    editorState.read(() => {
      const root = $getRoot();

      const text = root.getTextContent();

      setContent(text);
    });
  };

  const handleCreatePost = (e: FormEvent) => {
    e.preventDefault();

    const data = new FormData();

    data.set("tittle", tittle);

    file && data.set("cover", file[0]);

    data.set("category", category);

    data.set("content", content);

    axios
      .post("http://localhost:3000/article", data)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  };

  return (
    <form onSubmit={handleCreatePost}>
      <div className="card border-0">
        <div className="card-header border-0">
          <h5>Article Details</h5>
          <div className="mb-2">
            <label htmlFor="title" className="form-label">
              Article Title
            </label>
            <textarea
              id="title"
              name="title"
              rows={2}
              placeholder="Article title"
              className="form-control"
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                setTittle(e.target.value)
              }
            ></textarea>
          </div>
          <hr />
          <div className="mb-2 row">
            <div className="col-8">
              <label htmlFor="articleImage" className="form-label">
                Upload Article Picture
              </label>
              <input
                type="file"
                id="articleImage"
                name="articleImage"
                className="form-control"
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setFile(e.target.files);
                }}
              />
            </div>
            <div className="col-4">
              <label htmlFor="category" className="form-label">
                Category
              </label>
              <select
                className="form-control"
                id="client"
                onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                  setCategory(e.target.value);
                }}
              >
                <option value=""></option>
                {categoryArray.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="card-body border rounded mb-2">
        <LexicalComposer initialConfig={initialConfig}>
          <EditorToolbar />
          <div style={{ maxHeight: "60vh", overflowY: "scroll" }}>
            <RichTextPlugin
              contentEditable={
                <ContentEditable
                  aria-placeholder="Enter some text..."
                  className="contentEditable"
                  tabIndex={-1}
                  placeholder={<div className="px-1 editorPlaceHolder"></div>}
                />
              }
              ErrorBoundary={LexicalErrorBoundary}
            />
          </div>
          <HistoryPlugin />
          <OnChangePlugin onChange={handleLexicalChange} />
        </LexicalComposer>
      </div>
      <div className="card-footer d-flex gap-2 justify-content-end">
        <button className="btn btn-secondary">Save for Later</button>
        <button className="btn btn-danger" type="submit">
          Publish Article
        </button>
      </div>
    </form>
  );
}
