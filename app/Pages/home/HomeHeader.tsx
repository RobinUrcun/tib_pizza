import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HomeHeader() {
  return (
    <React.Fragment>
      <h1>
        <Image src={"/assets/logo.svg"} width={860} height={250} alt="" />
      </h1>
      <p className="header_title_description">
        Découvrez nos pizza artisanales réalisée a partir d&apos;ingredients
        frais
      </p>
      <div className="header_title_link">
        <Link href={""}>Découvrir notre menu</Link>
        <Link href={""}>Localisation</Link>
      </div>
    </React.Fragment>
  );
}
