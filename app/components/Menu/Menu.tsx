import React from "react";
import MainPizzas from "./MainPizzas/MainPizzas";
import Link from "next/link";
import Image from "next/image";

export default function Menu() {
  return (
    <section className="menu_section">
      <h2>Notre Menu</h2>
      <MainPizzas />
      <Link className="menu_link" href={"/menu"}>
        Voir tous
      </Link>
      <Image
        className="decoration1"
        src="/assets/header_decoration/decoration3.svg"
        height={300}
        width={500}
        alt="decorations"
      />
      <Image
        className="decoration2"
        src="/assets/header_decoration/decoration3.svg"
        height={150}
        width={350}
        alt="decorations"
      />
      <Image
        className="decoration3"
        src="/assets/header_decoration/decoration3.svg"
        height={350}
        width={450}
        alt="decorations"
      />
      <Image
        className="decoration4"
        src="/assets/header_decoration/decoration3.svg"
        height={350}
        width={450}
        alt="decorations"
      />
    </section>
  );
}
