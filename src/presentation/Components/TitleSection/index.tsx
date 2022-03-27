import React from "react";
import { motion } from "framer-motion";

// UTILS
import { AnimationScale } from "utils/animations";

// STYLE
import { ContainerTitleSection } from "./style";

interface PropsTitleSection {
  title: string;
}
export function TitleSection({ title }: PropsTitleSection) {
  return (
    <ContainerTitleSection>
      <motion.hr
        viewport={{ once: true }}
        initial={{ opacity: 0, height: 0 }}
        whileInView={{ opacity: 1, height: 100 }}
        transition={{ duration: 0.5 }}
        className="title__line"
      />
      <motion.h2
        {...AnimationScale({
          transitionDuration: 0.4,
          transitionDelay: 0.4
        })}
        className="section__title"
      >
        {title}
      </motion.h2>
    </ContainerTitleSection>
  );
}
