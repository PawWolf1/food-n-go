import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ArrowImg } from "../locales/images/arrow";
import { DoubleArrowImg } from "../locales/images/doubleArrow";
import { getString } from "../locales/languages/string";
import { FoodTile } from "../models/FoodComp";
import { GridBox } from "../style";
import { OswaldText } from "../styles/TextStyles";
import { ChangePageBar } from "./ChangePageBar";
import { sortFoodBy } from "./functions/sortFoodBy";

export const FoodFiltered = (props: any) => {
  const [page, setPage] = useState<number>(1);
  const filters = useSelector((state: any) => state.search);
  const food = useSelector((state: any) => state.food.food);

  let filtered = food !== undefined ? sortFoodBy(food, filters) : [];
  let checkMax = Math.round(filtered.length / filters.onPage);

  function getPosition(data: any) {
    const result = food.filter((item: any) => item.id === data)[0];
    const findPosition = food.indexOf(result);
    return findPosition;
  }

  useEffect(() => {
    setPage(1);
  }, [filters]);

  return (
    <GridBox
      theme={{
        width: props.windowSize.innerWidth,
      }}
    >
      {filtered.length !== 0 ? (
        <>
          {filtered
            .slice((page - 1) * filters.onPage, filters.onPage * page)
            .map((data: any) => FoodTile(data, getPosition))}
          <ChangePageBar page={page} setPage={setPage} checkMax={checkMax} />
        </>
      ) : (
        <>
          <OswaldText>{getString("message", "noSearch")}</OswaldText>
        </>
      )}
    </GridBox>
  );
};
