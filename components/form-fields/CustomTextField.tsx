import React, { HTMLInputTypeAttribute } from "react";

const CustomTextField = ({
  name,
  label,
  placeholder,
  type,
  value,
  onChanged,
}: {
  name: string;
  label: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
  value: string;
  onChanged: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-primaryText/80" htmlFor={name}>
        {label}
      </label>
      <input
      value={value}
      autoComplete="email webauthn"
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
