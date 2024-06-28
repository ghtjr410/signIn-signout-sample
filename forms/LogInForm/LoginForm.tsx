import React, { useState } from 'react';
import UsernameSection from 'sections/UsernameSection/UsernameSection';
import PasswordSection from 'sections/PasswordSection/PasswordSection';
import Button from 'components/Button/Button';
import Divider from 'components/Divider/Divider';
import SNSLoginSection from 'sections/SNSLoginSection/SNSLoginSection';

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // 로그인 로직
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
      <UsernameSection value={username} onChange={(e) => setUsername(e.target.value)} />
      <PasswordSection value={password} onChange={(e) => setPassword(e.target.value)} label="비밀번호" />
      <div className="flex justify-between items-center mt-4">
        <label className="flex items-center">
          <input type="checkbox" className="form-checkbox" />
          <span className="ml-2 text-sm text-gray-600">아이디 저장</span>
        </label>
        <div className="flex space-x-2 text-sm text-indigo-600">
          <a href="/forgot-username" className="hover:underline">아이디 찾기</a>
          <span>|</span>
          <a href="/forgot-password" className="hover:underline">비밀번호 찾기</a>
        </div>
      </div>
      <div className="my-4"></div>
      
      <Button text="로그인" onClick={handleLogin} />
      <div className="my-2"></div>
      <Button text="회원가입" onClick={navigateSignup} variant="secondary"  />  
      <Divider />
      <SNSLoginSection />
    </div>
  );
};

export default LoginForm;
