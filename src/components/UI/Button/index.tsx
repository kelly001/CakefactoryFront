import React from 'react';
import ButtonType from "../../../models/buttonType";

const Button: React.FC<{btn: ButtonType}> = (props) => {
  return (
    <button
      type={props.btn.type || 'button'}
      className={`${props.btn.className}`}
      onClick={props.btn.onClick}
      disabled={props.btn.disabled}
    >
      {props.children}
    </button>
  )
};

export default Button;