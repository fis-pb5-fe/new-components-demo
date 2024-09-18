import classNames from "classnames";
import React, { PropsWithChildren } from "react";
import { ButtonProps } from "../Button";
import "./NormalButton.scss";

export type NormalButtonProps = ButtonProps
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
    iconLeft,
    iconRight,
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
        {iconLeft}
        <div className={classNames("children-content",{
          "m-l--2xs": iconLeft,
          "m-r--2xs": iconRight,
        })}>{children}</div>
        {iconRight}
      </div>
    </button>
  );
};

export default NormalButton;
