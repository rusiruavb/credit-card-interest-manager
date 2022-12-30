import { Input } from "@nextui-org/react";
import { FC } from "react";
import { IEMTextInputProps } from "../models";

const EMCreditCardExpireDateInput: FC<IEMTextInputProps> = ({
  disabled = false,
  clearable = false,
  label,
  labelPlaceholder,
  bordered = false,
  rounded = false,
  underlined = false,
  shadow = true,
  animated = true,
  helperText,
  helperColor,
  color = "default",
  size = "md",
  type = "text",
  value,
  fullWidth = false,
  onChange,
}) => {
  const formatString = (value: string) => {
    value = value
      .replace(
        /^([1-9]\/|[2-9])$/g,
        "0$1/" // 3 > 03/
      )
      .replace(
        /^(0[1-9]|1[0-2])$/g,
        "$1/" // 11 > 11/
      )
      .replace(
        /^([0-1])([3-9])$/g,
        "0$1/$2" // 13 > 01/3
      )
      .replace(
        /^(0?[1-9]|1[0-2])([0-9]{2})$/g,
        "$1/$2" // 141 > 01/41
      )
      .replace(
        /^([0]+)\/|[0]+$/g,
        "0" // 0/ > 0 and 00 > 0
      )
      .replace(
        /[^\d/]|^[/]*$/g,
        "" // To allow only digits and `/`
      )
      .replace(
        /\/\//g,
        "/" // Prevent entering more than 1 `/`
      );

    return value;
  };

  return (
    <Input
      disabled={disabled}
      clearable={clearable}
      label={label}
      labelPlaceholder={labelPlaceholder}
      type={type}
      helperText={helperText}
      helperColor={helperColor}
      value={formatString(value)}
      size={size}
      animated={animated}
      shadow={shadow}
      underlined={underlined}
      rounded={rounded}
      bordered={bordered}
      fullWidth={fullWidth}
      onChange={onChange}
      maxLength={5}
    />
  );
};

export default EMCreditCardExpireDateInput;
