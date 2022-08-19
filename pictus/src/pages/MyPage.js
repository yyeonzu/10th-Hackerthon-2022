import React, { useState } from 'react';
import axios from 'axios';
import Header from '../components/mainpage/Header';
import MenuBar from '../components/mypage/MenuBar';
import Profile from '../components/mypage/Profile';

const MyPage = () => {
  const getProfile = async () => {
    await axios
      .get('https://jain5379.pythonanywhere.com/users/profile/')
      .then((response) => {
        console.log(response.data);
      });
  };

  return (
    <>
      <Header />
      <Profile />
      <MenuBar />
    </>
  );
};

export default MyPage;
