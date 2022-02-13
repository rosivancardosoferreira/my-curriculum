import React, { ReactElement } from "react";

// ASSETS
import { Icons } from "assets/icons";

// STYLE
import { ContainerContactLink } from "./style";

interface PropsContactLink {
  link: string;
  icon: ReactElement;
}
export function ContactLink({ link, icon }: PropsContactLink) {
  return (
    <ContainerContactLink>
      <div className="link__hover">
        <ul className="link__hover__list">
          <li className="link__hover__list__item">
            {Icons.OpenLink}
            <a
              href={link}
              className="link__item"
              target={"_blank"}
              rel="noreferrer"
            >
              Abrir Link
            </a>
          </li>
          <li className="link__hover__list__item">
            {Icons.CopyText}
            <a href="#" className="link__item">
              Copiar Link
            </a>
          </li>
        </ul>
        {Icons.ArrowDown}
      </div>
      <div className="link__svg">{icon}</div>
    </ContainerContactLink>
  );
}
