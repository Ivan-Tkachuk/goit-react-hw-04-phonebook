import styled from '@emotion/styled';

export const List = styled.ul`
  position: relative;
  left: 50%;
  transform: translate(-50%);

  list-style: disc;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Button = styled.button`
  background-color: transparent;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 5px 10px;
  margin-left: 20px;

  font-size: 12px;
  font-weight: 600;

  width: 60px;

  &:active {
    background-color: blue;
    border: none;
  }
`;

export const Text = styled.p`
  display: inline-block;
  margin: 0;
`;
