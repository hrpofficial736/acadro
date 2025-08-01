"use client";

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


type DateProps = {
  value: Date;
  label: string;
  callback: (newValue: Date) => void;
};

const CustomDatePicker = ({ value, callback, label }: DateProps) => {
  const [selected, setSelected] = useState<Date | null>(value);
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm text-primaryText/80">{label}</p>
      <DatePicker selected={selected} onChange={(newDate) => {
        setSelected(newDate)
      }} />
    </div>
  );
};

export default CustomDatePicker;
