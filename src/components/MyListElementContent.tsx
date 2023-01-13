import { GrayButton } from "../styles/Buttons";
import {
  ListFoodBox,
  ListButtonBox,
  ListHandleBox,
  ListHandleButtonBox,
} from "../styles/MyLists";
import { ButtonText, SerifText } from "../styles/TextStyles";
import { generateList } from "./functions/itemList";
import { priceAll } from "./functions/priceAll";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getString } from "../locales/languages/string";
import { useDispatch } from "react-redux";
import { replaceCart } from "../store/cart";
import { deleteMyListElement, setMyLists } from "../store/lists";
import { setPopup } from "../store/popup";
import { Flex, FlexPart } from "../style";
import { HistoryFormData } from "./HistoryFormData";
import { clearForm, setForm } from "../store/form";
import { setLoading } from "../store/loading";
import { apiFetchMyListsDelete } from "../api";

export const MyListElementContent = ({ item, setData, index, type }: any) => {
  const [active, setActive] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function navOrder() {
    dispatch(replaceCart(item.food));
    if (item.orderData)
      dispatch(setForm({ upgr: "all", value: item.orderData }));
    else {
      dispatch(clearForm());
    }

    navigate("/OrderTransaction");
  }
  function navHome() {
    dispatch(replaceCart(item.food));
    navigate("/");
  }
  function deleteList() {
    setActive(false);
    dispatch(setLoading(true));
    apiFetchMyListsDelete(item.id)
      .then((result: any) => {
        setTimeout(() => {
          dispatch(setLoading(false));
        }, 1000);
      })
      .catch((e: any) => null);
    dispatch(deleteMyListElement(index));
  }

  return (
    <>
      <ListHandleBox theme={active}>
        <ListHandleButtonBox onClick={() => setActive(!active)}>
          <FlexPart theme={1}>
            <SerifText> {item.title}</SerifText>
          </FlexPart>
          <FlexPart theme={1}>
            <SerifText> {item?.date}</SerifText>
            <SerifText> {item?.time}</SerifText>
          </FlexPart>
          <SerifText>
            {getString("other", "value")} {priceAll(item.food)}$
          </SerifText>
        </ListHandleButtonBox>
        {active ? (
          <>
            <ListFoodBox style={{ padding: "10px 10px 10px 0px" }}>
              <FlexPart
                theme={3}
                style={{
                  flexDirection: "column",
                  justifyContent: "flex-start",
                }}
              >
                {generateList(item.food, setData, "mode")}
              </FlexPart>
              {type === "history" ? (
                <FlexPart theme={2}>
                  <HistoryFormData {...item.orderData} />
                </FlexPart>
              ) : null}
            </ListFoodBox>
            <ListButtonBox>
              <GrayButton onClick={() => navOrder()}>
                <ButtonText>{getString("buttons", "order")}</ButtonText>
              </GrayButton>
              <GrayButton onClick={() => navHome()}>
                <ButtonText>{getString("buttons", "addToCart")}</ButtonText>
              </GrayButton>
              {type === "history" ? null : (
                <GrayButton
                  onClick={() =>
                    dispatch(
                      setPopup({
                        message: "areYouSureDelete",
                        type: "confirm",
                        onConfirm: () => deleteList(),
                      })
                    )
                  }
                >
                  <ButtonText>{getString("buttons", "delete")}</ButtonText>
                </GrayButton>
              )}
            </ListButtonBox>
          </>
        ) : null}
      </ListHandleBox>
    </>
  );
};
