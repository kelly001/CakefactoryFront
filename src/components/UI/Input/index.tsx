import React from 'react';
import InputType from "../../../models/inputType";

const Input: React.FC<{ input: InputType}> = (props) => {
  return (
    <div className="mb-3">
      <label htmlFor={props.input.id} className="form-label">{props.input.label}</label>
      <input type={props.input.type} className="form-control" id={props.input.id} aria-describedby={props.input.id + 'Help'}
      onChange={props.input.onChange} value={props.input.value}/>
        <div id={props.input.id + 'Help'} className="form-text">{props.input.helpText}</div>
    </div>
  );
};

export default Input;