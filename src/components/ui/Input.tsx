import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input: React.FC<InputProps> = ({ 
  className = '',
  label,
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-night-gray-700 mb-1">
          {label}
        </label>
      )}
      <input
        className={`w-full px-4 py-3 border border-night-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-night-red-500 focus:border-transparent transition-colors duration-200 ${className}`}
        {...props}
      />
    </div>
  );
};

export default Input;