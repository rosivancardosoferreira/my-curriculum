import React from "react";
import { motion } from "framer-motion";

// ASSETS
import { ListSkills, Tools } from "utils/skills";

// COMPONENTS
import { SubTitleSection, TitleSection } from "presentation/Components";

// STYLE
import { ContainerSkills, ContainerMapSkills } from "./style";

export function Skills() {
  let ih = 0.3;
  let is = 0.3;
  return (
    <ContainerSkills>
      <TitleSection title="COM O QUE TRABALHO" />
      <SubTitleSection title="Habilidades" />
      <ContainerMapSkills>
        {ListSkills.map((elem, index) => {
          ih = ih + 0.1;
          return (
            <div className="skill__item" key={index}>
              <motion.img
                src={elem.icon.src}
                alt={elem.icon.alt}
                viewport={{ once: true }}
                initial={{ rotateY: 540 }}
                whileInView={{ rotateY: 0 }}
                transition={{ duration: 0.3, delay: ih }}
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
          is = is + 0.1;
          return (
            <div className="skill__item" key={index}>
              <motion.img
                src={elem.icon.src}
                alt={elem.icon.alt}
                viewport={{ once: true }}
                initial={{ rotateY: 360 }}
                whileInView={{ rotateY: 0 }}
                transition={{ duration: 0.3, delay: is }}
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
