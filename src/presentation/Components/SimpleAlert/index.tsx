import React from "react";
// STYLE
import { ContainerSimpleAlert } from "./style";

// INTERFACE
interface PropsSimpleAlert {
  message: string;
  open: boolean;
}

export function SimpleAlert({ message, open }: PropsSimpleAlert) {
  return (
    <ContainerSimpleAlert open={open}>
      <article className="simplealert__article">
        <p className="simplealert__text">{message}</p>
      </article>
    </ContainerSimpleAlert>
  );
}
