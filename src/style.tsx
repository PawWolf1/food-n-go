import styled from "styled-components";
import { rawColors, colors } from "./locales/colors";
import { CartBarWidthReq, margin } from "./styles/Constants";

export const FooterBox = styled.div`
  background-color: ${colors.bg};
  height: 90px;
  width: 100%;
  border: 2px solid ${colors.foodBorder};
  border-width: 1px 0px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainBodyBox = styled.div`
  background-color: ${colors.bg};
  min-height: 100%;
  margin-top: ${margin.xxl};
  display: flex;
  flex-direction: column;
`;

export const FoodBox = styled.div`
  border: 2px solid red;
  border-radius: 30px;
  margin: ${margin.m};
  display: flex;
  flex-direction: column;
`;

export const GridBox = styled.div`
  flex: 1;
  min-height: 200px;
  max-height: 100%;
  width: ${(props) => (props.theme.width <= CartBarWidthReq ? `100%` : "80%")};
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

export const GridBox2 = styled.form`
  width: ${(props) => (props.theme.width <= CartBarWidthReq ? `100%` : "80%")};
  padding: 2% 0px 0px 0px;
  z-index: 1;
  // display: flex;
`;

export const FlexPart = styled.div`
  display: flex;
  flex: ${(props) => props.theme};
  justify-content: center;
  align-items: center;
`;

export const Flex = styled.div`
  display: flex;
`;
