import React, { forwardRef, ChangeEvent, KeyboardEvent } from 'react';

interface InputProps {
  placeholder: string;
  type: 'text' | 'password' | 'email';
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  className?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ placeholder, type, value, onChange, onKeyDown, className }, ref) => {
  return (
    <input
      ref={ref}
      className={`w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 ${className}`}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      style={{ height: '2.5rem' }}  // 고정 높이 설정
    />
  );
});

export default Input;
