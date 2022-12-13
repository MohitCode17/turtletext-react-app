import { useState } from "react";

const TextArea = (props) => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value)
  }

  // 👉 Working Buttons
  const handleUpper = () => {
    let upperText = text.toUpperCase();
    setText(upperText);
  }

  const handleLower = () => {
    let upperText = text.toLowerCase();
    setText(upperText);
  }

  const handleCopy = () => {
    let EditBox = document.getElementById("editBox");
    EditBox.select();
    navigator.clipboard.writeText(EditBox.value);
  }

  const RemoveExtraText = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  const RemoveText = () => {
    let text = "";
    setText(text);
  }

  return (
    <div className={`container ${props.darkMode ? "dark" : ""}`}>
      <h1 className="title">TurtleText - Format Your Text Here</h1>
      <textarea id="editBox" rows="8" value={text} className={props.darkMode ? "dark" : ""} onChange={handleChange} ></textarea>

      <div className="button">
        <button className="btn" onClick={handleUpper}>Convert to Uppercase</button>
        <button className="btn" onClick={handleLower}>Convert to Lowercase</button>
        <button className="btn" onClick={handleCopy}>Copy to Clipboard</button>
        <button className="btn" onClick={RemoveExtraText}>Remove Extra Text</button>
        <button className="btn" onClick={RemoveText}>Remove Text</button>
      </div>

      <div className="text-details">
        <h4>Analysis of Text</h4>
        <p>Words {text.split(" ").filter((word) => word.length !== 0).length} Characters {text.length}</p>

        <h4>Preview 👇</h4>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default TextArea;
