"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function NavResponsive() {
  const [isOpen, setIsOpen] = useState(null);

  const openMenu = function () {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <nav className="header_nav header_nav_responsive" id="responsive_nav">
      <Image
        src={"/assets/header_decoration/corner_left.svg"}
        height={100}
        width={100}
        alt=""
        className="left_corner"
      />
      <Link href={"/"} aria-label="Retourner au menu principal">
        <Image
          src={"/assets/logo.svg"}
          width={260}
          height={50}
          alt=""
          id="responsive_logo"
        />
      </Link>
      <Image
        src={"/assets/header_decoration/corner_right.svg"}
        height={100}
        width={100}
        alt=""
        className="right_corner"
      />
      <div
        onClick={() => {
          openMenu();
        }}
        className="menu_responsive_burger"
      >
        <div
          className={`menu_responsive_bar ${isOpen ? "open_burger" : null}`}
        ></div>
        <div
          className={`menu_responsive_bar ${isOpen ? "open_burger" : null}`}
        ></div>
        <div
          className={`menu_responsive_bar ${isOpen ? "open_burger" : null}`}
        ></div>
      </div>
      <div className={`menu_content ${isOpen ? "appear_menu" : null}`}>
        <div
          onClick={() => {
            openMenu();
          }}
          className="close_menu_content"
        >
          <div className="close_menu_content_bar"></div>
          <div className="close_menu_content_bar"></div>
        </div>
        <Link
          onClick={() => {
            closeMenu();
          }}
          href={"/"}
          aria-label="Retourner à la page d'accueil"
        >
          <Image src={"/assets/logo.svg"} width={260} height={50} alt="" />
        </Link>
        <Link
          onClick={() => {
            closeMenu();
          }}
          href="/#location"
        >
          Accès
        </Link>
        <Link
          onClick={() => {
            closeMenu();
          }}
          href="/menu"
        >
          Notre menu
        </Link>

        <Link
          onClick={() => {
            closeMenu();
          }}
          href="/#advices"
        >
          Google avis
        </Link>
        <Link
          onClick={() => {
            closeMenu();
          }}
          href="/contact"
        >
          Contactez nous
        </Link>
      </div>
    </nav>
  );
}
