import React from "react";
import Image from "next/image";

interface AdviceCardProps {
  viewerName: string;
  rating: number;
  commentary: string;
}

export default function AdviceCard({ props }: { props: AdviceCardProps }) {
  const firstLetter: string = props.viewerName.toUpperCase()[0];
  return (
    <div className="advice_card">
      <p>{props.commentary}</p>
      <div className="commentary_info">
        <div className="commentary_info_wrapper">
          <div className="commentary_icone_wrapper">
            <div className="commentary_icone">{firstLetter}</div>
          </div>
          <div className="commentary_name_rating">
            <div className="commentary_name">
              <h3>{props.viewerName}</h3>
            </div>
            <div className="commentary_rating">
              {Array.from({ length: props.rating }).map((_, index) => (
                <div key={index}>
                  <Image
                    src={"/assets/icons/star.svg"}
                    height={20}
                    width={20}
                    alt="une etoile"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="commentary_source">
          <Image
            src={"/assets/icons/google.svg"}
            height={30}
            width={30}
            alt="icone de Google"
          />
        </div>
      </div>
    </div>
  );
}
