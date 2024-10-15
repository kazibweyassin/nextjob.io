import React from 'react'

export const Button = ({ onClickHandler, value, title }) => {
  return (
    <button
onClick={() => onClickHandler(value)}  // Ensure it's a function
className="px-4 py-1 border text-base hover:bg-blue-50 hover:text-white"
>
{title}
</button>
 
  )
}





