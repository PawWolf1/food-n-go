import styled from "styled-components";
import { colors } from "../locales/colors";
import { CartBarWidthReq, margin } from "./Constants";
import { GridBox } from "./MainScreen";

export const ListHandleBox = styled.div`
  border: 1px solid ${colors.buttonbg};
  width: 70%;
  min-height: ${(props) => (props.theme === true ? null : "40px")};
  border-width: 0px 1px 1px 1px;
  border-radius: 0px 0px 50px 0px;
  margin: 15px 0px 15px 15%;
  display: flex;
  flex-direction: column;
`;
export const GridMyListBox = styled.div`
  flex: 1;
  width: ${(props) => (props.theme.width <= CartBarWidthReq ? `100%` : "80%")};
  display: flex;
  flex-direction: column;
  margin: ${margin.ml} 0 0 0;
`;

export const ListHandleButtonBox = styled.div`
  flex: 1;
  min-height: 40px;
  cursor: pointer;
  display: flex;
  padding: 0 0 0 5%;
  flex-direction: column;
  align-items: flex-start;
`;

export const ListFoodBox = styled.div`
  padding: 10px 10px 10px 0px;
  display: flex;
  flex-display: "column";
`;
export const ListButtonBox = styled.div`
  max-width: 30%;
  min-width: 300px;
  display: flex;
  align-items: center;
  padding: 10px 0 0 5%;
`;
