import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './static/font/FontPretendard.css';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
import InitialPage from './pages/InitialPage';
import ScrapPage from './pages/ScrapPage';

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
  const [isLogin, setIsLogin] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<InitialPage />} />
        <Route path='/mainpage' element={<MainPage />} />
        <Route path='/mypage' element={<MyPage />} />
        <Route path='/scrappage' element={<ScrapPage />} />
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
