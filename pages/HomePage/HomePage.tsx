import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage1: React.FC = () => {
    const navigate = useNavigate();

    // navigateToLogin 함수 정의
    const navigateToLogin = () => {
        
      // 로그인 페이지로 이동하는 로직
      console.log("Navigating to login page...");
      navigate('/auth/log-in');
    };
  
    return (
      <div>
        여기가 홈 페이지입니까!!!
        <button onClick={navigateToLogin}>로그인</button>
      </div>
    );
  };

export default HomePage1;