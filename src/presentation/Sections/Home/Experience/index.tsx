import React from "react";

// STYLE
import { ContainerExperience } from "./style";

export function Experience() {
  const datas = [
    {
      number: "2+",
      description: "ANOS DE EXPERIÊNCIA"
    },
    {
      number: "7+",
      description: "PROJETOS ENTREGUES"
    }
  ];
  return (
    <ContainerExperience>
      <article className="experience__container">
        {datas.map((elem, index) => (
          <div className="experience__box" key={index}>
            <strong className="experience__box__number">{elem.number}</strong>
            <span className="experience__box__description">
              {elem.description}
            </span>
          </div>
        ))}
      </article>
    </ContainerExperience>
  );
}
