import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState(""); // default text value
  const toUpperText = () => {
    let upText = text.toUpperCase();
    setText(upText);
    props.showAlert("Converted To Uppercase", "success");
  };
  const toLowerText = () => {
    let loText = text.toLowerCase();
    setText(loText);
    props.showAlert("Converted To Lowercase", "success");
  };
  const removeExtraSpaces = () => {
    let newText = text.replace(/\s+/g, " ").trim();
    props.showAlert("Extra Spaces Removed", "success");
    setText(newText);
  };
  const toTrimText = () => {
    let trimText = text.trim();
    setText(trimText);
    props.showAlert("Spaces at Ends Removed", "success");
  };
  const clearText = () => {
    setText("");
    props.showAlert("Text Cleared", "success");
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container text-center"
        style={{
          color: props.mode == "light" ? "black" : "white",
        }}
      >
        <h1>{props.heading}</h1>
        <form>
          <div className="mb-3">
            <textarea
              className="form-control"
              value={text}
              style={{
                backgroundColor: props.mode == "light" ? "white" : "black",
                color: props.mode == "light" ? "black" : "white",
              }}
              id="myBox"
              rows={12}
              placeholder="Enter Text Here"
              onChange={handleChange}
            ></textarea>
            <button
              className="btn btn-primary mx-2 my-1"
              type="button"
              onClick={toUpperText}
            >
              Uppercase
            </button>
            <button
              className="btn btn-primary mx-2 my-1"
              type="button"
              onClick={toLowerText}
            >
              Lowercase
            </button>
            <button
              className="btn btn-primary mx-2 my-1"
              type="button"
              onClick={removeExtraSpaces}
            >
              Remove Extra Spaces
            </button>
            <button
              className="btn btn-primary mx-2 my-1"
              type="button"
              onClick={toTrimText}
            >
              Remove spaces at ends
            </button>
            <button
              className="btn btn-danger mx-2 my-1"
              type="button"
              onClick={clearText}
            >
              Clear text
            </button>
          </div>
        </form>
      </div>
      <div
        className="container my-3 text-center"
        style={{
          color: props.mode == "light" ? "black" : "white",
        }}
      >
        <h2 className="text-center">Text Summary</h2>
        <p>
          {text.trim().length > 0
            ? text.trim().replace(/\s+/g, " ").split(" ").length
            : 0}{" "}
          words, {text.trim().replace(/\s+/g, "").length} Characters
        </p>
        <div className="text-left">
          <h2>Preview</h2>
          <p style={{ whiteSpace: "pre-wrap" }}>{text} </p>
        </div>
      </div>
    </>
  );
}
