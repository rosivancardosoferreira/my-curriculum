import React from "react";

// STYLE
import { ContainerBanner } from "./style";

// ASSETS
import { Icons } from "assets/icons";
import { MyLinks } from "utils/links";

// COMPONENTS
import { ContactLink } from "presentation/Components";

export function Banner() {
  const ListContacts = [
    {
      icon: Icons.Github,
      link: MyLinks.Github.link
    },
    {
      icon: Icons.Linkedin,
      link: MyLinks.Linkedin.link
    },
    {
      icon: Icons.Email,
      link: MyLinks.Email.link
    },
    {
      icon: Icons.WhatsApp,
      link: MyLinks.WhatsApp.link
    }
  ];
  return (
    <ContainerBanner>
      <article className="banner__infos">
        <h1 className="banner__infos__name">ROSIVAN</h1>
        <p className="banner__infos__dev">Desenvolvedor frontend</p>
      </article>
      <div className="banner__contacts">
        {ListContacts.map((elem, index) => {
          return <ContactLink key={index} link={elem.link} icon={elem.icon} />;
        })}
      </div>
      {Icons.ArrowModel2}
    </ContainerBanner>
  );
}
