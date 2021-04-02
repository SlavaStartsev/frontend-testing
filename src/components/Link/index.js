import React from "react";

export function Link({ href, children, external }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : "_self"}
      rel={external ? "noopener noreferrer" : undefined}
      className="test-class-name test-class-name-2"
      data-qa="test-data-qa"
      data-pixel-component="link"
    >
      {children}
    </a>
  );
}
