import React from 'react';
import Label from 'components/Label/Label';
import Input from 'components/Input/Input';

interface PasswordSectionProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;  // Make label prop optional
}

const PasswordSection: React.FC<PasswordSectionProps> = ({ value, onChange, label }) => {
  return (
    <div className="mb-4">
      {label && <Label text={label} />}
      <Input placeholder="비밀번호를 입력하세요" type="password" value={value} onChange={onChange} />
    </div>
  );
};

export default PasswordSection;
