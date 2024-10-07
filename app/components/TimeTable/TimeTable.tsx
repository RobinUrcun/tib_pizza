import React from "react";
import Image from "next/image";
import Table from "./Table/Table";

export default function TimeTable() {
  return (
    <section className="timeTable_section">
      <h2>Nos Horaires</h2>
      <article className="timeTable_article">
        <Image
          src={"/assets/timeTable_section/storeFront.jpg"}
          height={400}
          width={700}
          alt=""
          style={{ objectFit: "cover" }}
          loading="lazy"
        />
        <div className="timeTable_article_wrapper">
          <Table />
        </div>
      </article>
    </section>
  );
}
