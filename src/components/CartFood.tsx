import { useDispatch } from "react-redux";
import {
  upgradeCartAdd,
  upgradeCartDelete,
  upgradeCartDesc,
} from "../store/cart";
import { FlexPart } from "../style";
import { TestListElementBox } from "../styles/OrderTrans";
import { SerifTextN } from "../styles/TextStyles";
import { FoodPhotoButton } from "./buttons/FoodPhotoButtons";
import { cutText } from "./functions/cutText";

export const CartFood = ({ data, cart, index, number, setCart, mode }: any) => {
  const dispatch = useDispatch();

  return (
    <TestListElementBox key={1} theme={mode}>
      <FlexPart theme={3}>
        <SerifTextN>{cutText(data.name, 18)}</SerifTextN>
      </FlexPart>
      <FlexPart
        theme={2}
        style={{ flexDirection: mode === "cart" ? "column" : "row" }}
      >
        <FlexPart theme={2}>
          <FlexPart theme={1} style={{ justifyContent: "flex-start" }}>
            <SerifTextN>x{data.amount}</SerifTextN>
          </FlexPart>
          <FlexPart theme={1}>
            <SerifTextN>
              {Math.round(data.price * data.amount * 100) / 100}$
            </SerifTextN>
          </FlexPart>
        </FlexPart>
        {mode === "cart" ? (
          <FlexPart theme={1} style={{ justifyContent: "flex-end" }}>
            <FoodPhotoButton
              icon={"delete"}
              sqr={true}
              size={`24px`}
              onClick={() => dispatch(upgradeCartDelete(index))}
            />
            <FoodPhotoButton
              icon={"minus"}
              sqr={true}
              size={`24px`}
              onClick={() => dispatch(upgradeCartDesc(index))}
            />
            <FoodPhotoButton
              icon={"plus"}
              sqr={true}
              size={`24px`}
              onClick={() => dispatch(upgradeCartAdd(index))}
            />
          </FlexPart>
        ) : null}
      </FlexPart>
    </TestListElementBox>
  );
};
