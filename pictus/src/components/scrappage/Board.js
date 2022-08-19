import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ModalUpload from '../uploadpost/ModalUpload';

const Borad = () => {
  const [isModal, setIsModal] = useState(false);
  const [posts, setPosts] = useState([]);

  const handleModal = () => {
    setIsModal(!isModal);

    document.body.style.overflow = 'unset';
  };

  const getPosts = async () => {
    await axios.get('http://localhost:8888/posts2').then((response) => {
      setPosts(response.data);
    });
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      {/* <Wrapper>
        <Container className='mainboard__container'>
          {posts.map((post) => {
            return (
              <ImageWrapper key={post.id}>
                <ImageContainer>
                  <div>
                    <img id={post.id} src={post.image} onClick={handleModal} />
                  </div>
                </ImageContainer>
              </ImageWrapper>
            );
          })}
        </Container>
      </Wrapper> */}
      <Wrapper>
        <Container>
          {posts.map((post) => {
            return (
              <>
                <ImageContainer>
                  <img id={post.id} src={post.image} onClick={handleModal} />
                </ImageContainer>
              </>
            );
          })}
        </Container>
      </Wrapper>

      {isModal && <ModalUpload handleModal={handleModal} />}
    </>
  );
};

export default Borad;

const Wrapper = styled.div`
  display: flex;
  margin-left: 42px;
  margin-right: 42px;
`;

const Container = styled.div`
  /* display: flex; */
  /* justify-content: space-between; */
  /* column-count: 5; */
  column-width: 320px;
  margin: 0 auto;
`;

const ImageContainer = styled.div`
  display: inline-block;
  padding: 8px;

  img {
    width: 320px;
    border-radius: 10px;
  }
`;
