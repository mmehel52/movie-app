import styled from "styled-components";

const FooterStyled = styled.div`
  color: white;
  padding-top: 1rem;
  margin-top: -1rem;
  height: 8rem;
  flex-direction: row;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.header};
`;

export const Icon = styled.img`
  width: 40px;
  margin: 10px;
`;

export default FooterStyled;
