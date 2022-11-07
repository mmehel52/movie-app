import styled from "styled-components";
import Flex from "../../components/global/Flex";
const DetailStyled = styled(Flex)`
  flex-direction: column;
  gap: 5px;
  background-color: ${({ theme }) => theme.colors.body};
`;
export const CardImg = styled.img`
  width: 30rem;
  height: 40rem;
  border-radius: 10px 0 0 10px;
`;
export const Bottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-bottom: 10px;

  text-align: start;
  @media (max-width: ${({ theme }) => theme.responsive}) {
    flex-direction: row;
  }
`;
export const Detail = styled(Flex)`
  flex-direction: column;
  height: 40rem;
  width: 30rem;
  align-items: flex-start;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.header};
  border: 1px solid #d2d2d2;
  border-radius: 0 10px 10px 0;
  font-weight: 600;
  @media (max-width: ${({ theme }) => theme.responsive}) {
    justify-content: center;
  }
`;
export const Prf = styled.p`
  border-bottom: 1px solid #d2d2d2;
  width: 30rem;
  text-align: start;
`;
export const Video = styled.iframe`
  width: 50%;
  height: 60vh;
  padding: 5px;
  border: 1px solid #d2d2d2;
  border-radius: 10px;
  @media (max-width: ${({ theme }) => theme.responsive}) {
    width: 30rem;
    height: 20rem;
  }
`;
export default DetailStyled;
