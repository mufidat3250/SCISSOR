"use client";
import { ReactNode } from "react";
import "./style.scss";

type buttonProps = {
  title?: string;
  otherClass?: string;
  surfixIcon?: ReactNode;
  prefixIcon?: ReactNode;
};

const Button = ({ title, prefixIcon, surfixIcon, otherClass }: buttonProps) => {
  return (
    <button className={`button-wrapper ${otherClass}`}>
      <span>{surfixIcon && surfixIcon}</span> <span>{title}</span>{" "}
      <span>{prefixIcon && prefixIcon}</span>
    </button>
  );
};

export default Button;
