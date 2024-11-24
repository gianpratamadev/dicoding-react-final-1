import React from "react";

export function TextInput({ value, children, onChange }) {
  return (
    <div className="text-input">
      <input type="text" placeholder={children} value={value} onChange={onChange} maxLength={50}/>
    </div>
  );
}

export function LongTextInput({ value, children, onChange }) {
  return (
    <div className="long-text-input">
      <textarea rows="8" type="text" placeholder={children} value={value} onChange={onChange}/>
    </div>
  );
}

export default TextInput;