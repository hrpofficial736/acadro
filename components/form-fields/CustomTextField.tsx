
import React, { HTMLInputTypeAttribute } from 'react';

const CustomTextField = ({ name, label, placeholder, type }: { name: string; label: string; placeholder: string; type: HTMLInputTypeAttribute}) => {
  return (
    <div className='flex flex-col gap-1'>
      <label className='text-sm font-medium text-primaryText/80' htmlFor={name}>{ label }</label>
      <input name={name} type={type} placeholder={placeholder} className='input' />
    </div>
  )
}

export default CustomTextField
