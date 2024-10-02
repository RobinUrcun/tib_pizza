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
      <Link href="">À propos</Link>
      <Link href="/menu">Notre menu</Link>
      <Image src={"/assets/logo.svg"} width={260} height={50} alt="" />
      <Link href="">Google avis</Link>
      <Link href="">Contactez nous</Link>
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
