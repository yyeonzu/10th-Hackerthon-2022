import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ScrapArea = () => {
  return (
    <>
      <Wrapper>
        <Link
          to='/scrappage'
          style={{ textDecoration: 'none', color: 'black' }}
        >
          <AlbumContainer>
            <AlbumCover>
              <img src='width11.jpg' />
            </AlbumCover>
            <Text>캘리포니아</Text>
          </AlbumContainer>
        </Link>
        <AlbumContainer>
          <AlbumCover>
            <img src='width8.jpg' />
          </AlbumCover>
          <Text>Leica R4/Kodak Gold 200</Text>
        </AlbumContainer>
        <AlbumContainer>
          <AlbumCover>
            <img src='width13.jpg' />
          </AlbumCover>
          <Text>멋쟁이 필름처럼 3기</Text>
        </AlbumContainer>
      </Wrapper>
    </>
  );
};

export default ScrapArea;

const Wrapper = styled.div`
  display: flex;
  margin-left: 50px;
  margin-right: 50px;
`;

const AlbumContainer = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const AlbumCover = styled.div`
  width: 280px;
  height: 280px;
  border-radius: 10px;
  margin: 8px;
  text-align: center;
  box-sizing: border-box;

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`;

const Text = styled.div`
  padding: 8px;
  font-size: 20px;
`;
