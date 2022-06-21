import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <div>
      <button type={props.type || "button"} onClick={props.ClickHandler}>
        {props.children}
      </button>
    </div>
  );
};
export default Button;
