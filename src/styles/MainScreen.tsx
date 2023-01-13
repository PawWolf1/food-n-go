import styled from "styled-components";
import { rawColors, colors } from "../locales/colors";
import { Constants, margin } from "./Constants";

export const Mainbox = styled.div`
  min-height: 100%;
  margin-top: 50px;
  display: flex;
`;

export const GridBox = styled.div`
  min-height: 100%;
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

export const FoodBox = styled.div`
  z-index: 2;
  max-height: 280px;
  min-height: 280px;
  min-width: 200px;
  max-width: 200px;
  border-radius: 30px;
  margin: ${margin.xsPrc} ${margin.xsPrc} ${margin.xsPrc} ${margin.xsPrc};
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 0px 1px ${colors.foodBorder} inset;
`;

export const FoodPhoto = styled.div`
  height: ${Constants.size.foodPhotoSize};
  width: ${Constants.size.foodPhotoSize};
  border-radius: 28px 28px 0px 0px;
  background-image: url(${(props) => props.theme});
  background-size: ${Constants.size.foodPhotoSize}
    ${Constants.size.foodPhotoSize};
  background-repeat: no-repeat;
  display: flex;
  box-shadow: 0px 0px 0px 1px ${colors.foodBorder} inset;
`;

export const FoodButtonsDiv = styled.div`
  display: flex;
  flex-direciton: row;
  flex: 1;
  justify-content: space-between;
  padding: 0px 2px 2px 2px;
  align-self: flex-end;
  z-index: 5;
`;

export const FoodBoxTitleCont = styled.section`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const FoodBoxRestConst = styled.section`
  flex-direction: row;
  display: flex;
  justify-content: space-around;
  flex: 1;
  align-items: flex-end;
  padding-bottom: 2px;
`;

export const FoodBoxAmountCont = styled.section`
  flexdirection: row;
  display: flex;
  flex: 1;
  justify-content: center;
`;

export const InfoScreenBox = styled.div`
  position: absolute;
  width: ${Constants.size.foodPhotoSize};
  height: ${Constants.size.foodPhotoSize};
  background-color: ${colors.bgOp60};
  opacity: 0;
  z-index: 1;
`;

export const InfoScreenTextBox = styled.div`
  display: flex;
  flex: 1;
  height: 80%;
  overflow: hidden;
  padding: 7px 0 0 0;
`;
