import { Input } from "@nextui-org/react";
import { FC } from "react";
import { IEMTextInputProps } from "../models";

const EMTextInput: FC<IEMTextInputProps> = ({
  disabled = false,
  clearable = false,
  label,
  labelPlaceholder,
  isPassword = false,
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
  return (
    <>
      {isPassword ? (
        <Input.Password
          disabled={disabled}
          clearable={clearable}
          label={label}
          labelPlaceholder={labelPlaceholder}
          type={type}
          helperText={helperText}
          helperColor={helperColor}
          value={value}
          size={size}
          animated={animated}
          shadow={shadow}
          underlined={underlined}
          rounded={rounded}
          bordered={bordered}
          fullWidth={fullWidth}
        />
      ) : (
        <Input
          disabled={disabled}
          clearable={clearable}
          label={label}
          labelPlaceholder={labelPlaceholder}
          type={type}
          helperText={helperText}
          helperColor={helperColor}
          value={value}
          size={size}
          animated={animated}
          shadow={shadow}
          underlined={underlined}
          rounded={rounded}
          bordered={bordered}
          fullWidth={fullWidth}
          onChange={onChange}
        />
      )}
    </>
  );
};

export default EMTextInput;
