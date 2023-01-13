import { useState } from "react";
import { useSelector } from "react-redux";
import { FadeLoader } from "react-spinners";
import { Flex, FlexPart, FooterBox, MainBodyBox } from "../style";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { popupBlock } from "./PopupBlock";

export const MainBody = ({ children, props }: any) => {
  const { popup } = useSelector((state: any) => state.setPopup);

  return (
    <MainBodyBox>
      <Header />
      {popupBlock({
        popup,
      })}
      {children}
      <Footer />
    </MainBodyBox>
  );
};
