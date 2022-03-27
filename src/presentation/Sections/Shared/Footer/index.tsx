import React from "react";

// STYLES
import { ContainerFooter } from "./style";

// UTILS
import { ListContacts } from "utils/links";

export function Footer() {
  return (
    <ContainerFooter>
      <article className="footer">
        <nav className="footer__contacts">
          {ListContacts.map((elem, index) => (
            <div key={index} className="footer__item">
              <div className="footer__icon">{elem.icon}</div>
              <a
                href={elem.contact.link}
                target="_blank"
                className="footer__link"
                rel="noreferrer"
              >
                {elem.contact.text}
              </a>
            </div>
          ))}
        </nav>
        <h3 className="footer__thanks">Obrigado por ver até aqui!</h3>
        <p className="footer__credits">
          @ 2022 - Desenvolvido por Rosivan Cardoso
        </p>
      </article>
    </ContainerFooter>
  );
}
