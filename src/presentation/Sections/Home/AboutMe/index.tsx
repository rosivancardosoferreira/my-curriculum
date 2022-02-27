import React from "react";

// STYLE
import { ContainerAboutMe, AboutMeInfos } from "./style";

// Assets
import { Images } from "assets/images";

// COMPONENTS
import {
  TitleSection,
  ButtonLinkPrimary,
  ContactLink
} from "presentation/Components";

// UTILS
import { ListContacts } from "utils/links";

export function AboutMe() {
  return (
    <ContainerAboutMe>
      <TitleSection title="SOBRE MIM" />
      <article className="about__container">
        <AboutMeInfos>
          <article className="about__infos">
            <article className="about__profile__photo">
              <span className="about__infos__line" />
              <img
                src={Images.Profile.src}
                alt={Images.Profile.alt}
                className="about__infos__photo"
              />
            </article>
            <article className="about__container__text">
              <p className="about__container__text__p">
                Opa, me chamo
                <strong className="about__container__text__strong">
                  {" "}
                  Rosivan Cardoso
                </strong>
                , sou desenvolvedor front-end há uns 2 anos. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Vitae morbi ut ac quam
                aliquet ornare. Nec venenatis at quisque lorem nisi, quam
                mollis. Diam nunc nunc, urna vel ullamcorper egestas. Nec
                sollicitudin leo in ultricies vel diam varius luctus.
              </p>
              <ButtonLinkPrimary
                link="#"
                typeButton="primary"
                title="Baixar currículo"
              />
              <div className="list__contacts">
                {ListContacts.map((elem, index) => {
                  return (
                    <ContactLink
                      key={index}
                      link={elem.link}
                      icon={elem.icon}
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
