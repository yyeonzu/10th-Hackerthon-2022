import React from 'react';
import styled from 'styled-components';
import Header from '../components/mainpage/Header';
import MainBorad from '../components/mainpage/MainBoard';
import Borad from '../components/scrappage/Board';
import ScrapProfile from '../components/scrappage/ScrapProfile';
import SortView from '../components/scrappage/SortView';

const ScrapPage = () => {
  return (
    <>
      <Header />
      <ScrapProfile />
      <SortView />
      <Borad />
    </>
  );
};

export default ScrapPage;
