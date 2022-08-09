import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { IoIosArrowDown as ArrowButton } from 'react-icons/io';

const SelectF = (props) => {
  const DATABASE = [
    {
      id: '1',
      name: '필름1',
    },
    {
      id: '2',
      name: '필름2',
    },
    {
      id: '3',
      name: '필름3',
    },
    {
      id: '4',
      name: '필름4',
    },
    {
      id: '5',
      name: '필름5',
    },
    {
      id: '6',
      name: '필름6',
    },
    {
      id: '7',
      name: '필름7',
    },
    {
      id: '8',
      name: '필름8',
    },
  ];

  const [item, setItem] = useState(null);
  const [isSelected, setIsSelected] = useState(true);

  const onSelectItem = useCallback((e) => {
    const targetText = e.target.textContent;
    setItem(targetText);
  }, []);

  const onSubmit = (e) => {
    props.setSubmitF(item);
    props.handleModalF();
  };

  return (
    <>
      <Title>필름 선택</Title>
      <DropdownBody>
        {item ? (
          <>
            <ItemName>{item}</ItemName>
          </>
        ) : (
          <>
            <DropdownSelect>필름 종류를 선택하세요</DropdownSelect>
          </>
        )}
        <ArrowButton size={20} color='#747474' />
      </DropdownBody>

      <DropdownMenu>
        {DATABASE.map((item) => (
          <DropdownItem
            id={item.id}
            key={item.id}
            onClick={onSelectItem}
            select={isSelected === item.id ? 'true' : 'false'}
          >
            <ItemName id={item.id} name='camera' value={item.name}>
              {item.name}
            </ItemName>
          </DropdownItem>
        ))}
      </DropdownMenu>
      <SubmitButton onClick={onSubmit}>추가</SubmitButton>
    </>
  );
};

export default SelectF;

const Title = styled.div`
  font-size: 30px;
  font-weight: 600;
  color: #ffb800;

  margin-bottom: 16px;
`;

const DropdownBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 40px;
  border: 1px solid #747474;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 300;
  color: #b6b4b4;
  padding-left: 8px;
  padding-right: 16px;
`;

const DropdownSelect = styled.span``;

const DropdownMenu = styled.ul`
  list-style: none;
  padding-left: 0px;
  width: 300px;
  height: 450px;
  border: 1px solid #747474;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 300;

  padding-left: 8px;
  padding-right: 16px;
`;

const DropdownItem = styled.li`
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #ffb800;
    color: #ffffff;
    font-weight: 400;
  }

  background-color: ${(props) => (props.select ? '#ffffff' : '#ffb800')};
`;

const ItemName = styled.span``;

const SubmitButton = styled.button`
  width: 80px;
  height: 40px;
  background-color: #ffb800;
  border-radius: 10px;
  border: none;
  color: #ffffff;
  font-size: 14px;
  cursor: pointer;
`;
