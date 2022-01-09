import React from "react";

export default function About(props) {
  let style = {};

  if (props.mode === "light") {
    style = {
      color: "black",
      backgroundColor: "white",
    };
  } else {
    style = {
      color: "white",
      backgroundColor: "black",
      border: "1px  solid  white",
    };
  }
  return (
    <>
      <div className="container m-5 p-5" style={style}>
        <h1>About TextUtils</h1>
        <p>TextUtils Features </p>
        <ul>
          <li>Convert text into Uppercase</li>
          <li>Convert text into Lowercase</li>
          <li>Remove extra spaces in the text</li>
          <li>Remove spaces at both ends of the text</li>
        </ul>
        <p>This React App developed as part of CodeWithHarry Course</p>
        <a
          href="https://www.youtube.com/watch?v=-mJFZp84TIY&list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>Course Link</strong>
        </a>
      </div>
    </>
  );
}
