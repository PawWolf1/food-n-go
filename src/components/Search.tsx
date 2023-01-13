import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { ResetImg } from "../locales/images/reset";
import { SearchImg } from "../locales/images/search";
import { setString } from "../store/search";
import { Flex } from "../style";
import {
  SearchInput,
  SearchHandleBox,
  SearchMainBox,
  SearchCategoryBox,
  SearchSubMainBox,
} from "../styles/Search";
import { FilterCatButton } from "./buttons/FilterCatButton";
import { Filters } from "./Filters";
import { ChooseAmountOfProducts } from "./functions/chooseAmountOfProducts";
export const Search = () => {
  const [isHidden, setIsHidden] = useState(false);
  const { onPage, sortBy, filters, name } = useSelector(
    (state: any) => state.search
  );
  const dispatch = useDispatch();
  const {
    register,
    setValue,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(getValues());
  function save(item: any) {
    setValue("search", item);
    dispatch(setString(item));
  }

  return (
    <SearchMainBox theme={isHidden}>
      <SearchSubMainBox>
        <form
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SearchInput
            onChange={(item) => save(item.target.value)}
            value={name}
          />
        </form>
        <Filters filter={sortBy} />
      </SearchSubMainBox>
      <Flex>
        <SearchCategoryBox>
          {filters.map((data: any, index: any) => (
            <FilterCatButton data={data} allData={filters} key={index} />
          ))}
        </SearchCategoryBox>
        <Flex style={{ flexDirection: "column" }}>
          <ChooseAmountOfProducts numberOnSite={onPage} /> <ResetImg />
        </Flex>
      </Flex>
      <SearchHandleBox onClick={() => setIsHidden(!isHidden)}>
        {isHidden ? <SearchImg /> : <SearchImg />}
      </SearchHandleBox>
    </SearchMainBox>
  );
};
