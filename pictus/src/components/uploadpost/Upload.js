import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as ImageIcon } from '../../static/imageicon.svg';
import axios from 'axios';
import ModalSelect from '../selectbox/ModalSelect';
import SelectC from '../selectbox/SelectC';
import SelectF from '../selectbox/SelectF';
import TagArea from './TagArea';
import ContentArea from './ContentArea';

const Upload = () => {
  const imageInput = useRef();
  const [isModalC, setIsModalC] = useState(false);
  const [isModalF, setIsModalF] = useState(false);
  const [imageBase64, setImageBase64] = useState('');
  const [imageFile, setImageFile] = useState('');
  const [submitC, setSubmitC] = useState('');
  const [submitF, setSubmitF] = useState('');
  const [submitTag, setSubmitTag] = useState([]);
  const [submitContent, setSubmitContent] = useState('');

  const handleModalC = () => {
    setIsModalC(!isModalC);
  };
  const handleModalF = () => {
    setIsModalF(!isModalF);
  };
  const onClickImgUpload = () => {
    imageInput.current.click();
  };

  const imageHandler = (e) => {
    const newImage = e.target.files[0];
    setImageFile(newImage);
  };

  const previewHandler = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result;
      if (base64) {
        setImageBase64(base64.toString());
      }
    };
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      setImageFile(e.target.files[0]);
    }
  };
  const submitPost = async (e) => {
    e.preventDefault();

    alert(submitC + '\n' + submitF + '\n' + submitTag + '\n' + submitContent);

    const formData = new FormData();
    formData.append('file', imageFile);
    formData.append('camera', submitC);
    formData.append('film', submitF);
    formData.append('tag', submitTag);
    formData.append('content', submitContent);

    await axios({
      method: 'post',
      url: 'http://localhost:8888/posts',
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  };

  return (
    <>
      <Wrapper>
        <ImageArea
          onChange={previewHandler}
          type='file'
          id='uploadImg'
          name='uploadImg'
          accept='.jpg, .jpeg, .png'
        >
          {imageBase64 ? (
            <Preview>
              <img src={imageBase64} alt='imagepreview' />
            </Preview>
          ) : null}
          <ImageIcon onClick={onClickImgUpload} />
          <br />
          <ImageFile
            type='file'
            id='ex_file'
            accept='.jpg, .jpeg, .png'
            ref={imageInput}
            onChange={imageHandler}
          ></ImageFile>
          <span
            style={{ color: '#747474', fontWeight: '500' }}
            onClick={onClickImgUpload}
          >
            이미지를 드래그 혹은 업로드 해주세요.
          </span>
          <span
            style={{ color: '#B6B4B4', fontSize: '14px', fontWeight: '300' }}
          >
            JPG JPEG PNG 이미지 파일
          </span>
        </ImageArea>
        <DetailArea>
          <DetailBox>
            <SelectDetail>
              <SelectCamera onClick={handleModalC}>
                {submitC === '' ? '카메라' : submitC}
              </SelectCamera>
              <CameraCSS />
              <SelectFilm onClick={handleModalF}>
                {submitF === '' ? '필름' : submitF}
              </SelectFilm>
              <FilmCSS />
            </SelectDetail>
          </DetailBox>

          <DetailBox>
            <DetailWrapper>
              <span style={{ fontWeight: '500' }}> 태그</span>
              <TagArea setSubmitTag={setSubmitTag} />
            </DetailWrapper>
          </DetailBox>
          <DetailBox>
            <DetailWrapper>
              <span style={{ fontWeight: '500' }}> 내용</span>
              <ContentArea setSubmitContent={setSubmitContent} />
            </DetailWrapper>
          </DetailBox>
          <CommentWrapper>{/* <CommentToggle /> */}</CommentWrapper>
          <SubmitButton onClick={submitPost}>제출버튼</SubmitButton>
        </DetailArea>
      </Wrapper>
      {isModalC && (
        <ModalSelect handleModal={handleModalC}>
          <SelectC
            handleModalC={handleModalC}
            submitC={submitC}
            setSubmitC={setSubmitC}
          />
        </ModalSelect>
      )}
      {isModalF && (
        <ModalSelect handleModal={handleModalF}>
          <SelectF
            handleModalF={handleModalF}
            submitF={submitF}
            setSubmitF={setSubmitF}
          />
        </ModalSelect>
      )}
    </>
  );
};

export default Upload;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
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
`;

const ImageFile = styled.input`
  display: none;
`;

const Preview = styled.div`
  z-index: 100;
  position: absolute;
  box-sizing: border-box;
  border-radius: 10px;
  width: 700px;
  height: 600px;
  display: flex;
  text-align: center;

  img {
    width: 100%;
    border-radius: 10px;
    object-fit: contain;
  }
`;

const DetailArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const DetailBox = styled.div`
  width: 450px;
  height: 140px;
  border-radius: 10px;
  background-color: #f3f3f3;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 12px;
`;

const SelectDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 140px;
`;

const SelectCamera = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 40px;
  border-radius: 10px;
  background-color: #ffffff;
  cursor: pointer;
  font-weight: 400;

  top: 100px;
  padding-left: 20px;
  padding-right: 10px;
`;

const SelectFilm = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 40px;
  border-radius: 10px;
  background-color: #ffffff;
  cursor: pointer;
  font-weight: 400;

  top: 150px;
  padding-left: 20px;
  padding-right: 10px;
`;

const CameraCSS = styled.div`
  position: absolute;
  top: 100px;
  margin-right: 138px;

  height: 40px;
  width: 10px;
  background-color: #ffb800;
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
`;

const FilmCSS = styled.div`
  position: absolute;
  top: 150px;
  margin-right: 138px;

  height: 40px;
  width: 10px;
  background-color: #ff7043cc;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
`;

const InputDetail = styled.textarea`
  width: 400px;
  height: 60px;
  border-radius: 8px;
  border: none;
  margin-top: 12px;
  outline: none;
  resize: none;
  font-size: 15px;
`;

const CommentWrapper = styled.div`
  width: 150px;
  height: 50px;
`;

const SubmitButton = styled.button``;
