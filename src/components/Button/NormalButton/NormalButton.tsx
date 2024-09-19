import classNames from "classnames";
import React, { PropsWithChildren } from "react";
import { ButtonProps } from "../Button";
import "./NormalButton.scss";

export type NormalButtonProps = ButtonProps;
const NormalButton = (props: PropsWithChildren<NormalButtonProps>) => {
  const {
    type,
    htmlType,
    onClick,
    className,
    disabled,
    children,
    loading,
    size,
    icon,
    iconPlace,
    ...rest
  } = props;

  return (
    <button
      type={htmlType}
      onClick={!loading ? onClick : () => undefined}
      disabled={disabled}
      className={classNames(
        "btn-component btn-normal",
        `btn--${type}`,
        `btn--${size}`,
        disabled ? "disabled" : "",
        className
      )}
      {...rest}
    >
      <div className="button-content">
        {icon && (iconPlace === "left" || iconPlace === "both") ? icon : ""}
        <div
          className={classNames("children-content", {
            "m-l--2xs": icon && (iconPlace === "left" || iconPlace === "both")  &&
            size === "lg",
            "m-r--2xs": icon && (iconPlace === "right" || iconPlace === "both")  &&
            size === "lg",
            "m-l--3xs":
              icon &&
              (iconPlace === "left" || iconPlace === "both") &&
              size === "sm",
            "m-r--3xs":
              icon &&
              (iconPlace === "right" || iconPlace === "both") &&
              size === "sm",
          })}
        >
          {children}
        </div>
        {icon && (iconPlace === "right" || iconPlace === "both") ? icon : ""}
      </div>
    </button>
  );
};

export default NormalButton;
