import styled from "styled-components";
import { colors, rawColors } from "../locales/colors";
import { margin } from "./Constants";
import { SerifTextS } from "./TextStyles";

export const Button = styled.button`
  background-color: ${(props) =>
    props.theme ? props.theme : colors.buttonBorder};
  width: 100%;
  border-width: 1px;
  border-color: ${rawColors.white_900};
  &:hover {
    cursor: pointer;
    filter: brightness(1.03);
    transition: 0.2s ease-out;
  }
  &:active {
    filter: brightness(1.15);
  }
`;

export const ButtonProduct = styled.button`
  width: ${(props) => props.theme.size};
  height: ${(props) => props.theme.size};
  background-color: ${(props) =>
    props.theme.isActive === false ? colors.buttonColor1 : colors.buttonbg};
  border-radius: ${(props) => (props.theme.sqr ? "0px" : "100000px")};
  border: 2px solid ${colors.buttonBorder};
  display: flex;
  margin: 0px ${margin.xxs} 0px ${margin.xxs};
  justify-content: center;
  align-items: center;
  &:active {
    ${(props) =>
      props.theme.isActive !== false ? `filter: brightness(1.15)` : null}
  }
  ${(props) =>
    props.theme.isActive !== false || props.theme.icon === "info"
      ? `&:hover {
    cursor: pointer;
    filter: brightness(
      ${(props: any) => (props.theme.isActive === false ? "1" : `1.1`)}
    );
    transition: 0.2s ease-out;
  }`
      : null}
`;

export const IconButton = styled.svg`
  &:hover {
    filter: brightness(1.03);
    transition: 0.2s ease-out;
    cursor: pointer;
  }
  &:active {
    filter: brightness(1.15);
  }
`;

export const GrayButton = styled.button`
  border-width: 1px;
  margin: 2px;
  cursor: pointer;
  &:hover {
    filter: brightness(1.03);
    transition: 0.2s ease-out;
    cursor: pointer;
  }
  &:active {
    filter: brightness(1.15);
  }
`;

export const FilterCategoryButton = styled(GrayButton)`
  margin: ${margin.xs} ${margin.xs} 0px ${margin.xs};
  user-select: none;
`;

export const TxtButton = styled(SerifTextS)`
  flex: 1;
  color: ${(props) =>
    props.theme === true ? rawColors.green1_300 : undefined};
  font-weight: ${(props) => (props.theme === true ? `bold` : `300`)};
  &:hover {
    transition: 0.2s ease-out;
    cursor: pointer;
    font-weight: 900;
  }
  &:active {
    filter: brightness(1.15);
  }
`;

export const GrayButtonPopup = styled(GrayButton)`
  border-width: 1px;
  width: 90%;
  height: 30px;
  margin: 0% ${margin.sPrc} 0% ${margin.sPrc};
  &:hover {
    filter: brightness(1.1);
    transition: 0.2s ease-out;
    cursor: pointer;
  }
  &:active {
    filter: brightness(1.15);
  }
`;

export const LoginMenuButton = styled(Button)`
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${rawColors.green1_200};
  border-width: 0px 0px 1px 0px;
`;
