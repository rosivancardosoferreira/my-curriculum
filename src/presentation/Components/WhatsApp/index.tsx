import React from "react";

// UTILS
import { ListContacts } from "utils/links";
import { AnimationScale } from "utils/animations";

// STYLE
import { ContainerWhatsApp } from "./style";

// ASSETS
import { Images } from "assets/images";
import { motion } from "framer-motion";

export function WhatsApp() {
  return (
    <ContainerWhatsApp
      as={motion.div}
      {...AnimationScale({ transitionDuration: 0.5, transitionDelay: 0.4 })}
    >
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
