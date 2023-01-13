import { useForm } from "react-hook-form";
import { loginData } from "../../styles/Constants";
import { setSingleInput } from "../functions/setInputsToForm";
import { GrayButtonLogin } from "../../styles/Input";
import { LoginBox } from "../../styles/Header";

export const FormLogin = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = (data: any) => console.log(getValues());
  return (
    <LoginBox>
      <>{setSingleInput(loginData.data[0], register, errors)}</>
      <>{setSingleInput(loginData.data[1], register, errors)}</>
      <GrayButtonLogin
        type="submit"
        value={"Login"}
        onClick={handleSubmit(onSubmit)}
      />
    </LoginBox>
  );
};
