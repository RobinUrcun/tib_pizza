import React from "react";

export default function Add() {
  return (
    <section className="add_section">
      <h2>Vous souhaitez ajouter un ingrédient ?</h2>
      <article className="add_article">
        <div className="add_box">
          <p className="add_box_price">1,50 €</p>
          <p className="add_box_size"> 29 cm</p>
        </div>
        <div className="add_box">
          <p className="add_box_price">2,00 €</p>
          <p className="add_box_size"> 40 cm</p>
        </div>
      </article>
    </section>
  );
}
