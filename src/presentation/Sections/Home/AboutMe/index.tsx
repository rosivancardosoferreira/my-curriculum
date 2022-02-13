import React from "react";

// STYLE
import { ContainerAboutMe } from "./style";

// COMPONENTS
import { TitleSection } from "presentation/Components/TitleSection";

export function AboutMe() {
  return (
    <ContainerAboutMe>
      <TitleSection title="SOBRE MIM" />
    </ContainerAboutMe>
  );
}
