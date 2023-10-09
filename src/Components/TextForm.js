import React, { useState } from "react";

export default function TextForm(props) {

  const handleUpClick = () => {
    console.log("Upper case was clicked" + { text });
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(" text converted to upper case","success")
  };

  const handleLowClick = () => {
    console.log("Upper case was clicked" + { text });
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(" text converted to lower case","success")
  };

  const handleOnhange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text here");
  return (
    <>
      <div className="container my-3">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleOnhange}
            rows="3"
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary mx1"
          onClick={handleUpClick}
        >
          Convert To Upper case
        </button>
        <button
          type="submit"
          className="btn btn-primary mx-1"
          onClick={handleLowClick}
        >
          Convert To Lower case
        </button>
      </div>

      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length}  words {text.length} chararcer</p>
        <p>{0.008 * text.split(" ").length } required to read the whole text</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
