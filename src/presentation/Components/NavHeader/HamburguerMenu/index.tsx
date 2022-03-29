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
        className={open ? "header__menu header__open" : "header__menu"}
      >
        <div className="header__menu_burger"></div>
      </div>
    </ContainerHamburguerMenu>
  );
}
