import React from "react";

export default function Header(props) {
  console.log("render: Header");
  const { children } = props;
  return (
    <header className="app-header">
      <h1 className="app-name">Potter World</h1>
      {children}
    </header>
  );
}
