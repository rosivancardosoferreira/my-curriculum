import React, { useState } from "react";

// STYLE
import { ContainerAboutMe, AboutMeInfos } from "./style";

// Assets
import { Images } from "assets/images";

// COMPONENTS
import {
  TitleSection,
  ButtonLinkPrimary,
  ContactLink,
  SimpleAlert
} from "presentation/Components";

// UTILS
import { ListContacts } from "utils/links";

export function AboutMe() {
  const [open, setOpen] = useState(false);
  function handleSimpleModal() {
    setOpen(true);
    setTimeout(() => setOpen(false), 3000);
  }
  return (
    <ContainerAboutMe>
      <SimpleAlert open={open} message="Item copiado" />
      <TitleSection title="SOBRE MIM" />
      <article className="about">
        <AboutMeInfos>
          <article className="about__infos">
            <article className="about__profile">
              <span className="about__line" />
              <img
                src={Images.Profile.src}
                alt={Images.Profile.alt}
                className="about__photo"
              />
            </article>
            <article className="about__texts">
              <p className="about__paragraph">
                Opa,
                <strong className="about__paragraph--strong">
                  {" "}
                  Rosivan Cardoso{" "}
                </strong>
                aqui, Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Earum repellendus enim iusto, nesciunt explicabo a similique
                dolor dolorum inventore iste quaerat ipsam eos autem cupiditate
                molestias doloremque sint magnam ullam.
              </p>
              <ButtonLinkPrimary
                link="#"
                typeButton="primary"
                title="Baixar currículo"
              />
              <div className="about__list">
                {ListContacts.map((elem, index) => {
                  return (
                    <ContactLink
                      copy={handleSimpleModal}
                      key={index}
                      link={elem.contact.link}
                      icon={elem.icon}
                      textLink={elem.contact.text}
                      useTextLink={elem.useText || false}
                    />
                  );
                })}
              </div>
            </article>
          </article>
        </AboutMeInfos>
      </article>
    </ContainerAboutMe>
  );
}
