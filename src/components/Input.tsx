import { paymentMethods } from "../styles/Constants";
import {
  InputBaseBox,
  InputButtonBox,
  InputChoose,
  OptionBox,
} from "../styles/Input";
import { countTime } from "./functions/countTime";
import { useDispatch } from "react-redux";
import { setPopup } from "../store/popup";
import { clearForm, setForm } from "../store/form";
import { watch } from "node:fs";
import { useState } from "react";
import { isNullOrUndefined } from "node:util";
export const InputPopup = ({ data, register, other }: any) => {
  const dispatch = useDispatch();
  const [able, setAble] = useState(true);
  return (
    <InputChoose
      type="submit"
      theme={{ width: "100%" }}
      placeholder={data?.placeholder}
      defaultValue={data?.defaultValue}
      required={data.required}
      pattern={data.pattern}
      onClick={(e) => {
        if (able) {
          setAble(!able);
        } else {
          dispatch(setForm({ upgr: data.value, value: e.currentTarget.value }));
          // dispatch(clearForm());
          setAble(!able);
        }
      }}
      {...register(data.value)}
    >
      {data.value === "deliveryTime"
        ? countTime().map((item: any) => (
            <OptionBox value={item}>{item}</OptionBox>
          ))
        : paymentMethods.map((item: any) => (
            <OptionBox value={item}>{item}</OptionBox>
          ))}
    </InputChoose>
  );
};

export const InputBase = ({ data, register, errors, name }: any) => {
  const dispatch = useDispatch();

  return (
    <>
      <InputBaseBox
        theme={{ width: "100%" }}
        type={data.typeOfData}
        placeholder={data?.placeholder}
        defaultValue={name ? name[data.value] : null}
        required={true}
        // onChangeCapture={(e) =>
        //   dispatch(setForm({ upgr: data.value, value: e.currentTarget.value }))
        // }
        pattern={data.pattern}
        {...register(data.value)}
      />
    </>
  );
};

export const InputButton = ({ data, register, name }: any) => {
  const dispatch = useDispatch();
  return (
    <InputButtonBox
      type={"button"}
      theme={{ width: "100%" }}
      onClick={() =>
        dispatch(
          setPopup({
            type: data.value,
            onConfirm: "AddMyList",
            register: register,
            other: null,
          })
        )
      }
    >
      {name[data.value] ? name[data.value] : data.defaultValue}
    </InputButtonBox>
  );
};

// placeholder={data?.placeholder}
//       defaultValue={data?.defaultValue}
