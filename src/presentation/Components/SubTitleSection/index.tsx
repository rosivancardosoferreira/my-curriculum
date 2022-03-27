import React from "react";

// STYLE
import { ContainerTitleSection } from "./style";

interface PropsTitleSection {
  title: string;
}
export function SubTitleSection({ title }: PropsTitleSection) {
  return (
    <ContainerTitleSection>
      <hr className="subtitle__line" />
      <h2 className="subtitle__title">{title}</h2>
    </ContainerTitleSection>
  );
}
