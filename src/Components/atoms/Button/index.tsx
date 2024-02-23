"use client";
import { ReactNode } from "react";
import "./style.scss";

type buttonProps = {
  title?: string;
  otherClass?: string;
  surfixIcon?: ReactNode;
  prefixIcon?: ReactNode;
  disabled?: boolean;
  onClick?:React.MouseEventHandler<HTMLButtonElement>
};

const Button = ({ title, prefixIcon, surfixIcon, otherClass, disabled, onClick}: buttonProps) => {
  return (
    <button className={`button-wrapper ${otherClass}`} disabled={disabled} onClick={onClick}>
      <span>{surfixIcon && surfixIcon}</span> <span>{title}</span>{" "}
      <span>{prefixIcon && prefixIcon}</span>
    </button>
  );
};

export default Button;
