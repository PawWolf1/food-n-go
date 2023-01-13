import { useForm } from "react-hook-form";
import { newListData } from "../../styles/Constants";
import { setSingleInput } from "../functions/setInputsToForm";
import { Flex } from "../../style";
import { GrayButtonPopup } from "../../styles/Buttons";
import { getString } from "../../locales/languages/string";
import { useDispatch, useSelector } from "react-redux";
import { closePopup } from "../../store/popup";
import { addMyLists } from "../../store/lists";
import { apiFetchMyListsSend } from "../../api";
import { setLoading } from "../../store/loading";

export const FormInput = (props: any) => {
  const { cart } = useSelector((state: any) => state.cart);
  const { myLists } = useSelector((state: any) => state.lists);
  const dispatch = useDispatch();
  const {
    register,
    setValue,
    handleSubmit,
    getValues,
    formState: { errors },
    control,
  } = useForm();
  const onSubmit = (data: any) => {
    if (data.title) {
      dispatch(closePopup());
      if (props?.popup.onConfirm === "AddMyList") {
        dispatch(setLoading(true));
        apiFetchMyListsSend({
          food: cart,
          title: getValues("title"),
          id: myLists.length + 6,
        })
          .then((result: any) => {
            setTimeout(() => {
              dispatch(
                addMyLists({
                  food: cart,
                  title: getValues("title"),
                  id: myLists.length + 6,
                })
              );
              dispatch(setLoading(false));
            }, 1000);
          })
          .catch((e: any) => null);
      } else {
        dispatch(closePopup());
      }
    }
  };

  return (
    <div style={{ width: "80%", marginLeft: "10%" }}>
      <>{setSingleInput(newListData.data[0], register)}</>
      <Flex>
        <GrayButtonPopup onClick={() => dispatch(closePopup())}>
          {getString("buttons", "goBack")}
        </GrayButtonPopup>
        <GrayButtonPopup onClick={handleSubmit(onSubmit)}>
          {getString("buttons", "save")}
        </GrayButtonPopup>
      </Flex>
    </div>
  );
};
function setActive(arg0: boolean) {
  throw new Error("Function not implemented.");
}
