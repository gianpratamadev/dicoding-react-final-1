import React from "react";

function Button({children}) {
  return (
    <>
    <button>
      <span>{children}</span>
    </button>
    </>
  );
}

export default Button;