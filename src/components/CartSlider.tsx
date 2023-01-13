import { GrayButton } from "../styles/Buttons";
import {
  CardSliderBox,
  CartMainBox,
  CartDownBox,
  CartDownButtonBox,
} from "../styles/CartBox";
import { ButtonText, SerifText } from "../styles/TextStyles";
import { useNavigate } from "react-router-dom";
import { priceAll } from "./functions/priceAll";
import { generateList } from "./functions/itemList";
import { getString } from "../locales/languages/string";
import { useDispatch } from "react-redux";
import { clear } from "../store/cart";
import { setPopup } from "../store/popup";
export const CartSlider = ({ cart, setCart, mode }: any) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <CardSliderBox id="CardSlider">
      <CartMainBox>
        {generateList(cart.food ? cart.food : cart, setCart, mode)}
      </CartMainBox>

      {mode === "cart" ? (
        <CartDownBox>
          <SerifText>
            {getString("other", "amount")}
            {priceAll(cart.food ? cart.food : cart)}$
          </SerifText>
          <CartDownButtonBox>
            <GrayButton
              onClick={() =>
                navigate("/OrderTransaction", {
                  state: {
                    cart,
                  },
                })
              }
            >
              <ButtonText>{getString("buttons", "order")}</ButtonText>
            </GrayButton>
            <GrayButton
              onClick={() =>
                dispatch(
                  setPopup({
                    message: "areYouSureClear",
                    type: "confirm",
                    onConfirm: () => dispatch(clear()),
                  })
                )
              }
            >
              <ButtonText>{getString("buttons", "clear")}</ButtonText>
            </GrayButton>
          </CartDownButtonBox>
          <GrayButton
            onClick={() =>
              dispatch(
                setPopup({
                  message: "",
                  type: "input",
                  onConfirm: "AddMyList",
                })
              )
            }
          >
            <ButtonText>{getString("buttons", "saveList")}</ButtonText>
          </GrayButton>
        </CartDownBox>
      ) : null}
    </CardSliderBox>
  );
};
