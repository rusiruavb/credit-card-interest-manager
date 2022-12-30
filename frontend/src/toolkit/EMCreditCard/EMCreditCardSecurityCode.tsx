import { Input } from "@nextui-org/react";
import { FC } from "react";
import { IEMTextInputProps } from "../models";

const EMCreditCardSecurityCodeInput: FC<IEMTextInputProps> = ({
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
  const formatCreditCard = (value: string) => {
    console.log(value);
    const v = value
      .replace(/\s+/g, "")
      .replace(/[^0-9]/gi, "")
      .substr(0, 16);
    const parts = [];

    for (let i = 0; i < v.length; i += 4) {
      parts.push(v.substr(i, 4));
    }

    const result = parts.length > 1 ? parts.join(" ") : value;
    console.log(result);
    return result;
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
      value={formatCreditCard(value)}
      size={size}
      animated={animated}
      shadow={shadow}
      underlined={underlined}
      rounded={rounded}
      bordered={bordered}
      fullWidth={fullWidth}
      onChange={onChange}
      maxLength={4}
      color={color}
    />
  );
};

export default EMCreditCardSecurityCodeInput;
