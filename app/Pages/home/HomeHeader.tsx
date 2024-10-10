import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HomeHeader() {
  return (
    <React.Fragment>
      <h1>
        <Image
          src={"/assets/logo.svg"}
          width={860}
          height={200}
          alt=""
          loading="eager"
        />
      </h1>
      <a href="tel:0690010203" className="header_title_description">
        06 90 01 02 03
      </a>
      <div className="header_title_link">
        <Link href={"/menu"}>Découvrir notre menu</Link>
        <Link href={"/#location"}>Localisation</Link>
      </div>
    </React.Fragment>
  );
}
