import React from 'react';

const InputField = ({ handleChange, value, title, name }) => {
  return (
    <label className='sidebar-label-container' htmlFor={value}>  {/* Link label with input */}
      <input
        type="radio"
        name={name}  // Group radio buttons by name
        value={value}
        id={value}  // Add unique id for accessibility
        onChange={(e) => handleChange(e.target.value)}   
      />
      <span className='checkmark'></span> {title}
    </label>  )
}

export default InputField