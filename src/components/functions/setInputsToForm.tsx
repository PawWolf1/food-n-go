import { InputsI } from "../../models/Inputs";
import { margin } from "../../styles/Constants";
import { InputOrderBox } from "../../styles/Input";
import { InputTitleText } from "../../styles/TextStyles";
import { InputBase, InputButton, InputPopup } from "../Input";

export function setInputs(props: any) {
  const Input = ({ item }: any) => {
    switch (item.type) {
      case "popup":
        return (
          <InputPopup
            register={props.register}
            data={item}
            other={props.other}
          />
        );
      case "text":
        return (
          <InputBase
            register={props.register}
            data={item}
            errors={props.errors}
            name={props.formData}
          />
        );
      case "button":
        return (
          <>
            <InputButton
              register={props.register}
              data={item}
              name={props.formData}
            />
          </>
        );
      default:
        return null;
    }
  };

  return props.data.map((item: any, index: any) => (
    <InputOrderBox theme={{ marginY: margin.m }}>
      <InputTitleText>{item.title}</InputTitleText>
      <Input item={item} />
    </InputOrderBox>
  ));
}

export function setSingleInput(
  data: any,
  register: any,
  errors?: any,
  other?: any
) {
  const Input = ({ item }: any) => {
    switch (item.type) {
      case "popup":
        return <InputPopup register={register} data={item} setValue={other} />;
      case "text":
        return <InputBase register={register} data={item} />;
      case "button":
        return <InputButton register={register} data={item} />;
      default:
        return null;
    }
  };
  return (
    <InputOrderBox>
      <InputTitleText>{data.title}:</InputTitleText>
      <Input item={data} />
    </InputOrderBox>
  );
}
