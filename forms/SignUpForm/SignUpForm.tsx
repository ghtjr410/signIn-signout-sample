import React, { useState } from 'react';
import PasswordSection from 'sections/PasswordSection/PasswordSection';
import EmailSection from 'sections/EmailSection/EmailSection';
import VerificationCodeSection from 'sections/VerificationCodeSection/VerificationCodeSection';
import Button from 'components/Button/Button';
import Divider from 'components/Divider/Divider';
import SNSLoginSection from 'sections/SNSLoginSection/SNSLoginSection';
import CheckUsernameForm from 'sections/CheckUsernameForm/CheckUsernameForm';

const SignUpForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');

  const handleSignUp = () => {
    // 회원가입 로직
    console.log('회원가입 시도:', { username, password, confirmPassword, email, verificationCode });
  };

  const handleCheckUsername = (username: string) => {
    console.log('입력한 아이디:', username);
  };

  return (
    <div className="bg-white p-6 rounded shadow-md w-96">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-semibold text-indigo-600">회원 가입</h2>
      </div>
      <CheckUsernameForm value={username} onChange={(e) => setUsername(e.target.value)} onCheck={handleCheckUsername} />
      <PasswordSection value={password} onChange={(e) => setPassword(e.target.value)} label="비밀번호" />
      <PasswordSection value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} label="비밀번호 확인" />
      <EmailSection value={email} onChange={(e) => setEmail(e.target.value)} onVerify={() => console.log('이메일 인증')} />
      <VerificationCodeSection value={verificationCode} onChange={(e) => setVerificationCode(e.target.value)} onVerify={() => console.log('인증 확인')} />
      <Button text="회원가입" onClick={handleSignUp} className="mt-4" />
      <div className="my-2"></div>
      <Button text="로그인" onClick={handleSignUp} variant="secondary" />
      <Divider />
      <SNSLoginSection />
    </div>
  );
};

export default SignUpForm;
