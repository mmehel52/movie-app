import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarStyled = styled.div`
  display: flex;
  min-height: 5rem;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.header};
  @media (max-width: ${({ theme }) => theme.responsive}) {
    flex-direction: column;
    justify-content: center;
  }
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
`;

export const MenuDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.responsive}) {
    flex-direction: column;
    justify-content: center;
  }
`;
export const Avatar = styled.img`
  width: 3rem;
  border-radius: 50%;
  margin: 2px;
`;

export default NavbarStyled;
