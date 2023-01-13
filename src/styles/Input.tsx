import styled from "styled-components";
import { colors, rawColors } from "../locales/colors";
import { margin, Constants } from "./Constants";

export const InputBaseBox = styled.input`
  color: ${rawColors.white_700};
  display: flex;
  width: ${(props) => (props.theme.width ? props.theme.width : "20px")};
  height: ${(props) => (props.theme.height ? props.theme.height : "35px")};
  border-radius: 10px;
  rows: 2;
  border-width: 1px;
  border: 1px solid ${rawColors.green2_400};
  padding: 0px 0px 0px 5px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${colors.placeholderColor};
  }
  :-ms-input-placeholder {
    color: ${colors.placeholderColor};
  }
`;

export const InputButtonBox = styled.button`
  color: ${rawColors.white_700};
  display: flex;
  width: ${(props) => (props.theme.width ? props.theme.width : "20px")};
  height: ${(props) => (props.theme.height ? props.theme.height : "70px")};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  rows: 2;
  border-width: 1px;
  border: 1px solid ${rawColors.green2_400};
  padding: 0px 0px 0px 5px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${colors.placeholderColor};
  }
  :-ms-input-placeholder {
    color: ${colors.placeholderColor};
  }

  background-color: white;
`;

export const InputChoose = styled.select`
  color: ${rawColors.white_700};
  display: flex;
  width: ${(props) => (props.theme.width ? props.theme.width : "20px")};
  height: ${(props) => (props.theme.height ? props.theme.height : "75px")};
  border-radius: 10px;
  rows: 2;
  border-width: 1px;
  border: 1px solid ${rawColors.green2_400};
  padding: 0px 0px 0px 5px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${colors.placeholderColor};
  }
  :-ms-input-placeholder {
    color: ${colors.placeholderColor};
  }
`;

export const InputOrderBox = styled.div`
  margin: ${(props) => props.theme.marginY} ${margin.m}
    ${(props) => props.theme.marginY} ${margin.m};
`;

export const PopupWindowMainBox = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PopupWindowBox = styled.div`
  background-color: white;
  margin: 0 0 ${margin.mPrc} 0;
  width: 40%;
  padding: ${margin.xl};
  border-radius: 50px;
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const OptionBox = styled.option`
  border-width: 1px;
  border: 10px solid ${rawColors.green2_400};
  border-radius: 100px;
  padding: 100px;
`;

export const GrayButtonInput = styled.input`
  background-color: ${(props) =>
    props.theme ? props.theme : colors.buttonBorder};
  width: 100px;
  height: 40px;
  margin: ${margin.m} ${margin.xxl} ${margin.m} ${margin.xlPrc};
  border-width: 1px;
  border-color: ${rawColors.white_900};

  &:hover {
    filter: brightness(1.1);
    transition: 0.2s ease-out;
  }
  &:active {
    filter: brightness(1.15);
  }
`;

export const GrayButtonLogin = styled(GrayButtonInput)`
  margin: 15px 5% 5px 5%;
  height: 30px;
  width: 80px;
  font-family: "Irish Grover";
  font-size: ${Constants.font.m};
  font-variant: small-caps;
`;
