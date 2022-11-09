import styled from "styled-components";

const RegisterStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.text};
  height: 580px;
`;

export const Input = styled.input`
  width: 20rem;
  margin-bottom: 2rem;
  height: 1.5rem;
  border-radius: 10px;
`;
export const Btn = styled.button`
  width: 20rem;
  height: 1.7rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.text};
  border: 2px solid white;
  color: white;
  font-size: 20px;
  font-weight: 500;
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.body};
    border: none;
  }
`;

export default RegisterStyled;
