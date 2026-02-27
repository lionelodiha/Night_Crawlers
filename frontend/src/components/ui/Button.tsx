import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  type = 'button',
  disabled = false,
  className = ''
}) => {
  const baseClasses = 'font-semibold py-3 px-6 rounded-pill transition-all duration-200 text-sm focus-visible';
  
  const variantClasses = {
    primary: 'bg-night-red-600 hover:bg-night-red-700 text-white disabled:bg-night-red-300 disabled:cursor-not-allowed',
    secondary: 'border-2 border-night-gray-300 hover:border-night-gray-400 text-night-gray-700 hover:text-night-gray-800 disabled:border-night-gray-200 disabled:text-night-gray-400 disabled:cursor-not-allowed',
    outline: 'border-2 border-night-red-600 text-night-red-600 hover:bg-night-red-600 hover:text-white disabled:border-night-red-300 disabled:text-night-red-300 disabled:cursor-not-allowed'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;