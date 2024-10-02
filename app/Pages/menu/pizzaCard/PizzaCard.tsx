import React from "react";
import Image from "next/image";

type PizzaObj = {
  pizza: {
    title: string;
    ingredients: string;
    price: { medium: number; large: number };
    imgUrl: string;
  };
  size: string;
};

export default function PizzaCard({ pizza, size }: PizzaObj) {
  return (
    <div className="pizza_card">
      <div className="img_wrapper">
        <Image src={pizza.imgUrl} fill={true} alt={pizza.title} />
      </div>
      <div className="title_wrapper">
        <h3>{pizza.title}</h3>
        <p className="price">
          {(
            (size === "medium" ? pizza.price.medium : pizza.price.large) / 100
          ).toLocaleString("fr-FR", {
            style: "currency",
            currency: "EUR",
            minimumFractionDigits: 2,
          })}
        </p>
      </div>
      <p className="ingredient_list">{pizza.ingredients}</p>
    </div>
  );
}
