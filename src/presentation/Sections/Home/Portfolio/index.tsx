import React from "react";
import { motion } from "framer-motion";

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
import { AnimationYXO } from "utils/animations";

import { Icons } from "assets/icons";

export function Portfolio() {
  let im = 0.1;
  return (
    <ContainerPortfolio>
      <TitleSection title="DESENVOLVIMENTOS" />
      <SubTitleSection title="Web" />
      <MapPortfolio>
        {WebPortfolio.map((elem, index) => {
          return (
            <div className="portfolio" key={index}>
              <div className="portfolio__image">
                <img
                  src={elem.image.src}
                  alt={elem.image.alt}
                  className="portfolio__picture"
                />
                <div className="portfolio__hidden">
                  {elem.link ? (
                    <ButtonLinkPrimary
                      link={elem.link}
                      typeButton="primary"
                      title="Visitar"
                      target="_blank"
                    />
                  ) : (
                    <p className="portfolio__internal">Uso interno.</p>
                  )}
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
                <h4 className="portfolio__title">{elem.name}</h4>
                <p className="portfolio__description">{elem.description}</p>
              </div>
              <div className="portfolio__created">
                <div className="portfolio__datas">
                  <div className="portfolio__calendar">
                    {Icons.Calendar}
                    <p className="portfolio__date">
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
          );
        })}
      </MapPortfolio>

      <SubTitleSection title="Mobile" />
      <MapPortfolio>
        {MobilePortfolio.map((elem, index) => {
          im = im + 0.1;
          return (
            <div className="portfolio" key={index}>
              <div className="portfolio__image portfolio__image--mobile">
                <motion.img
                  src={elem.splash_image.src}
                  alt={elem.splash_image.alt}
                  {...AnimationYXO({
                    initialTranslateX: 90,
                    transitionDuration: 0.8,
                    transitionDelay: im + 0.4
                  })}
                  className="portfolio__picture--mobile"
                />
                <motion.img
                  src={elem.home_image.src}
                  alt={elem.home_image.alt}
                  {...AnimationYXO({
                    initialTranslateX: -95,
                    transitionDuration: 0.8,
                    transitionDelay: im + 0.4
                  })}
                  className="portfolio__picture--mobile"
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
                <h4 className="portfolio__title">{elem.name}</h4>
                <p className="portfolio__description">{elem.description}</p>
              </div>
              <div className="portfolio__created">
                <div className="portfolio__datas">
                  <div className="portfolio__calendar">
                    {Icons.Calendar}
                    <p className="portfolio__date">
                      Desenvolvido em: {elem.created}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </MapPortfolio>
    </ContainerPortfolio>
  );
}
