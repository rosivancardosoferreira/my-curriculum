import React from "react";
import { ContainerHamburguerMenu } from "./style";

interface HamburguerMenuProps {
  open: boolean;
  setOpen: () => void;
}
export function HamburguerMenu({ open, setOpen }: HamburguerMenuProps) {
  return (
    <ContainerHamburguerMenu>
      <div
        onClick={setOpen}
        className={open ? "l-header__menu l-header__open" : "l-header__menu"}
      >
        <div className="l-header__menu_burger"></div>
      </div>
    </ContainerHamburguerMenu>
  );
}
