import styled from '@emotion/styled';

export const Label = styled.label`
  display: flex;
  flex-direction: column;

  font-size: 18px;

  width: 200px;
`;

export const Input = styled.input`
  margin-top: 5px;
  outline: grey;
  border: 1px solid grey;

  &:focus {
    box-shadow: 0px 0px 0px 2px rgba(0, 144, 237, 0.4);
    border: transparent;
  }
`;
