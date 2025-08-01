import clsx from "clsx";
import React, { HTMLInputTypeAttribute, ReactElement } from "react";

const CustomTextField = ({
  name,
  label,
  placeholder,
  type,
  value,
  onChanged,
  onPressed,
  icon,
  className,
}: {
  name: string;
  label: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
  value: string | number | Date;
  icon?: ReactElement;
  onPressed?: () => void;
  onChanged: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}) => {
  return (
    <div
      className={clsx("flex flex-col gap-2 max-w-[500px] relative", className)}
    >
      <label className="text-sm font-medium text-primaryText/80" htmlFor={name}>
        {label}
      </label>
      <input
        value={
          typeof value !== "string" && typeof value !== "number"
            ? value.toISOString().split("T")[0]
            : value
        }
        onClick={onPressed}
        onChange={onChanged}
        name={name}
        type={type}
        placeholder={placeholder}
        className="input"
      ></input>
      {icon}
    </div>
  );
};

export default CustomTextField;
