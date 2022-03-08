import React from 'react';

const Input = (props) => {
  return (
    <div className="mb-3">
      <label htmlFor={props.id} className="form-label">{props.label}</label>
      <input type={props.type} className="form-control" id={props.id} aria-describedby={props.helpId || props.id + 'Help'} />
        <div id={props.helpId || props.id + 'Help'} className="form-text">{props.helpText}</div>
    </div>
  );
};

export default Input;