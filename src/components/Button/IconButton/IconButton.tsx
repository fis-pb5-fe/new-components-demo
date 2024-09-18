import classNames from "classnames";
import { ButtonProps } from "../Button";
import React, { PropsWithChildren } from "react";
import "./IconButton.scss";

export interface IconButtonProps extends ButtonProps {}

const IconButton = (
  props: PropsWithChildren<IconButtonProps>,
  ref: React.Ref<any>
) => {
  const { htmlType, type, onClick, className, icon, disabled,size, ...rest } = props;
  return (
    <button
      type={htmlType}
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        "btn-component btn--icon",
        `btn--${type}`,
        `btn--${size}`,
        disabled ? "disabled" : "",
        className
      )}
      {...rest}
    >
      {icon}
    </button>
  );
};

export default IconButton;
