import styled from "styled-components";
import { colors } from "../locales/colors";
import { CartBarWidthReq } from "./Constants";

export const CartBox = styled.div`
  position: fixed;
  right: 0;
  height: 92%;
  width: ${(props) => (props.theme.width <= CartBarWidthReq ? `0%` : "20%")};
  min-width: ${(props) =>
    props.theme.width <= CartBarWidthReq ? `0%` : "180px"};
  overflow: hidden;
  z-index: 0;
  background-image: url(${(props) => props.theme.img});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

export const CardSliderBox = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: ${colors.bgOp60};
  margin-left: 100%;
  z-index: -4;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const CartMainBox = styled.div`
  scroll-behaviour: smooth;
  overflow-y: scroll;
  overflow-x: hidden;
  box-sizing: content-box;
  width: 105%;
  height: 100%;
  padding-right: 30px;
  padding-left: 40px;
`;

export const CartDownBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
`;

export const CartDownButtonBox = styled.div`
  justify-content: space-evenly;
  display: flex;
  align-items: flex-start;
  width: 100%;
  padding: 10px;
`;
