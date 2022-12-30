import { Button, Loading } from "@nextui-org/react";
import { FC } from "react";
import { IEMButtonProps } from "../models";

const EMButton: FC<IEMButtonProps> = ({
  title,
  shadow = false,
  loading = false,
  bordered = false,
  rounded = false,
  flat = true,
  rippleEffect = false,
  iconRight = false,
  icon,
  animated = true,
  borderRadius = 10,
  color = "default",
  size = "sm",
}) => {
  return (
    <Button
      ripple={rippleEffect}
      flat={flat}
      rounded={rounded}
      shadow={shadow}
      animated={animated}
      bordered={bordered}
      icon={icon ? icon : null}
      iconRight={iconRight ? icon : null}
      color={color}
      size={size}
      css={{
        borderRadius: borderRadius,
      }}
    >
      {loading ? (
        <Loading type="spinner" color="currentColor" size="sm" style={{ marginRight: 8 }} />
      ) : null}
      {title}
    </Button>
  );
};

export default EMButton;
