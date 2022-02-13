import React from "react";

// STYLE
import { ContainerTitleSection } from "./style";

interface PropsTitleSection {
  title: string;
}
export function TitleSection({ title }: PropsTitleSection) {
  return (
    <ContainerTitleSection>
      <hr className="title__line" />
      <h2 className="section__title">{title}</h2>
    </ContainerTitleSection>
  );
}
