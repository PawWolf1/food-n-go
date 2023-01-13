import { useDispatch } from "react-redux";
import { getString } from "../../locales/languages/string";
import { closePopup } from "../../store/popup";
import { Flex } from "../../style";
import { GrayButtonPopup } from "../../styles/Buttons";
import { PopupWindowBox } from "../../styles/Input";
import { SerifText, ErrorInputText } from "../../styles/TextStyles";

export const PopupConfirm = (props: any) => {
  const dispatch = useDispatch();
  function onConfirm() {
    props?.popup.onConfirm();
    dispatch(closePopup());
  }

  return (
    <PopupWindowBox>
      <SerifText>{props?.popup.message}</SerifText>
      <Flex>
        <GrayButtonPopup onClick={() => dispatch(closePopup())}>
          {getString("buttons", "goBack")}
        </GrayButtonPopup>
        <GrayButtonPopup onClick={() => onConfirm()}>
          {getString("buttons", "yes")}
        </GrayButtonPopup>
      </Flex>
    </PopupWindowBox>
  );
};
