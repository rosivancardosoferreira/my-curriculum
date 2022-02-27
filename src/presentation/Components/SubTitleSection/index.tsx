import React from "react";

// STYLE
import { ContainerTitleSection } from "./style";

interface PropsTitleSection {
  title: string;
}
export function SubTitleSection({ title }: PropsTitleSection) {
  return (
    <ContainerTitleSection>
      <hr className="sub__title__line" />
      <h2 className="section__sub__title">{title}</h2>
    </ContainerTitleSection>
  );
}
