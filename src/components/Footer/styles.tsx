import styled from "styled-components";
import px2vw from "src/utils/px2vw";

export const Container = styled.div`
  background: #272827;
  position: absolute;
  bottom: 0;
  height: ${px2vw(80)};
  width: 100%;
`;
