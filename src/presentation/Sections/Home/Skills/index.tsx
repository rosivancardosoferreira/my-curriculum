import React from "react";

// ASSETS
import { ListSkills, Tools } from "utils/skills";

// COMPONENTS
import { SubTitleSection, TitleSection } from "presentation/Components";

// STYLE
import { ContainerSkills, ContainerMapSkills } from "./style";

export function Skills() {
  return (
    <ContainerSkills>
      <TitleSection title="COM O QUE TRABALHO" />
      <SubTitleSection title="Habilidades" />
      <ContainerMapSkills>
        {ListSkills.map((elem, index) => {
          return (
            <div className="skill__item" key={index}>
              <img
                src={elem.icon.src}
                alt={elem.icon.alt}
                className="skill__icon"
              />
              <h3 className="skill__name">{elem.name}</h3>
            </div>
          );
        })}
      </ContainerMapSkills>

      <SubTitleSection title="Ferramentas" />
      <ContainerMapSkills>
        {Tools.map((elem, index) => {
          return (
            <div className="skill__item" key={index}>
              <img
                src={elem.icon.src}
                alt={elem.icon.alt}
                className="skill__icon"
              />
              <h3 className="skill__name">{elem.name}</h3>
            </div>
          );
        })}
      </ContainerMapSkills>
    </ContainerSkills>
  );
}
