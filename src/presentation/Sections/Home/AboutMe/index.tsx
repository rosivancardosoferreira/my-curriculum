import React, { useState } from "react";
import { motion } from "framer-motion";

// STYLE
import { ContainerAboutMe, AboutMeInfos } from "./style";

// Assets
import { Images } from "assets/images";

// COMPONENTS
import {
  TitleSection,
  // ButtonLinkPrimary,
  ContactLink,
  SimpleAlert
} from "presentation/Components";

// UTILS
import { ListContacts } from "utils/links";
import { AnimationYXO } from "utils/animations";

export function AboutMe() {
  const [open, setOpen] = useState(false);
  let i = 0.4;
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
              <motion.span
                {...AnimationYXO({
                  initialTranslateX: -50,
                  transitionDuration: 0.4,
                  transitionDelay: 0.7
                })}
                className="about__line"
              />
              <motion.img
                {...AnimationYXO({
                  initialTranslateX: -50,
                  transitionDuration: 0.4,
                  transitionDelay: 0.4
                })}
                src={Images.Profile.src}
                alt={Images.Profile.alt}
                className="about__photo"
              />
            </article>
            <article className="about__texts">
              <motion.p
                {...AnimationYXO({
                  transitionDuration: 0.8,
                  transitionDelay: 0.4
                })}
                className="about__paragraph"
              >
                Opa,
                <strong className="about__paragraph--strong">
                  {" "}
                  Rosivan Cardoso{" "}
                </strong>
                aqui, sou desenvolvedor Web e Mobile com 2 anos de experiências
                atuando principalmente em freelancers como fullstack utilizando
                PHP e Node.js. Conforme foram surgindo oportunidades melhores
                passei a me dedicar um pouco mais ao frontend e cá estou ✌️😉.
              </motion.p>
              {/* <ButtonLinkPrimary
                link="#"
                typeButton="primary"
                title="Baixar currículo"
              /> */}
              <div className="about__list">
                {ListContacts.map((elem, index) => {
                  i = i + 0.3;
                  return (
                    <ContactLink
                      durationAnimation={i}
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
