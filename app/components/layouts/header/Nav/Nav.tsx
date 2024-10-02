import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <nav className="header_nav">
      <Image
        src={"/assets/header_decoration/corner_left.svg"}
        height={100}
        width={100}
        alt=""
        className="left_corner"
      />
      <Link href="/#location">Accès</Link>
      <Link href="/menu">Notre menu</Link>
      <Link href={"/"}>
        <Image src={"/assets/logo.svg"} width={260} height={50} alt="" />
      </Link>
      <Link href="/#advices">Google avis</Link>
      <Link href="/contact">Contactez nous</Link>
      <Image
        src={"/assets/header_decoration/corner_right.svg"}
        height={100}
        width={100}
        alt=""
        className="right_corner"
      />
    </nav>
  );
}
