import React from "react";
import { PiWarningCircleFill } from "react-icons/pi";
type Props = {
  msg?: string;
};

export default function Errortext({ msg = "" }: Props) {
  return (
    <div className="d-flex align-items-center">
      {/* <PiWarningCircleFill /> */}
      <p className="errormsg">{msg}</p>
    </div>
  );
}
