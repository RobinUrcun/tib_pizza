import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <Image src={"/assets/logo.svg"} height={100} width={300} alt="" />
      <nav>
        <Link href={""}>À propos</Link>
        <Link href={""}>Menu</Link>
        <Link href={""}>Nous retrouver</Link>
        <Link href={""}>Nous contacter</Link>
      </nav>
      <div className="footer_container">
        <div className="footer_mentions">
          © 2024 Tib Pizza. All rights reserved.
        </div>
        <div className="footer_social">
          <div className="img_border">
            <Image
              src={"/assets/social_icones/instagram_icone.svg"}
              height={20}
              width={20}
              alt=""
            />
          </div>
          <div className="img_border">
            <Image
              src={"/assets/social_icones/facebook_icone.svg"}
              height={20}
              width={20}
              alt=""
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
