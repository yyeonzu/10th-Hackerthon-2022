import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { IoIosArrowDown as ArrowButton } from 'react-icons/io';

const Select = (props) => {
  const DATABASE = [
    {
      id: '1',
      name: '카메라 1',
    },
    {
      id: '2',
      name: '카메라 2',
    },
    {
      id: '3',
      name: '카메라 3',
    },
    {
      id: '4',
      name: '카메라 4',
    },
    {
      id: '5',
      name: 'Kodak Retina Reflex III',
    },
    {
      id: '6',
      name: '카메라 2',
    },
    {
      id: '7',
      name: '카메라 3',
    },
    {
      id: '8',
      name: '카메라 4',
    },
    {
      id: '9',
      name: '카메라 1',
    },
    {
      id: '10',
      name: '카메라 2',
    },
    {
      id: '11',
      name: '카메라 3',
    },
    {
      id: '12',
      name: '카메라 4',
    },
    {
      id: '13',
      name: '카메라 1',
    },
    {
      id: '14',
      name: '카메라 2',
    },
    {
      id: '15',
      name: '카메라 3',
    },
    {
      id: '16',
      name: '카메라 4',
    },
    {
      id: '17',
      name: '카메라 1',
    },
    {
      id: '18',
      name: '카메라 2',
    },
    {
      id: '19',
      name: '카메라 3',
    },
    {
      id: '20',
      name: '카메라 4',
    },
    {
      id: '21',
      name: '카메라 3',
    },
    {
      id: '22',
      name: '카메라 4',
    },
    {
      id: '23',
      name: '카메라 1',
    },
    {
      id: '24',
      name: '카메라 2',
    },
    {
      id: '25',
      name: '카메라 3',
    },
    {
      id: '26',
      name: '카메라 4',
    },
  ];

  const [item, setItem] = useState(null);
  const [isSelected, setIsSelected] = useState(true);

  const onSelectItem = useCallback((e) => {
    const targetText = e.target.textContent;
    setItem(targetText);
  }, []);

  const onSubmit = (e) => {
    props.setSubmitC(item);
    props.handleModalC();
  };

  return (
    <>
      <Title>카메라 선택</Title>
      <DropdownBody>
        {item ? (
          <>
            <ItemName>{item}</ItemName>
          </>
        ) : (
          <>
            <DropdownSelect>카메라 종류를 선택하세요</DropdownSelect>
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

export default Select;

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

  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #d9d9d9;
  }

  /* &::-webkit-scrollbar-button {
    width: 0;
    height: 0;
  } */
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
