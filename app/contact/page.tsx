import React from "react";
import Header from "../components/layouts/header/Header";
import Contact from "../components/Contact/Contact";
import Footer from "../components/layouts/footer/Footer";
export default function page() {
  return (
    <React.Fragment>
      <Header>
        <h1>Contactez-nous</h1>
      </Header>
      <Contact />
      <Footer />
    </React.Fragment>
  );
}
