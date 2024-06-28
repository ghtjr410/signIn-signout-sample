import React from 'react';
import Label from 'components/Label/Label';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';

interface TestSectionProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onButtonClick?: () => void;
    showLabel?: boolean;
    labelText?: string;
    buttonText?: string;
    placeholderText?: string;
    errorText?: string;
    inputType?: 'text' | 'password' | 'email';
  }
  
  const TestSection: React.FC<TestSectionProps> = ({
    value,
    onChange,
    onButtonClick,
    showLabel = true,
    labelText = '',
    buttonText = '',
    placeholderText = '',
    errorText = '',
    inputType = 'text'
  }) => {
    return (
      <div className="mb-4">
        {showLabel && <Label text={labelText} />}
        <div className="flex space-x-2 items-center">
          <Input
            placeholder={placeholderText}
            type={inputType}
            value={value}
            onChange={onChange}
            className="flex-grow"
          />
          {buttonText && onButtonClick && (
            <Button text={buttonText} onClick={onButtonClick} variant="secondary" className="w-3/5" />
          )}
        </div>
        {errorText && <div className="text-red-500 mt-2">{errorText}</div>}
      </div>
    );
  };
  
  export default TestSection;

