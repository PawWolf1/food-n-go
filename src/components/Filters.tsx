import { useState } from "react";
import { useDispatch } from "react-redux";
import { colors, rawColors } from "../locales/colors";
import { FiltersList } from "../locales/filters";
import { getString } from "../locales/languages/string";
import { setSortBy } from "../store/search";
import { Button } from "../styles/Buttons";
import { SearchFiltersBox } from "../styles/Search";
import { SerifTextS, SerifTextSS } from "../styles/TextStyles";

export const Filters = (props: any) => {
  const dispatch = useDispatch();

  function chooseFilter(data: any) {
    setShowList(false);
    dispatch(setSortBy(data));
  }

  const [showList, setShowList] = useState(false);
  return (
    <SearchFiltersBox>
      <div style={{ width: "75px" }}>
        <Button onClick={() => setShowList(!showList)} theme={colors.filterBtn}>
          <SerifTextSS style={{ userSelect: "none" }}>
            {!showList
              ? getString("filters", "show")
              : getString("filters", "hide")}
          </SerifTextSS>
        </Button>
        {!showList ? (
          <></>
        ) : (
          FiltersList.map((data) => (
            <Button
              theme={
                props?.filter
                  ? data.id === props?.filter.id
                    ? rawColors.green1_300
                    : colors.filterBtn
                  : colors.filterBtn
              }
              onClick={() => chooseFilter(data)}
            >
              <SerifTextSS style={{ userSelect: "none" }}>
                {data.name}
              </SerifTextSS>
            </Button>
          ))
        )}
      </div>
    </SearchFiltersBox>
  );
};
