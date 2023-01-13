import styled from "styled-components";
import { colors, rawColors } from "../locales/colors";
import { Constants } from "./Constants";

export const Text = styled.label`
  font-style: normal;
  font-variant: small-caps;
  user-select: none;
  text-align: center;
  overflow: hidden;
  font-style: normal;
  line-height: 18px;
`;

export const FoodBoxText = styled(Text)`
  width: 100%;
  font-family: "PT Serif Caption";
  font-size: ${Constants.font.m};
  font-variant: small-caps;
  font-weight: 100;
`;

export const SerifText = styled(Text)`
  font-family: "PT Serif Caption";
  font-size: 130%;
  font-variant: small-caps;
  font-weight: 100;
  line-height: 24px;
  padding: 2px;
`;

export const SerifTextN = styled(SerifText)`
  font-size: 100%;
  line-height: 12px;
`;

export const SerifTextS = styled(Text)`
  font-family: "PT Serif Caption";
  font-size: ${Constants.font.s};
  font-style: normal;
  font-variant: small-caps;
  font-weight: 100px;
  width: 100%;
`;

export const SerifTextSS = styled(Text)`
  font-family: "PT Serif Capion";
  font-size: ${Constants.font.xs};
  font-variant: small-caps;
  font-weight: 100px;
`;

export const OswaldText = styled.section`
  font-family: Oswald;
  font-size: ${Constants.font.xxl};
  font-style: normal;
  font-variant: normal;
  font-weight: 700;
  color: ${colors.errorColor}};
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  position: absolute;
  margin-top: 60px;
  text-align: center;
  user-select: none;
  width: ${Constants.size.foodPhotoSize};
`;

export const IrishText = styled(Text)`
  font-family: "Irish Grover";
  font-size: ${Constants.font.xxl};
  font-variant: small-caps;
  line-height: 24px;
  padding: 2px;
`;

export const LinkTextBox = styled(SerifTextS)`
  display: flex;
  width: 90px;
  height: 20px;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled(IrishText)`
  font-size: 150%;
  &:hover {
    cursor: pointer;
  }
`;

export const ErrorInputText = styled(Text)`
  font-size: ${Constants.font.xs};
  color: ${colors.errorColor};
  width: ${(props) => (props.theme ? props.theme : "160px")};
  text-align: left;
`;

export const InputTitleText = styled(SerifTextS)`
  font-size: ${Constants.font.m};
`;

export const InputSectionText = styled(SerifText)`
  margin: 0 0 0 6%;
`;

export const SerifTextL = styled(SerifText)`
  text-align: center;
  background-color: red;
`;

export const SerifTextSL = styled(SerifTextS)`
  text-align: left;
  margin: 0 0 0 40px;
`;

export const SerifTextBigL = styled(SerifTextS)`
  text-align: left;
  font-family: "PT Serif Caption";
  font-size: 130%;
  font-variant: small-caps;
  font-weight: 100;
  line-height: 24px;
  padding: 2px;
  margin: 0 0 0 40px;
  font-size: ${Constants.font.m};
`;
