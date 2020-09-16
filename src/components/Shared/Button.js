import React from 'react';

const Button = ({ label, active, handleClick }) => {
  return (
    <div onClick={handleClick} class={`Button ${active ? 'ButtonActive' : ''}`}>
      <span>{label}</span>
    </div>
  );
};
export default Button;
