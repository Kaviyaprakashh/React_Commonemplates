import { getCookie } from "../Storage/Cookies";

// Secret key for Data encription
export const encript_KEY = "encrypt_decrypt_key"; // a random sting for encrypt and decrypt

//Get Cookie Value
export const AuthData = getCookie("authdata");

//Length of InputFields

export const Length = {
  medium: 100,
  large: 250,
  textarea: 500,
  contact: 10,
};

export const Genders = [
  { label: "Male", value: "Male" },
  { label: "Female", value: "Female" },
  { label: "Othes", value: "Othes" },
];

// regexes

export const REGEX = {
  NAME_REGEX: /^[A-Za-z_ ]+$/,
  NUMBER_REGEX: /^[0-9]*$/,
  SPECIAL_CHARACTER_REGEX: /^[A-Za-z0-9 ]+$/,
  MOBILE_REGEX: /^[6-9]{1}[0-9]{9}$/,
  PASSWORD_REGEX: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])/,
  AMOUNT: /^[0-9][0-9]*[.]?[0-9]{0,2}$/,
  SIGN_AMOUNT: /^[-+|0-9]{1}[0-9]*[.]?[0-9]{0,2}$/,
  EMAIL:
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};

// Items per page array
export const Data_SIZE = [10, 25, 50, 100];
