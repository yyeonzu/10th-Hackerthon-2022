import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './static/font/FontPretendard.css';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
import LoginBox from './components/signin/LoginBox';
import SignUpBox from './components/signup/SignupBox';

const GlobalStyle = createGlobalStyle`
  body{
    background-color: #ffffff;
        margin: 0 auto;
  }
  *{
      font-family: 'Pretendard';
    }
`;

const WrapperScreen = styled.div`
  @media (max-width: 1280px) {
    width: 1280px;
  }
`;

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/mypage' element={<MyPage />} />
        <Route path='/signin' element={<LoginBox />} />
        <Route path='signup' element={<SignUpBox />} />
      </Routes>
      <Routes></Routes>
    </BrowserRouter>
  );
};

function App() {
  return (
    <>
      <WrapperScreen>
        <GlobalStyle></GlobalStyle>
        <Router />
      </WrapperScreen>
    </>
  );
}

export default App;
