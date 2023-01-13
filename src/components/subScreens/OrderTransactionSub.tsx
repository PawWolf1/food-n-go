import { useState, useEffect } from "react";
import { moveCartSlider } from "../functions/moveCartSlider";
import { CartBox } from "../../styles/CartBox";
import { CartSlider } from "../CartSlider";
import { FormOrderDetails } from "../forms/FormOrderDetails";
import { useSelector } from "react-redux";

export const OrderTransactionSub = () => {
  const cart = useSelector((state: any) => state.cart.cart);
  const [windowSize, setWindowSize] = useState(getWindowSize());

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener("resize", handleWindowResize);
    moveCartSlider(cart?.length);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [cart]);

  return (
    <>
      <FormOrderDetails food={cart} />
      <CartBox
        theme={{
          img: require("../../locales/images/foodBg1.png"),
          width: windowSize.innerWidth,
        }}
      >
        <CartSlider cart={cart} mode={"order"} />
      </CartBox>
    </>
  );
};
