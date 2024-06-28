import React from 'react';
import Label from 'components/Label/Label';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';

interface VerificationCodeSectionProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onVerify: () => void;
}

const VerificationCodeSection: React.FC<VerificationCodeSectionProps> = ({ value, onChange, onVerify }) => {
  return (
    <div className="mb-4">
      <Label text="인증번호" />
      <div className="flex space-x-2 items-center">
        <Input placeholder="인증번호 4자리를 입력하세요" type="text" value={value} onChange={onChange} className="flex-grow" />
        <Button text="인증 확인" onClick={onVerify} variant="secondary" className="w-3/5" />
      </div>
    </div>
  );
};

export default VerificationCodeSection;
