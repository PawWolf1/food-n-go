import styled from "styled-components";
import { colors, rawColors } from "../locales/colors";

export const MainMenuBox = styled.div`
  background-color: ${colors.bg};
  display: flex;
  min-width: 200px;
  width: 20%;
  position: absolute;
  right: 0px;
  top: -280px;
  outline: 1px solid ${rawColors.green1_200};
  outline-offset: -1px;
  flex-direction: column;
  ${(props) =>
    props.theme === true
      ? `  {
    position: fixed;
    transform: translate(0%, 330px);
    transition: 0.3s ease-out;
    box-shadow: 0 4px 8px 0;
  }`
      : `  {
        position: fixed;
        transform: translate(0%, 0%);
        transition: 0.3s ease-out;
      }`};
`;

export const LoginBox = styled.div`
  width: 100%;
  flex: 5;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;
