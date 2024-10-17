import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <Image
        src={"/assets/logo_MQ.webp"}
        height={60}
        width={250}
        alt="Logo Tib Pizza"
      />
      <nav>
        <Link href={"/#location"}>Accès</Link>
        <Link href={"/menu"}>Notre menu</Link>
        <Link href={"/#advices"}>Googe Avis</Link>

        <Link href={"/contact"}>Nous contacter</Link>
      </nav>
      <div className="footer_container">
        <div className="footer_mentions">
          © 2024 Tib Pizza. All rights reserved.
        </div>
        <div className="footer_social">
          <a target="_blank" href="https://www.instagram.com/tibpizza">
            <div className="img_border">
              <Image
                src={"/assets/social_icones/instagram_icone.svg"}
                height={20}
                width={20}
                alt="Découvrez notre Instagram"
                aria-label="Découvrez notre Instagram"
              />
            </div>
          </a>
          <a target="_blank" href="https://www.facebook.com/tibpizza/">
            <div className="img_border">
              <Image
                src={"/assets/social_icones/facebook_icone.svg"}
                height={20}
                width={20}
                alt="Découvrez notre Facebook"
                aria-label="Découvrez notre Facebook"
              />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
}
