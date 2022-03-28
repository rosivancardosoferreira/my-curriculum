import React, { useEffect, useState } from "react";

// STYLE
import { ContainerNavHeader } from "./style";
export function NavHeader() {
  const [navbarColor, setNavbarColor] = useState(false);
  function changeBackground() {
    if (window.scrollY >= 80) {
      setNavbarColor(true);
    } else {
      if (setNavbarColor) setNavbarColor(false);
    }
  }

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <ContainerNavHeader activeBackground={navbarColor}>
      <nav className="header">
        <a href="#sobre-mim" className="header__link">
          Sobre mim
        </a>
        <a href="#com-o-que-trabalho" className="header__link">
          Com o que trabalho
        </a>
        <a href="#experiencia" className="header__link">
          Experiência
        </a>
        <a href="#desenvolvimentos" className="header__link">
          Desenvolvimentos
        </a>
      </nav>
    </ContainerNavHeader>
  );
}
