import React from "react";

import { ContainerButton, ContainerLinkButton } from "./style";
interface PropsButtonPrimary {
  title: string;
  type?: "button" | "submit";
  typeButton?: "primary";
  onClick?: () => void;
}

export function ButtonPrimary({
  title,
  type,
  typeButton,
  onClick
}: PropsButtonPrimary) {
  return (
    <ContainerButton
      type={type || "button"}
      typeBtn={typeButton}
      onClick={onClick}
      className="field__button"
    >
      {title}
    </ContainerButton>
  );
}

interface PropsLinkButtonPrimary {
  title: string;
  link: string;
  typeButton: "primary";
  onClick?: () => void;
  download?: boolean;
  target?: "_blank";
}
export function ButtonLinkPrimary({
  title,
  link,
  typeButton,
  onClick,
  download,
  target
}: PropsLinkButtonPrimary) {
  return (
    <ContainerLinkButton
      className="field__button"
      download={download}
      href={link}
      typeBtn={typeButton}
      onClick={onClick}
      target={target || "_self"}
    >
      {title}
    </ContainerLinkButton>
  );
}
