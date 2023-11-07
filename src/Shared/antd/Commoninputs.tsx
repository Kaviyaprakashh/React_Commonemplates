import {
  Checkbox,
  ConfigProvider,
  DatePicker,
  Input,
  InputNumber,
  Select,
  Switch,
} from "antd";
import React from "react";
import classes from "./ant.module.css";
import { kMaxLength } from "buffer";
import dayjs from "dayjs";

type Props = {
  value?: string;
  placeholder: string;
  onChange?: (value: any) => void;
  disabled?: boolean;
  styles?: any;
  maxLength?: number;
  numbervalue?: number;
  min?: string;
  isFuture?: boolean;
};

export const Commoninputs = ({
  value,
  placeholder,
  onChange,
  disabled = false,
  styles,
  maxLength,
}: Props) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            colorPrimary: "red",
            algorithm: true, // Enable algorithm
          },
        },
      }}
    >
      <Input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        style={styles}
        maxLength={maxLength}
        className={classes.borderinput}
      />
    </ConfigProvider>
  );
};

export const CustomPassword = ({
  value,
  placeholder,
  onChange,
  disabled = false,
  styles,
  maxLength,
}: Props) => {
  return (
    <Input.Password
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      style={styles}
      maxLength={maxLength}
      className={classes.borderinput}
    />
  );
};

export const CustomDate = ({
  value,
  placeholder,
  onChange,
  disabled = false,
  styles,
  maxLength,
  isFuture = true,
}: Props) => {
  const disableFutureDt = (date: any) => {
    if (isFuture) {
      return date.isAfter(new Date());
    } else {
      return date;
    }
  };
  return (
    <DatePicker
      popupStyle={{ zIndex: 11000 }}
      placeholder={placeholder}
      value={value ? dayjs(value) : null}
      onChange={onChange}
      disabled={disabled}
      style={styles}
      className={classes.borderinput}
      disabledDate={(date) => disableFutureDt(date)}
    />
  );
};

export const CustomNumber = ({
  value,
  placeholder,
  onChange,
  disabled = false,
  styles,
  maxLength,
  numbervalue,
  min = "1",
}: Props) => {
  return (
    <InputNumber
      maxLength={maxLength}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      style={{ padding: "5px 0px" }}
      min={min}
      className={classes.borderinput}
    />
  );
};

interface Selectprops {
  value?: string;
  placeholder: string;
  onChange?: (value: any) => void;
  disabled?: boolean;
  styles?: any;
  options?: any;
}
export const CustomSelect = ({
  value,
  placeholder,
  onChange,
  disabled = false,
  styles,

  options,
}: Selectprops) => {
  return (
    <Select
      options={options}
      dropdownStyle={{ zIndex: 11000 }}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      style={styles}
      className={classes.borderinput}
    />
  );
};

interface checkProps {
  checked?: boolean;
  onChange?: (value: any) => void;
  disabled?: boolean;
  styles?: any;
  name?: string;
}

export const CustomCheckbox = ({
  checked,
  name,
  onChange,
  disabled = false,
  styles,
}: checkProps) => {
  return (
    <Checkbox onChange={onChange} checked={checked}>
      {name}
    </Checkbox>
  );
};

export default function Switchbtn() {
  return (
    <Switch
      checkedChildren="active"
      unCheckedChildren="inactive"
      // className={classes.switchstyle}
    />
  );
}
