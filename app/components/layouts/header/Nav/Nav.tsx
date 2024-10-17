import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <nav className="header_nav header_nav_no_responsive">
      <Image
        src={"/assets/header_decoration/corner_left.svg"}
        height={100}
        width={100}
        alt="Pizza décorative"
        className="left_corner"
      />
      <Link href="/#location">Accès</Link>
      <Link href="/menu">Notre menu</Link>
      <Link href={"/"} aria-label="Retourner au menu principal">
        <Image
          src={"/assets/logo_MQ.webp"}
          width={250}
          height={60}
          alt="Logo Tib Pizza"
        />
      </Link>
      <Link href="/#advices">Google avis</Link>
      <Link href="/contact">Contactez nous</Link>
      <Image
        src={"/assets/header_decoration/corner_right.svg"}
        height={100}
        width={100}
        alt="Pizza décorative"
        className="right_corner"
      />
    </nav>
  );
}
