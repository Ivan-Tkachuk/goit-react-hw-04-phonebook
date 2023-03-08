import styled from '@emotion/styled';
import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikError,
} from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: 400px;

  margin: 0px;
  padding: 10px;

  border: 2px solid black;
`;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;

  font-size: 18px;

  width: 200px;
`;

export const Field = styled(FormikField)`
  margin-top: 5px;
  outline: grey;
  border: 1px solid grey;

  &:focus {
    box-shadow: 0px 0px 0px 2px rgba(0, 144, 237, 0.4);
    border: transparent;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 5px 10px;

  font-size: 12px;
  font-weight: 600;

  width: 120px;

  &:active {
    background-color: blue;
    border: none;
  }
`;

export const ErrorMessage = styled(FormikError)`
  font-size: 12px;
  color: tomato;
`;
