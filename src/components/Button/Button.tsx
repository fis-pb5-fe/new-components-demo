import React, {
  ButtonHTMLAttributes,
  PropsWithChildren,
  ReactNode,
} from "react";
import "./ButtonComponent.scss";
import IconButton from "./IconButton";
import LinkButton from "./LinkButton";
import NormalButton from "./NormalButton/NormalButton";

export type ButtonType =
  | "primary"
  | "secondary"
  | "tertiary"
  | "text"
  | "danger"
  | "link"
  | "icon-only-primary"
  | "icon-only-outline-primary"
  | "icon-only-danger"
  | "icon-only-outline-danger"
  | "icon-only-ghost";

export interface ButtonProps {
  /**Change the design of button*/
  type?: ButtonType;
  /**Is the button loading or not*/
  loading?: boolean;
  /**Type of component – button*/
  htmlType?: ButtonHTMLAttributes<any>["type"];
  /**Pass the classname to change the style of button*/
  className?: string;
  /**Function to be called when the button is clicked*/
  onClick?: ButtonHTMLAttributes<any>["onClick"];
  size?:  "lg" | "sm";
  children?: ReactNode;
  /**Disabled state of button*/
  disabled?: boolean;
  /**Set the icon of button*/
  icon?: JSX.Element;
  /**Set the icon of button*/
  iconPlace?: "left" | "right" | "both";
}

const Button = (props: PropsWithChildren<ButtonProps>, ref: React.Ref<any>) => {
  if (
    props.type === "primary" ||
    props.type === "secondary" ||
    props.type === "tertiary" ||
    props.type === "text" ||
    props.type === "danger"
  ) {
    return <NormalButton {...props} />;
  }

  if (props.type === "link") {
    return <LinkButton {...props} />;
  }

  if (
    props.type === "icon-only-primary" ||
    props.type === "icon-only-outline-primary" ||
    props.type === "icon-only-danger" ||
    props.type === "icon-only-outline-danger" ||
    props.type === "icon-only-ghost"
  ) {
    return <IconButton {...props} />;
  }

  return <></>;
};

Button.defaultProps = {
  type: "primary",
  htmlType: "button",
  disabled: false,
  size: "lg",
};

export default Button;
