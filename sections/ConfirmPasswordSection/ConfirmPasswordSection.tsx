import React from 'react';
import Label from 'components/Label/Label';
import Input from 'components/Input/Input';

interface ConfirmPasswordSectionProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ConfirmPasswordSection: React.FC<ConfirmPasswordSectionProps> = ({ value, onChange }) => {
  return (
    <div className="mb-4">
      <Label text="비밀번호 확인" />
      <Input placeholder="비밀번호를 다시 입력해주세요" type="password" value={value} onChange={onChange} />
    </div>
  );
};

export default ConfirmPasswordSection;
