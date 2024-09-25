import React from "react";
import Image from "next/image";

export default function Decorations() {
  return (
    <React.Fragment>
      <Image
        id="decoration1"
        src="/assets/header_decoration/decoration1.svg"
        height={600}
        width={680}
        alt="decorations"
      />
      <Image
        id="decoration2"
        src="/assets/header_decoration/decoration2.svg"
        height={250}
        width={480}
        alt="decorations"
      />
      <Image
        id="decoration3"
        src="/assets/header_decoration/decoration3.svg"
        height={86}
        width={165}
        alt="decorations"
      />
      <Image
        id="top_left_pizza"
        src="/assets/header_decoration/top_left_pizza.svg"
        height={400}
        width={580}
        alt="an pizza"
      />
      <Image
        id="bottom_right_pizza"
        src="/assets/header_decoration/bottom_right_pizza.svg"
        height={400}
        width={580}
        alt="an pizza"
      />
      <Image
        id="decoration4"
        src="/assets/header_decoration/decoration3.svg"
        height={86}
        width={165}
        alt="decorations"
      />
    </React.Fragment>
  );
}
