import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Constants,
  inputDataDelivery,
  inputDataPersonal,
  inputDataSpecial,
} from "../../styles/Constants";
import { setInputs } from "../functions/setInputsToForm";
import { GridBox2 } from "../../style";
import { FormBox, FormSpecialBox } from "../../styles/OrderTrans";
import { GrayButtonInput } from "../../styles/Input";
import { InputSectionText } from "../../styles/TextStyles";
import { useDispatch, useSelector } from "react-redux";
import { setForm } from "../../store/form";
import { getString } from "../../locales/languages/string";
import { addHistory, setHistory } from "../../store/lists";
import { setLoading } from "../../store/loading";
import { apiFetchHistory, apiFetchHistorySend } from "../../api";
import { useNavigate } from "react-router-dom";

export const FormOrderDetails = (food: any) => {
  const {
    register,
    setValue,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => sendOrder(data);
  const formData = useSelector((state: any) => state.form.data);
  const history = useSelector((state: any) => state.lists.history).length;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function sendOrder(data: any) {
    const date = new Date().toISOString().slice(0, 10);
    const time = new Date().toISOString().slice(11, 16);
    dispatch(setLoading(true));
    apiFetchHistorySend({
      id: history + 6,
      food: food.food,
      title: "Order #" + history,
      orderData: data,
      time: time,
      date: date,
    })
      .then((result) => {
        if (result.history !== null) {
          dispatch(
            addHistory({
              id: history + 6,
              food: food.food,
              title: "Order #" + history + 6,
              orderData: data,
              time: time,
              date: date,
            })
          );
          navigate("/");
        }
        setTimeout(() => {
          dispatch(setLoading(false));
        }, 1000);
      })
      .catch((e) => null);
  }

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     try {
  //       dispatch(setForm({ upgr: "all", value: getValues() }));
  //     } catch {}
  //   }, 2000);

  //   return () => clearInterval(interval);
  // }, []);
  return (
    <>
      <GridBox2 onSubmit={handleSubmit(onSubmit)}>
        <InputSectionText>
          {getString("forms", "deliveryData")}
        </InputSectionText>
        <FormBox>
          {setInputs({
            data: inputDataDelivery.data,
            register,
            errors,
            formData,
          })}
        </FormBox>
        <FormBox>
          {setInputs({
            data: inputDataPersonal.data,
            register,
            errors,
            formData,
          })}
        </FormBox>
        <FormSpecialBox>
          {setInputs({
            data: inputDataSpecial.data,
            register,
            errors,
            formData,
          })}
        </FormSpecialBox>
        <GrayButtonInput type="submit" />
      </GridBox2>
    </>
  );
};
