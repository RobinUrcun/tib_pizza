import React from "react";
import Form from "./Form/Form";
import Image from "next/image";

export default function Contact() {
  return (
    <section className="contact_section">
      <Form />
      <div className="img_wrapper">
        <Image
          src={"/assets/contact_section/oven.png"}
          height={600}
          width={600}
          alt=""
        />
      </div>
    </section>
  );
}
