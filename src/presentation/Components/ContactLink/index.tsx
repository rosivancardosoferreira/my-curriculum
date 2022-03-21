import React, { ReactElement } from "react";

// ASSETS
import { Icons } from "assets/icons";

// STYLE
import { ContainerContactLink } from "./style";

interface PropsContactLink {
  link: string;
  icon: ReactElement;
  copy: () => void;
  textLink: string;
  email: boolean;
}
export function ContactLink({
  link,
  icon,
  copy,
  textLink,
  email
}: PropsContactLink) {
  const CopyText = async (text: string) => {
    await navigator.clipboard
      .writeText(text)
      .then(() => {
        copy();
      })
      .catch(() => {
        console.log("erro ao copiar");
      });
  };
  return (
    <ContainerContactLink>
      <div className="link__hover">
        <ul className="link__hover__list">
          <li className="link__hover__list__item">
            {Icons.OpenLink}
            <a
              href={link}
              className="link__item link__item--cursor"
              target={"_blank"}
              rel="noreferrer"
            >
              Abrir Link
            </a>
          </li>
          <li className="link__hover__list__item">
            {Icons.CopyText}
            <button
              className="link__item link__item--copy"
              onClick={() => CopyText(email ? textLink : link)}
            >
              Copiar Link
            </button>
          </li>
        </ul>
        {Icons.ArrowDown}
      </div>
      <div className="link__svg">{icon}</div>
    </ContainerContactLink>
  );
}
