// decrypt data

import { toast } from "react-toastify";
import { REGEX, encript_KEY } from "./Constants";
import success from "../Assests/Icons/right.png";
import error from "../Assests/Icons/wrong.png";
import classes from "./common.module.css";

export const DecryptToken = (encriptText: string) => {
  var CryptoJS = require("crypto-js");
  var bytes = CryptoJS.AES.decrypt(encriptText, encript_KEY);

  var decryptedData = bytes.toString(CryptoJS.enc.Utf8);
  return decryptedData;
};

// Encrypt Data

export const EncryptData = (token: any) => {
  var CryptoJS = require("crypto-js");
  var EncryptData = CryptoJS.AES.encrypt(token, encript_KEY).toString();
  return EncryptData;
};

export const Number_Validation = (value: any) => {
  if (value.match(REGEX.NUMBER_REGEX) || value === "") {
    return true;
  } else {
    return false;
  }
  // return !isNaN(value) || value === "" ? true : false;
};

//get toaster

export const ShowToast = (type?: string, msg?: string) => {
  if (type === "success") {
    return toast(
      <div>
        <img src={success} className={classes.successicon} />
        &nbsp;&nbsp;<span>{msg}</span>
      </div>
    );
  } else {
    return toast(
      <div>
        <img src={error} className={classes.erroricon} />
        &nbsp;&nbsp;<span>{msg}</span>
      </div>
    );
  }
};
