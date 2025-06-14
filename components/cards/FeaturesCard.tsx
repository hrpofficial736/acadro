import Image from "next/image";
import React from "react";

const FeaturesCard = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) => {
  return (
    <div
      className={`features-card`}
    >
      <Image
        src={image}
        width={600}
        height={400}
        quality={100}
        alt={description}
        className="w-full h-[80%] rounded-3xl object-cover"
      />
      <div className="f-c-col max-md:py-1">
        <h1 className="text-primaryText font-bold text-lg md:text-2xl">{title}</h1>
        <p className="text-secondaryText text-sm md:text-base font-semibold">{description}</p>
      </div>
    </div>
  );
};

export default FeaturesCard;
