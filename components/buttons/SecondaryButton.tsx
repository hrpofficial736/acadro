import { ButtonInterface } from '@/interfaces/button'
import React from 'react'

export const SecondaryButton : React.FC<ButtonInterface> = ({text, icon, onPressed}) => {
  return (
    <button onClick={() => {
        onPressed();
    }} className="sec-btn">
      { icon }
      { text }
    </button>
  )
}

