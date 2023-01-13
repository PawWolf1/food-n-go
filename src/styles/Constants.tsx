import { isNullishCoalesce } from "typescript";
import { getString } from "../locales/languages/string";
import { InputsI } from "../models/Inputs";

export const margin = {
  xxs: "1px",
  xs: "2px",
  s: "5px",
  m: "10px",
  ml: "20px",
  l: "30px",
  xl: "45px",
  xxl: "50px",
  xsPrc: "2%",
  sPrc: "5%",
  mPrc: "10%",
  xlPrc: "45%",
};

export const CartBarWidthReq = 800;

export const Constants = {
  size: {
    foodPhotoSize: "200px",
  },
  borderRadius: {},
  font: {
    xs: "12px",
    s: "14px",
    m: "20px",
    l: "28px",
    xl: "32px",
    xxl: "37px",
  },
  forms: {
    deliveryData: "Delivery data",
    streetName: "Street Name",
    streetNameDesc: "Type street name",
    city: "City",
    cityDesc: "Type your city",
    houseNumber: "House number",
    houseNumberDesc: "Type house number",
    flatNumber: "Flat number (optional)",
    flatNumberDecs: "Type flatnumber",
    postcode: "Postcode",
    postCodeDesc: "Type postalcode",
    accessCode: "Access code (optional)",
    accessCodeDesc: "Type acces code",
    floor: "Floor (optional)",
    floorDesc: "Type floor numer",
    companyName: "Company name (optional)",
    companyNameDesc: "Type comany name",
    addNote: "Add note (optional)",
    note: "Note",
    addNoteDesc: "i.e. PLease on't ring the bell",
    personalData: "Personal data",
    firstLastName: "First and last name",
    firstLastNameDesc: "Type your first and last name",
    phoneNumber: "Phone number",
    phoneNumberDesc: "i.e. +48 xxx xxx xx",
    email: "E-mail",
    emailDesc: "example@email.com",
    deliveryTime: "Delivery time",
    payWith: "Pay with",
    voutcher: "Vouther (optional)",
    voutcherDesc: "Type your voutcher",
    login: "Login",
    password: "Password",
    title: "Nazwa listy",
  },
};

export const inputDataDelivery: InputsI = {
  data: [
    {
      title: getString("forms", "streetName"),
      placeholder: getString("forms", "streetNameDesc"),
      value: "streetName",
      type: "text",
      required: true,
    },
    {
      title: getString("forms", "city"),
      placeholder: getString("forms", "cityDesc"),
      value: "city",
      type: "text",
      required: true,
    },
    {
      title: getString("forms", "houseNumber"),
      placeholder: getString("forms", "houseNumberDesc"),
      value: "houseNumber",
      type: "text",
      required: true,
    },
    {
      title: getString("forms", "flatNumber"),
      placeholder: getString("forms", "flatNumberDecs"),
      value: "flatNumber",
      type: "text",
      required: false,
    },
    {
      title: getString("forms", "postcode"),
      placeholder: getString("forms", "postCodeDesc"),
      value: "postcode",
      type: "text",
      required: true,
    },
    {
      title: getString("forms", "accessCode"),
      placeholder: getString("forms", "accessCodeDesc"),
      value: "accessCode",
      type: "text",
      required: false,
    },
    {
      title: getString("forms", "floor"),
      placeholder: getString("forms", "floorDesc"),
      value: "floor",
      type: "text",
      required: false,
    },
    {
      title: getString("forms", "companyName"),
      placeholder: getString("forms", "companyNameDesc"),
      value: "companyName",
      type: "text",
      required: false,
    },
    {
      title: getString("forms", "addNote"),
      placeholder: getString("forms", "addNoteDesc"),
      value: "note",
      type: "text",
      required: false,
    },
  ],
};

export const inputDataPersonal = {
  data: [
    {
      title: getString("forms", "firstLastName"),
      placeholder: getString("forms", "firstLastNameDesc"),
      value: "firstLastName",
      type: "text",
      required: true,
    },
    {
      title: getString("forms", "phoneNumber"),
      placeholder: getString("forms", "phoneNumberDesc"),
      value: "phoneNumber",
      type: "text",
      required: true,
    },
    {
      title: getString("forms", "email"),
      placeholder: getString("forms", "emailDesc"),
      value: "email",
      type: "text",
      required: true,
      typeOfData: "email",
    },
  ],
};

export const inputDataSpecial = {
  data: [
    {
      title: getString("forms", "deliveryTime"),
      value: "deliveryTime",
      type: "button",
      required: true,
      defaultValue: "As soon as possible",
    },
    {
      title: getString("forms", "payWith"),
      value: "payWith",
      type: "button",
      required: true,
      defaultValue: "Choose a method",
    },
    {
      title: getString("forms", "voutcher"),
      placeholder: getString("forms", "voutcherDesc"),
      value: "voutcher",
      type: "text",
      required: false,
    },
  ],
};

export const inputPayment = {
  title: getString("forms", "deliveryTime"),
  value: "deliveryTime",
  type: "popup",
  required: true,
  defaultValue: "As soon as possible",
};

export const inputDelivery = {
  title: getString("forms", "payWith"),
  value: "payWith",
  type: "popup",
  required: true,
  defaultValue: "Choose a method",
};

export const paymentMethods = ["Card", "PayPal", "PayU", "On delivery"];

export const loginData: InputsI = {
  data: [
    {
      title: getString("forms", "login"),
      placeholder: Constants.forms.login,
      value: "login",
      type: "text",
      required: true,
    },
    {
      title: getString("forms", "password"),
      placeholder: Constants.forms.password,
      value: "password",
      type: "text",
      required: true,
      typeOfData: "password",
    },
  ],
};

export const newListData: InputsI = {
  data: [
    {
      title: getString("message", "pickListName"),
      placeholder: Constants.forms.title,
      value: "title",
      type: "text",
      required: true,
    },
  ],
};
