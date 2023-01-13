import { useState } from "react";
import { useSelector } from "react-redux";
import { ArrowImg } from "../locales/images/arrow";
import { DoubleArrowImg } from "../locales/images/doubleArrow";
import { getString } from "../locales/languages/string";
import { FoodTile } from "../models/FoodComp";
import { GridBox } from "../style";
import { margin } from "../styles/Constants";
import { OswaldText, SerifText, SerifTextN } from "../styles/TextStyles";
import { sortFoodBy } from "./functions/sortFoodBy";

export const ChangePageBar = ({ page, checkMax, setPage }: any) => {
  function goToPage(type: string) {
    switch (type) {
      case "--":
        setPage(1);
        break;
      case "-1":
        if (page > 1) setPage(page - 1);
        break;
      case "+1":
        if (page < checkMax) setPage(page + 1);
        break;
      case "++":
        setPage(checkMax);
        break;
    }
    window.scrollTo(0, 0);
    return null;
  }
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: margin.m,
      }}
    >
      <div onClick={() => goToPage("--")} style={{ margin: "0px 5px 0px 5px" }}>
        <DoubleArrowImg rotate={180} />
      </div>
      <div onClick={() => goToPage("-1")} style={{ margin: "0px 5px 0px 5px" }}>
        <ArrowImg rotate={180} />
      </div>
      <SerifTextN>
        {page} of {checkMax}
      </SerifTextN>

      <div onClick={() => goToPage("+1")} style={{ margin: "0px 5px 0px 5px" }}>
        <ArrowImg rotate={"xD"} />
      </div>
      <div onClick={() => goToPage("++")} style={{ margin: "0px 5px 0px 5px" }}>
        <DoubleArrowImg rotate={"xxD"} />
      </div>
    </div>
  );
};
