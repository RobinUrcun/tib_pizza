import React from "react";
import Nav from "./Nav/Nav";
import Decorations from "./decorations/Decorations";
import NavResponsive from "./NavResponsive/NavResponsive";
import Head from "./Title/Ttile";
export default function Header({ children }) {
  return (
    <header className="header">
      <Nav />
      <NavResponsive />
      <Decorations />
      <Head>{children}</Head>
    </header>
  );
}
