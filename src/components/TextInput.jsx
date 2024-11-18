import React from "react";

export function TextInput({ children }) {
  return (
    <div className="text-input">
      <input type="text" placeholder={children} />
    </div>
  );
}

export function LongTextInput({ children }) {
  return (
    <div className="long-text-input">
      <textarea rows="8" type="text" placeholder={children} />
    </div>
  );
}

export default TextInput;