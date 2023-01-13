import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  initLanguage,
  language,
  saveLanguage,
} from "../../locales/languages/string";
import { resetAll } from "../../store/search";

import { CartBox } from "../../styles/CartBox";
import { CartSlider } from "../CartSlider";
import { FoodFiltered } from "../FoodFiltered";
import { getWindowSize } from "../functions/getWindowSize";
import { moveCartSlider } from "../functions/moveCartSlider";

export const HomeSub = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const cart = useSelector((state: any) => state.cart.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener("resize", handleWindowResize);
    moveCartSlider(cart.length);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [cart]);

  return (
    <>
      <FoodFiltered windowSize cart />
      <CartBox
        theme={{
          img: require("../../locales/images/foodBg1.png"),
          width: windowSize.innerWidth,
        }}
      >
        <CartSlider mode={"cart"} cart={cart} />
      </CartBox>
    </>
  );
};
