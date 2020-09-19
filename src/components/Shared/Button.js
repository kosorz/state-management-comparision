import React from 'react';

const Button = ({ label, active, handleClick }) => {
  return (
    <div
      onClick={handleClick}
      className={`Button ${active ? 'ButtonActive' : ''}`}
    >
      <span>{label}</span>
    </div>
  );
};
export default Button;
