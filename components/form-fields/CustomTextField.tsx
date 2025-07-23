import clsx from "clsx";
import React, { HTMLInputTypeAttribute } from "react";

const CustomTextField = ({
  name,
  label,
  placeholder,
  type,
  value,
  onChanged,
  className
}: {
  name: string;
  label: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
  value: string | number;
  onChanged: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string
}) => {
  return (
    <div className={clsx("flex flex-col gap-2 max-w-[500px]", className)}>
      <label className="text-sm font-medium text-primaryText/80" htmlFor={name}>
        {label}
      </label>
      <input
      value={value}
      onChange={onChanged}
        name={name}
        type={type}
        placeholder={placeholder}
        className="input"
      />
    </div>
  );
};

export default CustomTextField;
