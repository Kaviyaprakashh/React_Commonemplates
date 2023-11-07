import * as Yup from "yup";
import { REGEX } from "../../SharedComponents/Constants";

export const Loginvalidation = Yup.object().shape({
  username: Yup.string().trim().required("User Name is Required"),
  password: Yup.string().trim().required("Password is Required"),
});

export const Registervalidation = Yup.object().shape({
  name: Yup.string().trim().required("Name is Required"),
  username: Yup.string().trim().required("User Name is Required"),
  password: Yup.string()
    .trim()
    .matches(
      REGEX.PASSWORD_REGEX,
      "Password must contain atleast one Uppercase,one Lower case and one special character"
    )
    .required("Password is Required"),
  email: Yup.string()
    .trim()
    .matches(REGEX.EMAIL, "Email id is invalid")
    .required("email is Required"),
  contact: Yup.string()
    .trim()
    .matches(REGEX.MOBILE_REGEX, "Invalid Mobile Number")
    .required("contact is Required"),
  isuser: Yup.string().trim().required("contact is Required"),
});
