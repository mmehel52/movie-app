import styled from "styled-components";
import { Link } from "react-router-dom";
import Flex from "../../components/global/Flex";
const NavbarStyled = styled(Flex)`
  height: 5rem;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.header};
`;
export const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 1.5rem;
  margin: 0 1rem;
  &:hover {
    color: ${({ theme }) => theme.colors.body};
    font-weight: bold;
  }
  @media (max-width: ${({ theme }) => theme.responsive}) {
    width: 100%;
    text-align: center;
  }
`;

export const MenuDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export default NavbarStyled;
