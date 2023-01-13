import { PopupWindowBox } from "../../styles/Input";
import { SerifText, ErrorInputText } from "../../styles/TextStyles";
import { FormInput } from "../forms/FormNewList";

export const PopupInput = (props: any) => {
  return (
    <PopupWindowBox>
      <SerifText>{props?.popup.message}</SerifText>
      <FormInput {...props} />
    </PopupWindowBox>
  );
};
