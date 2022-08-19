import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ModalUpload from '../uploadpost/ModalUpload';
import { GoFileDirectory as ScrapIcon } from 'react-icons/go';

// import './MainBoard.css';

const MainBorad = (props) => {
  const [isModal, setIsModal] = useState(false);
  const [posts, setPosts] = useState([]);
  const [postId, setPostId] = useState('');

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    await axios.get('http://localhost:8888/posts').then((response) => {
      setPosts(response.data);
    });
  };

  const handleModal = () => {
    setIsModal(!isModal);
    document.body.style.overflow = 'unset';
  };

  const propsPost = (id) => {
    setPostId(id);
  };

  return (
    <>
      <Wrapper>
        <Container>
          {posts.map((post) => {
            return (
              <>
                <ImageContainer>
                  <img
                    key={post.id}
                    id={post.id}
                    src={post.image}
                    onClick={handleModal}
                  />
                </ImageContainer>
              </>
            );
          })}
        </Container>
      </Wrapper>
      {/* {isModal && (
        <ModalUpload handleModal={handleModal}>
          <PostWrapper>
            <ProfileArea></ProfileArea>
            <ImageArea>{postId}</ImageArea>
          </PostWrapper>
        </ModalUpload>
      )} */}
    </>
  );
};

export default MainBorad;

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

    &:hover {
      cursor: pointer;
      filter: brightness(70%);
    }
  }
`;

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProfileArea = styled.div`
  width: 500px;
  border: solid;
`;

const ImageArea = styled.div`
  width: 700px;
  height: 600px;
  border: 1px solid #bababa;
  border-radius: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-right: 20px;
  z-index: 500;
  position: absolute;

  img {
    width: 100%;
    object-fit: contain;
    position: absolute;
    z-index: 500;
  }
`;

const OthersWrapper = styled.div``;

const InfoContainer = styled.div``;

const TextContainer = styled.div``;

const CommentContainer = styled.div``;
