import React, { useState } from "react";
import { motion } from "framer-motion";

// STYLE
import { ContainerBanner } from "./style";

// ASSETS
import { Icons } from "assets/icons";

// UTILS
import { ListContacts } from "utils/links";
import { AnimationYX } from "utils/animations";

// COMPONENTS
import { ContactLink, SimpleAlert } from "presentation/Components";

export function Banner() {
  const [open, setOpen] = useState(false);
  let i = 0.4;
  function handleSimpleModal() {
    setOpen(true);
    setTimeout(() => setOpen(false), 3000);
  }
  return (
    <ContainerBanner>
      <SimpleAlert open={open} message="Item copiado" />
      <article className="banner">
        <motion.h1
          {...AnimationYX({
            initialTranslateY: 130,
            transitionDuration: 0.5,
            transitionDelay: 0.1
          })}
          className="banner__name"
        >
          ROSIVAN
        </motion.h1>
        <motion.p
          {...AnimationYX({
            initialTranslateY: 110,
            transitionDuration: 0.5,
            transitionDelay: 0.3
          })}
          className="banner__dev"
        >
          Desenvolvedor frontend
        </motion.p>
      </article>
      <div className="banner__contacts">
        {ListContacts.map((elem, index) => {
          i = i + 0.3;
          return (
            <ContactLink
              durationAnimation={i}
              copy={handleSimpleModal}
              key={index}
              link={elem.contact.link}
              icon={elem.icon}
              textLink={elem.contact.text}
              useTextLink={elem.useText || false}
            />
          );
        })}
      </div>
      {Icons.ArrowModel2}
    </ContainerBanner>
  );
}
