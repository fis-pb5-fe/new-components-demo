import classNames from "classnames";
import React, { PropsWithChildren } from "react";
import { ButtonProps } from "../Button";
import "./LinkButton.scss";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface LinkButtonProps extends ButtonProps {}

const LinkButton = (props: PropsWithChildren<LinkButtonProps>) => {
  const {
    type,
    htmlType,
    onClick,
    className,
    disabled,
    children,
    size,
    icon,
    iconPlace,
    ...rest
  } = props;

  return (
    <button
      type={htmlType}
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        "btn-component",
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
            "m-l--3xs": icon && (iconPlace === "left" || iconPlace === "both"),
            "m-r--3xs": icon && (iconPlace === "right" || iconPlace === "both"),
          })}
        >
          <a href="sdf" target="_blank">{children}</a>
        </div>
        {icon && (iconPlace === "right" || iconPlace === "both") ? icon : ""}
      </div>
    </button>
  );
};

export default LinkButton;
