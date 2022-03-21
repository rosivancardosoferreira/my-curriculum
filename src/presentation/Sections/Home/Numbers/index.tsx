import React from "react";

// STYLE
import { ContainerNumber } from "./style";
export function Numbers() {
  return (
    <ContainerNumber>
      <article className="number__article">
        <div className="number__infos">
          <h4 className="number__title">2+</h4>
          <p className="number__description">ANOS DE EXPERIÊNCIA</p>
        </div>
        <div className="number__infos">
          <h4 className="number__title">10+</h4>
          <p className="number__description">PROJETOS ENTREGUES</p>
        </div>
      </article>
    </ContainerNumber>
  );
}
