import { FORMAT_TEXT_COMMAND } from "lexical";

import { FaBold, FaItalic, FaUnderline, FaCode } from "react-icons/fa";

import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

export default function EditorToolbar() {
  const [editor] = useLexicalComposerContext();

  const formatText = (format: "bold" | "italic" | "underline" | "code") => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, format);
  };

  return (
    <div className="card-header">
      <div className="d-flex gap-2 flex-wrap">
        <button className="btn btn-light" onClick={() => formatText("bold")}>
          <FaBold />
        </button>
        <button className="btn btn-light" onClick={() => formatText("italic")}>
          <FaItalic />
        </button>
        <button
          className="btn btn-light"
          onClick={() => formatText("underline")}
        >
          <FaUnderline />
        </button>
        <button className="btn btn-light" onClick={() => formatText("code")}>
          <FaCode />
        </button>
      </div>
    </div>
  );
}
