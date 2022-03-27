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
  useTextLink: boolean;
}
export function ContactLink({
  link,
  icon,
  copy,
  textLink,
  useTextLink
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
      <div className="contact">
        <ul className="contact__list">
          <li className="contact__item">
            {Icons.OpenLink}
            <a
              href={link}
              className="contact__link contact__link--cursor"
              target={"_blank"}
              rel="noreferrer"
            >
              Abrir link
            </a>
          </li>
          <li className="contact__item">
            {Icons.CopyText}
            <button
              className="contact__link contact__link--copy"
              onClick={() => CopyText(useTextLink ? textLink : link)}
            >
              {useTextLink ? "Copiar" : "Copiar link"}
            </button>
          </li>
        </ul>
        {Icons.ArrowDown}
      </div>
      <div className="link__svg">{icon}</div>
    </ContainerContactLink>
  );
}
