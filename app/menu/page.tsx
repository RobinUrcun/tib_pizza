import React from "react";
import Header from "../components/layouts/header/Header";
import Menu from "../Pages/menu/Menu";
import Add from "../Pages/menu/Add/Add";
import Footer from "../components/layouts/footer/Footer";

export default function page() {
  return (
    <React.Fragment>
      <Header>
        <h1>Notre menu</h1>
        <p className="header_text">
          Toutes nos pizzas sont réalisées avec des ingredients frais et de
          qualité et sont cuites au feu de bois
        </p>
      </Header>
      <Menu />
      <Add />
      <Footer />
    </React.Fragment>
  );
}
