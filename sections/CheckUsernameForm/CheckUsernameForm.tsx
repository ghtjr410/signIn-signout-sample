import React from 'react';
import Label from 'components/Label/Label';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';

interface CheckUsernameFormProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onCheck: (username: string) => void;
}

const CheckUsernameForm: React.FC<CheckUsernameFormProps> = ({ value, onChange, onCheck }) => {
  const handleCheck = () => {
    onCheck(value);
  };

  return (
    <div className="mb-4">
      <Label text="아이디 확인" />
      <div className="flex space-x-2 items-center">
        <Input
          placeholder="아이디를 입력하세요"
          type="text"
          value={value}
          onChange={onChange}
          className="flex-grow"
        />
        <Button text="중복 확인" onClick={handleCheck} variant="secondary" className="w-3/5" />
      </div>
    </div>
  );
};

export default CheckUsernameForm;

