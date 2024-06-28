import React, { useState } from 'react';
import TestSection from 'sections/AuthInputSection/AuthInputSection';
import Button from 'components/Button/Button';
import Divider from 'components/Divider/Divider';
import SNSLoginSection from 'sections/SNSLoginSection/SNSLoginSection';
import SaveUsernameSection from 'sections/SaveUsernameSection/SaveUsernameSection';
import UserInfoLinksSection from 'sections/UserInfoLinksSection/UserInfoLinksSection';

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('로그인 시도:', { username, password });
  };

  const navigateSignup = () => {
    console.log("회원가입하러가기");
  }

  return (
    <div className="bg-white p-6 rounded shadow-md w-96">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-semibold text-indigo-600">로그인</h2>
      </div>
      <TestSection
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        showLabel={true}
        labelText="아이디"
        placeholderText="아이디를 입력하세요"
      />
      <TestSection
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        showLabel={true}
        labelText="비밀번호"
        placeholderText="비밀번호를 입력하세요"
        inputType="password"
      />
      <div className="flex justify-between items-center mt-4">
        <SaveUsernameSection />
        <UserInfoLinksSection />
      </div>
      <Button text="로그인" onClick={handleLogin} className="mt-4" />
      <div className="my-2"></div>
      <Button text="회원가입" onClick={navigateSignup} variant="secondary" />
      <Divider />
      <SNSLoginSection />
    </div>
  );
};

export default LoginForm;
