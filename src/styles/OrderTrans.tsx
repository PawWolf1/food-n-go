import styled from "styled-components";
import { rawColors, colors } from "../locales/colors";
import { CartBarWidthReq, margin } from "./Constants";

export const FormBox = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 45% 45%;
  margin: 0px 0px 0px
    ${(props) => (props.theme.width <= CartBarWidthReq ? `20%` : "0%")};
  justify-content: center;
`;

export const FormSpecialBox = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 45%;
  margin: 0px 0px 0px
    ${(props) => (props.theme.width <= CartBarWidthReq ? `20%` : "5%")};
`;

export const GridBox = styled.form`
  width: ${(props) => (props.theme.width <= CartBarWidthReq ? `100%` : "80%")};
  padding: 2% 0px 0px 0px;
  z-index: 1;
  // display: flex;
`;

export const TestListElementBox = styled.div`
  height: ${(props) => (props.theme === "cart" ? "50px" : "35px")};
  width: 92%;
  margin: ${(props) => (props.theme === "cart" ? margin.s : margin.s)} 0 0 5%;
  border: 1px solid ${rawColors.green1_200};
  border-radius: 100px 0px 0px 100px;
  border-width: 0px 1px 1px 1px;
  display: flex;
  flex-direction: row;
  background: linear-gradient(
    70deg,
    rgba(107, 172, 0, 0.65) 0%,
    rgba(252, 249, 249, 0.65) 100%
  );
`;

export const ListBox = styled.div`
  margin: ${margin.mPrc} 0 0 0;
`;
