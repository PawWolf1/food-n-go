import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Food } from "../../models/Food";
import { setMyLists } from "../../store/lists";
import { CartBox } from "../../styles/CartBox";
import { GridMyListBox } from "../../styles/MyLists";
import { CartSlider } from "../CartSlider";
import { moveCartSlider } from "../functions/moveCartSlider";
import { MyListsElementBox } from "../MyListsElementBox";

export const MyListsSub = () => {
  const { cart } = useSelector((state: any) => state.cart);
  const { myLists } = useSelector((state: any) => state.lists);
  const dispatch = useDispatch();

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
      <GridMyListBox
        theme={{
          width: windowSize.innerWidth,
        }}
      >
        <MyListsElementBox data={myLists} type={"myLists"} />
      </GridMyListBox>
      <CartBox
        theme={{
          img: require("../../locales/images/foodBg1.png"),
          width: windowSize.innerWidth,
        }}
      ></CartBox>
    </>
  );
};
