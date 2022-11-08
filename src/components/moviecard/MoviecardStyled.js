import styled from "styled-components";
import Flex from "../../components/global/Flex";
const MovieCard = styled(Flex)`
  flex-direction: column;
  width: 18rem;
  height: 26rem;
  position: relative;
  overflow: hidden;
  &:hover {
    cursor: pointer;
  }
`;
export const CardImg = styled.img`
  width: 18rem;
  height: 20rem;
`;
export const Pp = styled.p`
  padding: 4px;
  margin: 4px;
  font-size: 19px;
  align-self: center;
`;
export const Overview = styled.p`
  color: white;
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 1.1rem;
  background-color: rgba(180, 180, 180, 0.8);
  transform: translateX(100%);
  z-index: 1;
  transition: transform 0.7s ease-in-out;
  ${MovieCard}:hover & {
    transform: translateX(0%);
  }
`;
export const Det = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.header};
  color: white;
  width: 18rem;
  height: 6rem;
  font-size: 19px;
`;
export default MovieCard;
