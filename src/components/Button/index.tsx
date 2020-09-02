import React from 'react';

interface IButtonProps {
  message: string
  onClick: () => void
}

function Button({message, onClick} : IButtonProps) {
  return (
    <button onClick={onClick}> {message}</button>
  );
};

export default Button;