import React from "react";
import { motion } from "framer-motion";

// STYLE
import { ContainerTitleSection } from "./style";

// UTILS
import { AnimationScale } from "utils/animations";

interface PropsTitleSection {
  title: string;
}
export function SubTitleSection({ title }: PropsTitleSection) {
  return (
    <ContainerTitleSection>
      <motion.hr
        viewport={{ once: true }}
        initial={{ opacity: 0, width: 0 }}
        whileInView={{ opacity: 1, width: 60 }}
        transition={{ duration: 0.5 }}
        className="subtitle__line"
      />
      <motion.h2
        {...AnimationScale({
          transitionDuration: 0.4,
          transitionDelay: 0.2
        })}
        className="subtitle__title"
      >
        {title}
      </motion.h2>
    </ContainerTitleSection>
  );
}
