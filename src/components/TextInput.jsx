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
      <input type="text" placeholder={children} />
    </div>
  );
}

export default TextInput;