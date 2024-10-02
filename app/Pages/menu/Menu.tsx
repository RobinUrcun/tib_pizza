"use client";
import React, { useState } from "react";
import pizzas_list from "@/app/utils/pizzas_list.json";
import PizzaCard from "./pizzaCard/PizzaCard";
import * as Switch from "@radix-ui/react-switch";
import Decorations from "./pizzaCard/decorations/Decorations";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [size, setSize] = useState("medium");
  return (
    <section className="page_menu_section">
      <h2>Nos pizzas</h2>
      <div className="size_wrapper">
        <p>Disponibles en 29 cm ou 40 cm !</p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            position: "absolute",
            right: 0,
            zIndex: 98,
          }}
        >
          <label
            className="Label"
            htmlFor="airplane-mode"
            style={{ paddingRight: 15, fontSize: 30, fontWeight: 500 }}
          >
            {size === "medium" ? "29 cm" : "40cm"}
          </label>
          <Switch.Root
            className="SwitchRoot"
            id="airplane-mode"
            onCheckedChange={() => {
              setSize(size === "medium" ? "large" : "medium");
            }}
          >
            <Switch.Thumb className="SwitchThumb" />
          </Switch.Root>
        </div>
      </div>
      <article className={`pizzas_wrapper ${isOpen ? "open" : null}`}>
        {pizzas_list.map((pizza, index) => (
          <PizzaCard
            key={`${pizza.title} ${index}`}
            pizza={pizza}
            size={size}
          />
        ))}
        <p
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="manageSize"
        >
          {isOpen ? "Voir moins" : "Voir plus"}
        </p>
      </article>
      <Decorations />
    </section>
  );
}
