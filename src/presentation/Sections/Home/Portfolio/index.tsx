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
import { WebPortfolio } from "utils/portfolio";
import { Icons } from "assets/icons";

export function Portfolio() {
  return (
    <ContainerPortfolio>
      <TitleSection title="COM O QUE TRABALHO" />
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
                <ButtonLinkPrimary
                  link="#"
                  typeButton="primary"
                  title="Visitar"
                />
              </div>
            </div>
            <div className="portfolio__infos">
              <div className="portfolio__techs">
                {elem.techs.map((item, i) => (
                  <Tech key={i} BgColor={item.bgColor} ftColor={item.color}>
                    {item.name}
                  </Tech>
                ))}
              </div>
              <h4 className="portfolio__item__title">{elem.name}</h4>
              <p className="portfolio__item__description">{elem.description}</p>
            </div>
            <div className="portfolio__item__created">
              <div className="item__created__datas">
                {Icons.Calendar}
                <p className="portfolio__item__created__date">
                  Desenvolvido em: {elem.created}
                </p>
              </div>
            </div>
          </div>
        ))}
      </MapPortfolio>
    </ContainerPortfolio>
  );
}
