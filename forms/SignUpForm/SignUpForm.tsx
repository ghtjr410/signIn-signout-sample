import React, { useState } from 'react';
import TestSection from 'sections/AuthInputSection/AuthInputSection';
import Button from 'components/Button/Button';
import Divider from 'components/Divider/Divider';
import SNSLoginSection from 'sections/SNSLoginSection/SNSLoginSection';

const SignUpForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [errorText, setErrorText] = useState('');

  const handleSignUp = () => {
    console.log('회원가입 시도:', { username, password, confirmPassword, email, verificationCode });
  };

  const handleCheckUsername = (username: string) => {
    console.log('입력한 아이디:', username);
    if (username === "중복된아이디") {
      setErrorText("이미 사용 중인 아이디입니다.");
    } else {
      setErrorText("");
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow-md w-96">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-semibold text-indigo-600">회원 가입</h2>
      </div>
      <TestSection
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onButtonClick={() => handleCheckUsername(username)}
        showLabel={true}
        labelText="아이디 확인"
        buttonText="중복 확인"
        placeholderText="아이디를 입력하세요"
        errorText={errorText}
      />
      <TestSection
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        showLabel={true}
        labelText="비밀번호"
        placeholderText="비밀번호를 입력하세요"
        inputType="password"
      />
      <TestSection
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        showLabel={true}
        labelText="비밀번호 확인"
        placeholderText="비밀번호를 다시 입력하세요"
        inputType="password"
      />
      <TestSection
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onButtonClick={() => console.log('이메일 인증')}
        showLabel={true}
        labelText="이메일"
        buttonText="이메일 인증"
        placeholderText="이메일 주소를 입력하세요"
        inputType="email"
      />
      <TestSection
        value={verificationCode}
        onChange={(e) => setVerificationCode(e.target.value)}
        onButtonClick={() => console.log('인증 확인')}
        showLabel={true}
        labelText="인증번호"
        buttonText="인증 확인"
        placeholderText="인증번호 4자리를 입력하세요"
      />
      <Button text="회원가입" onClick={handleSignUp} className="mt-4" />
      <div className="my-2"></div>
      <Button text="로그인" onClick={() => console.log('로그인 하러 가기')} variant="secondary" />
      <Divider />
      <SNSLoginSection />
    </div>
  );
};

export default SignUpForm;
