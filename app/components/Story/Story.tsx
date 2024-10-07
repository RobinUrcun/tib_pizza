import React from "react";

import Image from "next/image";

export default function Story() {
  return (
    <section id="about" className="story_section">
      <article className="story_section_text">
        <h2>Notre Histoire</h2>
        <p>
          We are passionate pizza makers bringing the authentic taste of
          wood-fired pizzas to the streets. Our pizza truck travels to different
          locations, serving delicious, freshly-made pizza to our community.
        </p>
        <p>
          Our ingredients are always fresh, and our recipes are crafted to bring
          out the best flavors in every bite!
        </p>
      </article>
      <aside className="story_section_image">
        <div className="image_point">
          <Image
            className="image_point_arrow"
            src={"/assets/first_section/arrow.svg"}
            width={25}
            height={25}
            alt=""
            loading="lazy"
          />
        </div>
        <Image
          src="/assets/first_section/first_section_picture.png"
          height={378}
          width={504}
          alt=""
          loading="lazy"
        />
      </aside>
    </section>
  );
}
