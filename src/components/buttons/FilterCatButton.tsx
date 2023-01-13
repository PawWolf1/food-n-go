import { colors } from "../../locales/colors";
import { FilterCategoryButton } from "../../styles/Buttons";
import { useDispatch } from "react-redux";
import { setFilters } from "../../store/search";

export const FilterCatButton = ({ data, allData }: any) => {
  const dispatch = useDispatch();

  function check() {
    let newData = JSON.parse(JSON.stringify(allData));

    if (data.choosen) {
      if (data.blocked) {
        newData[data.id].blocked = false;
        newData[data.id].choosen = false;
      } else {
        newData[data.id].blocked = true;
        newData[data.id].choosen = true;
      }
    } else {
      newData[data.id].blocked = false;
      newData[data.id].choosen = true;
    }

    dispatch(setFilters(newData));
  }

  return (
    <FilterCategoryButton
      onClick={() => check()}
      style={{
        backgroundColor: data.choosen
          ? data.blocked
            ? colors.filterCatButtonUnact
            : colors.filterCatButtonAct
          : colors.filterCatButtonNeutral,
      }}
    >
      {data.name}
    </FilterCategoryButton>
  );
};
