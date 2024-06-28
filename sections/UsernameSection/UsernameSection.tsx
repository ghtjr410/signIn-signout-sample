import React from 'react';
import Label from 'components/Label/Label';
import Input from 'components/Input/Input';

interface UsernameSectionProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const UsernameSection: React.FC<UsernameSectionProps> = ({ value, onChange }) => {
  return (
    <div className="mb-4">
      <Label text="아이디" />
      <Input placeholder="아이디를 입력해주세요" type="text" value={value} onChange={onChange} />
    </div>
  );
};

export default UsernameSection;
