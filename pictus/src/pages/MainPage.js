import React, { useState } from 'react';
import Header from '../components/mainpage/Header';
import MainBorad from '../components/mainpage/MainBoard';
import SelectedBar from '../components/mainpage/SelectedBar';
import SelectHeader from '../components/mainpage/SelectHeader';

const MainPage = () => {
  const [camera, setCamera] = useState('');
  const [film, setFilm] = useState('');

  return (
    <>
      <Header />
      <SelectHeader setCamera={setCamera} setFilm={setFilm} />
      <SelectedBar camera={camera} film={film} />
      <MainBorad />
    </>
  );
};

export default MainPage;
