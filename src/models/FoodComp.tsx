import { useEffect, useState } from "react";
import {
  FoodBox,
  FoodBoxAmountCont,
  FoodBoxRestConst,
  FoodBoxTitleCont,
  FoodButtonsDiv,
  FoodPhoto,
} from "../styles/MainScreen";
import { FoodBoxText, OswaldText, SerifText } from "../styles/TextStyles";
import { Food } from "./Food";
import { FoodPhotoButton } from "../components/buttons/FoodPhotoButtons";
import { colors } from "../locales/colors";
import { cutText } from "../components/functions/cutText";
import { BlockImg } from "../locales/images/block";
import { showProductInfo } from "../components/functions/showProductInfo";
import { InfoScreen } from "../components/InfoScreen";
import { Constants } from "../styles/Constants";
import { pl } from "../locales/languages/pl";
import { getString } from "../locales/languages/string";
import { useDispatch } from "react-redux";
import { decrementAmount, incrementAmount, clear } from "../store/food";
import { upgradeCart } from "../store/cart";

export const FoodTile = (data: Food, sike: any) => {
  const dispatch = useDispatch();
  const placement = sike(data.id);

  function add() {
    dispatch(
      upgradeCart({
        id: data.id,
        name: data.name,
        price: data.price,
        imageUrl: data.imageUrl,
        amount: data.amount,
      })
    );
    dispatch(clear(placement));
  }

  return (
    <FoodBox key={data.id.toString()}>
      <InfoScreen id={data.id} desc={data.desc}></InfoScreen>
      <FoodPhoto theme={data.imageUrl}>
        {data.aviable ? null : (
          <>
            <OswaldText>{getString("home", "notAvailable")}</OswaldText>
            <div style={{ position: "absolute" }}>
              <BlockImg />
            </div>
          </>
        )}
        <FoodButtonsDiv>
          <FoodPhotoButton
            icon={"info"}
            isActive={data.aviable}
            size={`30px`}
            id={data.id}
          />
          <FoodPhotoButton
            icon={"cart"}
            onClick={() => add()}
            size={`30px`}
            isActive={data.aviable}
          />
        </FoodButtonsDiv>
      </FoodPhoto>
      <FoodBoxTitleCont>
        <FoodBoxText>{cutText(data.name, 32)}</FoodBoxText>
      </FoodBoxTitleCont>
      <FoodBoxRestConst>
        <SerifText style={{ flex: 1 }}>
          {data.price}$/{data.unit}
        </SerifText>
        {data.aviable ? (
          <FoodBoxAmountCont>
            <FoodPhotoButton
              icon={"minus"}
              sqr={true}
              size={`25px`}
              onClick={() =>
                data.amount > 1 ? dispatch(decrementAmount(placement)) : null
              }
            />
            <SerifText>{data.amount}</SerifText>
            <FoodPhotoButton
              icon={"plus"}
              sqr={true}
              size={`25px`}
              onClick={() =>
                data.amount < 99 ? dispatch(incrementAmount(placement)) : null
              }
            />
          </FoodBoxAmountCont>
        ) : null}
      </FoodBoxRestConst>
    </FoodBox>
  );
};
