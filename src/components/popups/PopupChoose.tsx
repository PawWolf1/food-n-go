import { useDispatch, useSelector } from "react-redux";
import { closePopup } from "../../store/popup";
import { GrayButtonPopup } from "../../styles/Buttons";
import { inputPayment, inputDelivery } from "../../styles/Constants";
import { PopupWindowBox } from "../../styles/Input";
import { setSingleInput } from "../functions/setInputsToForm";

export const PopupChoose = (props: any) => {
  const dispatch = useDispatch();

  return (
    <PopupWindowBox>
      <form onSubmit={props?.handle}>
        {setSingleInput(
          props?.popup.type === "payWith" ? inputDelivery : inputPayment,
          props?.popup.register,
          props?.popup.type
        )}
      </form>
      <GrayButtonPopup onClick={() => dispatch(closePopup())}>
        Choose
      </GrayButtonPopup>
    </PopupWindowBox>
  );
};
