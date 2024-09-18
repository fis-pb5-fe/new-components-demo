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
  | "icon-primary"
  | "icon-secondary"
  | "icon-ghost"
  | "icon-primary-circle"

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
    /** Size md for only button icon */
  size?:  "lg" | "sm" | "md";
  children?: ReactNode;
  /**Disabled state of button*/
  disabled?: boolean;
  /**Set the icon of button*/
  icon?: JSX.Element;
  /**Set the icon of button*/
  iconPlace?: "left" | "right" | "both";
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
    props.type === "icon-primary" ||
    props.type === "icon-secondary" ||
    props.type === "icon-ghost" ||
    props.type === "icon-primary-circle"
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
