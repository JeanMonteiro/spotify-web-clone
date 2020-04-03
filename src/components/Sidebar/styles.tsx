import styled from "styled-components";
import px2vw from "src/utils/px2vw";
import { ReactComponent as Logo } from "src/assets/logo.svg";

export const StyledLogo = styled(Logo)`
  width: ${px2vw(135)};
  margin-bottom: ${px2vw(25)};
`;

export const Container = styled.div`
  background-color: #030403;
  width: 200px;
  color: #fff;
  padding-left: ${px2vw(15)};
  padding-right: ${px2vw(15)};
  padding-top: ${px2vw(15)};
  padding-bottom: ${px2vw(15)};
`;

export const SideItem = styled.div`
  width: 100%;
  flex-direction: row;
  flex: 1;
  display: flex;
  margin-bottom: ${px2vw(15)};
  transition-timing-function: linear;
  transition-property: color;
  transition-duration: 0.2s;
  color: #b3b3b3;
  :hover {
    color: #fff;
    cursor: pointer;
  }
`;

export const SideItemText = styled.span`
  align-self: center;
  margin-left: ${px2vw(15)};
  font-weight: bold;
`;
