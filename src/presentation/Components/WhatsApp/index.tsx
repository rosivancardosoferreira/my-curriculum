import React from "react";

// UTILS
import { ListContacts } from "utils/links";

// STYLE
import { ContainerWhatsApp } from "./style";

// ASSETS
import { Images } from "assets/images";

export function WhatsApp() {
  return (
    <ContainerWhatsApp>
      <a
        href={ListContacts[3].contact.link}
        target={"_blank"}
        className="whatsapp__link"
        rel="noreferrer"
      >
        <span className="whatsapp__effect" />
        <img
          src={Images.WhatsApp.src}
          alt={Images.WhatsApp.alt}
          className="whatsapp__icon"
        />
      </a>
    </ContainerWhatsApp>
  );
}
