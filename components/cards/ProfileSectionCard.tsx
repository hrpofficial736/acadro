import clsx from "clsx";
import React, { ReactElement } from "react";

type ProfileSectionCardProps = {
  header: string;
  text?: string;
  component?: ReactElement;
  className?: string;
};

const ProfileSectionCard = ({
  header,
  text,
  component,
  className
}: ProfileSectionCardProps) => {
  return (
    <div className={clsx("rounded-2xl bg-gradient-to-tr from-surface to-secondaryText/20 px-5 py-4 fles flex-col", className)}>
      <h1 className="text-xl font-bold">{header}</h1>
      {text?.trim() !== "" && (
        <p className="text-secondaryText text-sm font-semibold mt-5">{text}</p>
      )}

      { component }
    </div>
  );
};

export default ProfileSectionCard;
