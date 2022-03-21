import React from "react";

// COMPONENTS
import {
  ButtonLinkPrimary,
  SubTitleSection,
  TitleSection
} from "presentation/Components";

// STYLE
import { ContainerPortfolio, MapPortfolio, Tech } from "./style";

// UTILS
import { WebPortfolio, MobilePortfolio } from "utils/portfolio";

import { Icons } from "assets/icons";

export function Portfolio() {
  return (
    <ContainerPortfolio>
      <TitleSection title="DESENVOLVIMENTOS" />
      <SubTitleSection title="Web" />
      <MapPortfolio>
        {WebPortfolio.map((elem, index) => (
          <div className="portfolio__item" key={index}>
            <div className="portfolio__item__area__image">
              <img
                src={elem.image.src}
                alt={elem.image.alt}
                className="portfolio__item__image"
              />
              <div className="portfolio__item__hidden">
                {elem.link ? (
                  <ButtonLinkPrimary
                    link={elem.link}
                    typeButton="primary"
                    title="Visitar"
                    target="_blank"
                  />
                ) : (
                  <p className="portfolio__item__internal">Uso interno.</p>
                )}
                {/* <ButtonLinkPrimary
                  link="#"
                  typeButton="primary"
                  title="Sobre"
                /> */}
                {elem.github && (
                  <ButtonLinkPrimary
                    link="#"
                    typeButton="primary"
                    title="GitHub"
                  />
                )}
              </div>
            </div>
            <div className="portfolio__infos">
              <div className="portfolio__techs">
                {elem.techs.map((item, i) => (
                  <Tech
                    key={i}
                    BgColor={item.bgColor}
                    ftColor={item.color}
                    className={item.class}
                  >
                    {item.name}
                  </Tech>
                ))}
              </div>
              <h4 className="portfolio__item__title">{elem.name}</h4>
              <p className="portfolio__item__description">{elem.description}</p>
            </div>
            <div className="portfolio__item__created">
              <div className="item__created__datas">
                <div className="item__created__content">
                  {Icons.Calendar}
                  <p className="portfolio__item__created__date">
                    Desenvolvido em: {elem.created}
                  </p>
                </div>
                {elem.github && (
                  <div className="portfolio__github">
                    <div className="item__on" />
                    {Icons.Github}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </MapPortfolio>

      <SubTitleSection title="Mobile" />
      <MapPortfolio>
        {MobilePortfolio.map((elem, index) => (
          <div className="portfolio__item" key={index}>
            <div className="portfolio__item__area__image portfolio__item__area__image--mobile">
              <img
                src={elem.splash_image.src}
                alt={elem.splash_image.alt}
                className="portfolio__item__image--mobile"
              />
              <img
                src={elem.home_image.src}
                alt={elem.home_image.alt}
                className="portfolio__item__image--mobile"
              />
            </div>
            <div className="portfolio__infos">
              <div className="portfolio__techs">
                {elem.techs.map((item, i) => (
                  <Tech
                    key={i}
                    BgColor={item.bgColor}
                    ftColor={item.color}
                    className={item.class}
                  >
                    {item.name}
                  </Tech>
                ))}
              </div>
              <h4 className="portfolio__item__title">{elem.name}</h4>
              <p className="portfolio__item__description">{elem.description}</p>
            </div>
            <div className="portfolio__item__created">
              <div className="item__created__datas">
                <div className="item__created__content">
                  {Icons.Calendar}
                  <p className="portfolio__item__created__date">
                    Desenvolvido em: {elem.created}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </MapPortfolio>
    </ContainerPortfolio>
  );
}
