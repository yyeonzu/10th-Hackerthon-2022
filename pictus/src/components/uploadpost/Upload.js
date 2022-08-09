import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as ImageIcon } from '../../static/imageicon.svg';
import axios from 'axios';

const Upload = () => {
  const imageInput = useRef();
  const [imageBase64, setImageBase64] = useState('');
  const [imageFile, setImageFile] = useState('');
  const [tag, setTag] = useState('');
  const [content, setContent] = useState('');
  const [camera, setCamera] = useState('');
  const [film, setFilm] = useState('');

  const onClickImgUpload = () => {
    imageInput.current.click();
  };

  const imageHandler = (e) => {
    const newImage = e.target.files[0];
    setImageFile(newImage);
  };

  const tagHandler = (e) => {
    const newTag = e.target.value;
    setTag(newTag);
  };

  const contentHandler = (e) => {
    const newContent = e.target.value;
    setContent(newContent);
  };

  const cameraHandler = (e) => {
    const newCamera = e.target.value;
    setCamera(newCamera);
    console.log(newCamera);
  };

  const filmHandler = (e) => {
    const newfilm = e.target.value;
    setFilm(newfilm);
    console.log(newfilm);
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
    console.log(imageFile);
    console.log(tag);
    console.log(content);

    const formData = new FormData();
    formData.append('file', imageFile);
    formData.append('tag', tag);
    formData.append('content', content);
    // formData.append('camera', camera);
    // formData.append('film', film);

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
            <SelectDetail></SelectDetail>
          </DetailBox>

          <DetailBox>
            <DetailWrapper>
              <span style={{ fontWeight: '500' }}> 태그</span>
              <InputDetail
                placeholder='태그를 입력하세요'
                onChange={tagHandler}
              ></InputDetail>
            </DetailWrapper>
          </DetailBox>
          <DetailBox>
            <DetailWrapper>
              <span style={{ fontWeight: '500' }}> 내용</span>
              <InputDetail
                placeholder='내용을 입력하세요'
                onChange={contentHandler}
              ></InputDetail>
            </DetailWrapper>
          </DetailBox>
          <CommentWrapper>{/* <CommentToggle /> */}</CommentWrapper>
          <SubmitButton onClick={submitPost}>제출버튼</SubmitButton>
        </DetailArea>
      </Wrapper>
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
  z-index: 200;
  position: absolute;
  box-sizing: border-box;
  border-radius: 10px;
  width: 700px;
  height: 600px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
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
