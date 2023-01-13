import styled from "styled-components";
import { rawColors, colors } from "../locales/colors";
import { Constants, margin } from "./Constants";

export const SearchMainBox = styled.div`
  z-index: 1;
  background-color: ${colors.bg};
  min-width: 400px;
  height: 100px;
  top: -50px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-bottom-right-radius: 30%;
  border-bottom-left-radius: 30%;
  ${(props) =>
    props.theme === true
      ? `  {
    position: fixed;
    transform: translate(0%, 100%);
    transition: 0.3s ease-out;
    box-shadow: 0 4px 8px 0;
  }`
      : `  {
        position: fixed;
        transform: translate(0%, 0%);
        transition: 0.3s ease-out;
      }`};
`;

export const SearchHandleBox = styled.div`
  background-color: ${colors.bg};
  border-radius: 0 0 100px 100px;
  position: absolute;
  width: 50px;
  height: 40px;
  margin: 100px 0px 0px 60%;
  box-shadow: 0 4px 8px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SearchSubMainBox = styled.div`
  display: flex;
  width: 100%;
`;

export const SearchInput = styled.input`
  color: ${rawColors.red};
  display: flex;
  margin: ${margin.s} 0px 0px ${margin.m};
  width: 260px;
  height: 20px;
  border-radius: 10px;
  border-width: 1px;
`;

export const SearchFiltersBox = styled.div`
  z-index: 999;
  position: absolute;
  right: 0;
  margin: 0px ${margin.m} 0px ${margin.m};
`;

export const SearchButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
`;

export const SearchCategoryBox = styled.div`
  flex-wrap: wrap;
  width: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 0px 0px ${margin.m};
`;
