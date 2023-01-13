import styled from "styled-components";
import { colors, rawColors } from "../locales/colors";

export const HeaderBox = styled.div`
  background-color: ${colors.buttonbgUnact};
  height: 50px;
  position: fixed;
  width: 100%;
  top: 0;
  display: flex;
  justify-content: center;
  z-index: 10;
  box-shadow: 0 2px 20px 0;
`;

export const TitleTxt = styled.div`
  flex: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  background-color: ${colors.bg};
`;

export const LoginBox = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1;
  background-color: ${colors.bg};
`;

export const LogoBox = styled.div`
  flex: 1;
  display: flex;
  height: 100%;
  align-items: center;
  z-index: 2;
  background-color: ${colors.bg};
`;

export const LogoSubBox = styled.div`
  margin-left: 25%;

  &:hover {
    cursor: pointer;
    filter: brightness(1.1);
    transition: 0.2s ease-out;
  }
  &:active {
    filter: brightness(1.15);
  }
`;
