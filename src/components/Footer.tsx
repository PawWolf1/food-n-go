import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FlexPart, FooterBox } from "../style";
import {
  SerifText,
  SerifTextBigL,
  SerifTextS,
  SerifTextSL,
} from "../styles/TextStyles";
import { getWindowSize } from "./functions/getWindowSize";
import { moveCartSlider } from "./functions/moveCartSlider";

export const Footer = () => {
  return (
    <FooterBox>
      <FlexPart
        theme={1}
        style={{
          flexDirection: "column",
        }}
      >
        <SerifTextBigL style={{ textAlign: "left" }}>
          2022 Food'n'go Company™
        </SerifTextBigL>
        <SerifTextSL>p.wolf@gmail.com</SerifTextSL>
        <SerifTextSL>+48 123 456 789</SerifTextSL>
        <SerifTextSL>ul. Wymyślona 6, 59-111 Wrocław</SerifTextSL>
      </FlexPart>
      <FlexPart
        theme={1}
        style={{
          flexDirection: "column",
        }}
      ></FlexPart>
    </FooterBox>
  );
};
