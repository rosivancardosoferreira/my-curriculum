import React, { useEffect, useState } from "react";
import { HamburguerMenu } from "./HamburguerMenu";

// STYLE
import { ContainerNavHeader } from "./style";

export function NavHeader() {
  const [navbarColor, setNavbarColor] = useState(false);
  const [open, setOpen] = useState(false);
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

  useEffect(() => {
    if (open) {
      document.body.classList.add("hidden__scroll");
    } else {
      document.body.classList.remove("hidden__scroll");
    }
  }, [open]);
  function handleMenu() {
    setOpen(!open);
  }

  function handleAnchoring() {
    open && setOpen(false);
  }

  return (
    <ContainerNavHeader sandwich={open} activeBackground={navbarColor}>
      <HamburguerMenu open={open} setOpen={handleMenu} />
      <nav className="header">
        <a href="#sobre-mim" className="header__link" onClick={handleAnchoring}>
          Sobre mim
        </a>
        <a
          href="#com-o-que-trabalho"
          className="header__link"
          onClick={handleAnchoring}
        >
          Com o que trabalho
        </a>
        <a
          href="#experiencia"
          className="header__link"
          onClick={handleAnchoring}
        >
          Experiência
        </a>
        <a
          href="#desenvolvimentos"
          className="header__link"
          onClick={handleAnchoring}
        >
          Desenvolvimentos
        </a>
      </nav>
    </ContainerNavHeader>
  );
}
