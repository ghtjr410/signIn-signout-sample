import React from 'react';
import Label from 'components/Label/Label';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';

interface EmailSectionProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onVerify: () => void;
}

const EmailSection: React.FC<EmailSectionProps> = ({ value, onChange, onVerify }) => {
  return (
    <div className="mb-4">
      <Label text="이메일" />
      <div className="flex space-x-2 items-center">
        <Input placeholder="이메일 주소를 입력하세요" type="email" value={value} onChange={onChange} className="flex-grow" />
        <Button text="이메일 인증" onClick={onVerify} variant="secondary" className="w-3/5" />
      </div>
    </div>
  );
};

export default EmailSection;
