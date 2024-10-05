"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { bubble as Menu } from "react-burger-menu";

export default function NavResponsive() {
  return (
    <nav className="header_nav header_nav_responsive" id="responsive_nav">
      <Image
        src={"/assets/header_decoration/corner_left.svg"}
        height={100}
        width={100}
        alt=""
        className="left_corner"
      />
      <Image
        src={"/assets/logo.svg"}
        width={260}
        height={50}
        alt=""
        id="responsive_logo"
      />
      <Menu>
        <Link href="/#location">Accès</Link>
        <Link href="/menu">Notre menu</Link>
        <Link href={"/"}>
          <Image src={"/assets/logo.svg"} width={260} height={50} alt="" />
        </Link>
        <Link href="/#advices">Google avis</Link>
        <Link href="/contact">Contactez nous</Link>
      </Menu>
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
