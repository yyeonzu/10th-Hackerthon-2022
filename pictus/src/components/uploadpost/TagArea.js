import React, { useState } from 'react';
import styled from 'styled-components';

const TagArea = (props) => {
  const [tagItem, setTagItem] = useState('');
  const [tagList, setTagList] = useState([]);

  const onKeyPress = (e) => {
    if (e.target.value.length !== 0 && e.key === 'Enter') {
      submitTagItem();
    }
  };

  const submitTagItem = () => {
    setTagList([...tagList, tagItem]);
    props.setSubmitTag(tagList);
    setTagItem('');
  };

  const deleteTagItem = (e) => {
    const deleteItem = e.target.innerText;
    setTagList(tagList.filter((tagItem) => tagItem !== deleteItem));
  };

  return (
    <>
      <TagBox>
        {tagList.map((tagItem, index) => {
          return (
            <div onClick={deleteTagItem} key={index}>
              <TagItem>{tagItem}</TagItem>
            </div>
          );
        })}

        <Input
          type='text'
          placeholder='해시태그 입력'
          tabIndex={2}
          onChange={(e) => setTagItem(e.target.value)}
          value={tagItem}
          onKeyPress={onKeyPress}
        />
      </TagBox>
    </>
  );
};

export default TagArea;

const TagBox = styled.div`
  display: flex;
  width: 400px;
  height: 60px;
  background-color: #ffffff;
  border: solid 1px #ffffff;
  border-radius: 10px;

  padding-top: 6px;
  padding-left: 4px;
  margin-top: 12px;

  /* &:focus-within {
    border-color: #ffb800;
  } */
`;

const TagItem = styled.span`
  color: #2b8afa;
  padding-right: 4px;
  font-size: 14px;
  font-weight: 500;
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  height: 1.2rem;
  font-size: 14px;
`;
