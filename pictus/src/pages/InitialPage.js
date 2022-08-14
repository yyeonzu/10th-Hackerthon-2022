import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo2 } from '../static/logo2.svg';
import { ReactComponent as Picture } from '../static/indexPic.svg';
import LoginBox from '../components/signin/LoginBox';
import SignUpBox from '../components/signup/SignupBox';
import { useNavigate } from 'react-router-dom';

const InitialPage = (props) => {
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <Wrapper>
        <Introducediv>
          <ColorBlock>
            <TextWrapper>
              <LogoWrapper>
                <Logo2 />
              </LogoWrapper>
              <Text>
                카메라와 필름을 선택하여 다양한 사진을 탐색하고 나만의 앨범에
                스크랩해보세요
              </Text>
            </TextWrapper>
          </ColorBlock>
          <PictureBlock>
            <Picture />
          </PictureBlock>
        </Introducediv>
        <LoginWrapper>
          {isSignup ? (
            <SignUpBox setIsSignup={setIsSignup} />
          ) : (
            <LoginBox setIsSignup={setIsSignup} />
          )}
        </LoginWrapper>
      </Wrapper>
    </>
  );
};

export default InitialPage;

const Wrapper = styled.div`
  display: flex;
`;

const LogoWrapper = styled.div`
  svg {
    width: 30vh;
  }
`;

const Introducediv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 45vw;
  height: 100vh;
`;

const TextWrapper = styled.div`
  margin-left: 30px;
`;

const ColorBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: #ffb800;
  height: 57vh;
  border: none;
`;

const Text = styled.div`
  width: 550px;
  font-size: 28px;
  font-weight: 600;
  color: #ffffff;
  margin-top: 20px;
  margin-bottom: 50px;
`;

const PictureBlock = styled.div`
  margin-top: 20px;

  svg {
    width: 45vw;
    height: auto;
  }
`;

const LoginWrapper = styled.div`
  margin-top: 30px;
  width: 60vw;
`;
