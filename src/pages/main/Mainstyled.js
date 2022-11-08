import styled from "styled-components";
import Flex from "../../components/global/Flex";
const MainStyled = styled(Flex)`
  min-height: 40rem;
  padding: 3rem;
  flex-wrap: wrap;
  gap: 2rem;
  background-color: ${({ theme }) => theme.colors.body};
`;
export const CardImg = styled.img`
  width: 15rem;
  padding: 1rem;
`;
export const InputBar = styled.input`
  width: 15rem;
  height: 1.5rem;
  border: none;
  border-radius: 10px;
`;
export const Search = styled.button`
  background-color: ${({ theme }) => theme.colors.text};
  width: 5rem;
  height: 2rem;
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 20px;
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.body};
  }
`;
export const SearchBar = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.text};
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
export default MainStyled;
