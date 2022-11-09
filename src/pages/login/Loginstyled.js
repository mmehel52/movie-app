import styled from "styled-components";

const LoginStyled = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.text};
  min-height: 90vh;
`;
export const CardImg = styled.img`
  width: 55rem;
  border-right: 3px solid ${({ theme }) => theme.colors.header};
  @media (max-width: ${({ theme }) => theme.responsive}) {
    display: none;
  }
`;
export const Signin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50rem;
  @media (max-width: ${({ theme }) => theme.responsive}) {
    width: 90rem;
  }
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

export default LoginStyled;
