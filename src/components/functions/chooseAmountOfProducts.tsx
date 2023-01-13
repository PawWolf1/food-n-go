import { useDispatch } from "react-redux";
import { setOnPage } from "../../store/search";
import { TxtButton } from "../../styles/Buttons";
import { LinkTextBox } from "../../styles/TextStyles";

export const ChooseAmountOfProducts = ({ numberOnSite }: any) => {
  const dispatch = useDispatch();
  function setNumber(onPage: number) {
    dispatch(setOnPage(onPage));
  }

  function textButton(x: number) {
    return (
      <TxtButton
        onClick={() => setNumber(x)}
        theme={numberOnSite === x ? true : false}
      >
        {x}
      </TxtButton>
    );
  }

  return (
    <LinkTextBox>
      {textButton(15)}|{textButton(30)}|{textButton(45)}
    </LinkTextBox>
  );
};
