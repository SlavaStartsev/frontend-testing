import React from "react";

export function Button({type, onClick, children , ...rest}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="test-button-class"
      data-qa="test-button"
      {...rest}
    >
      {children}
    </button>
  );
}
