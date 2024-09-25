import React from "react";
import Nav from "./Nav/Nav";
import Decorations from "./decorations/Decorations";
import Head from "./Title/Ttile";
export default function Header() {
  return (
    <header className="header">
      <Nav />
      <Decorations />
      <Head />
    </header>
  );
}
