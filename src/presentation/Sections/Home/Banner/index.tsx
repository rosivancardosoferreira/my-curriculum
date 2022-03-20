import React, { useState } from "react";

// STYLE
import { ContainerBanner } from "./style";

// ASSETS
import { Icons } from "assets/icons";
import { ListContacts } from "utils/links";

// COMPONENTS
import { ContactLink, SimpleAlert } from "presentation/Components";

export function Banner() {
  const [open, setOpen] = useState(false);
  function handleSimpleModal() {
    setOpen(true);
    setTimeout(() => setOpen(false), 3000);
  }
  return (
    <ContainerBanner>
      <SimpleAlert open={open} message="Item copiado" />
      <article className="banner__infos">
        <h1 className="banner__infos__name">ROSIVAN</h1>
        <p className="banner__infos__dev">Desenvolvedor frontend</p>
      </article>
      <div className="banner__contacts">
        {ListContacts.map((elem, index) => {
          return (
            <ContactLink
              copy={handleSimpleModal}
              key={index}
              link={elem.link}
              icon={elem.icon}
              email={index === 2}
            />
          );
        })}
      </div>
      {Icons.ArrowModel2}
    </ContainerBanner>
  );
}
