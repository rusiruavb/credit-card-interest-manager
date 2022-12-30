import { FormElement } from "@nextui-org/react";

/**
 * EMTextInput Props
 */

export type EMTextInputColor =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "error";

export type EMTextInputSize = "xs" | "sm" | "md" | "lg" | "xl";

export type EMTextInputType = "text" | "password" | "search" | "number" | "url" | "time" | "date";

export interface IEMTextInputProps {
  disabled?: boolean;
  clearable?: boolean;
  label?: string;
  labelPlaceholder?: string;
  isPassword?: boolean;
  bordered?: boolean;
  rounded?: boolean;
  underlined?: boolean;
  shadow?: boolean;
  animated?: boolean;

  helperText?: string;
  helperColor?: EMTextInputColor;
  color?: EMTextInputColor;
  size?: EMTextInputSize;
  type?: EMTextInputType;
  value: string;
  fullWidth?: boolean;
  onChange: (event: React.ChangeEvent<FormElement>) => void;
}

/**
 * EMButton Props
 */

export type NormalColors =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "error"
  | "gradient";

export type NormalSizes = "xs" | "sm" | "md" | "lg" | "xl";

export interface IEMButtonProps {
  title: string;
  shadow?: boolean;
  loading?: boolean;
  bordered?: boolean;
  rounded?: boolean;
  flat?: boolean;
  rippleEffect?: boolean;
  iconRight?: boolean;
  icon?: React.ReactNode;
  animated?: boolean;
  borderRadius?: number;
  color?: NormalColors;
  size?: NormalSizes;
}
