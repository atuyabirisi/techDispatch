import Editor from "./Editor";

export default function EditorContainer() {
  return (
    <div
      className="bg-light p-2 pb-4 border border-success rounded m-1"
      style={{ maxHeight: "75vh", overflowY: "scroll" }}
    >
      <Editor />
    </div>
  );
}
