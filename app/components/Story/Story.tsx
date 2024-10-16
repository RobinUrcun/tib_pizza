import React from "react";

import Image from "next/image";

export default function Story() {
  return (
    <section id="about" className="story_section">
      <article className="story_section_text">
        <h2>Notre Histoire</h2>
        <p>
          Bienvenue à Pizza Sainte-Anne, votre camion à pizza fixe situé au cœur
          de la Guadeloupe, à Sainte-Anne ! Nous vous proposons des pizzas
          savoureuses, cuites au feu de bois pour un goût authentique et
          inimitable. Tous nos ingrédients sont sélectionnés avec soin pour
          garantir fraîcheur et qualité dans chaque bouchée. Chaque quinzaine,
          laissez-vous surprendre par notre pizza spéciale, une recette unique
          imaginée pour régaler vos papilles.
        </p>
        <p>
          Que ce soit pour une soirée entre amis ou un repas en famille, venez
          profiter d’un moment convivial et gourmand chez nous. Pizza
          Sainte-Anne, la qualité au service de la tradition.
        </p>
      </article>
      <aside className="story_section_image">
        <div className="image_point">
          <Image
            className="image_point_arrow"
            src={"/assets/first_section/arrow.svg"}
            width={25}
            height={25}
            alt=""
            loading="lazy"
          />
        </div>
        <Image
          src="/assets/first_section/first_section_picture.png"
          height={378}
          width={504}
          alt=""
          loading="lazy"
        />
      </aside>
    </section>
  );
}
