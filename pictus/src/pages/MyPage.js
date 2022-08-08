import React from 'react';
import Header from '../components/mainpage/Header';
import MenuBar from '../components/mypage/MenuBar';
import Profile from '../components/mypage/Profile';

const MyPage = () => {
  return (
    <>
      <Header />
      <Profile />
      <MenuBar />
    </>
  );
};

export default MyPage;
