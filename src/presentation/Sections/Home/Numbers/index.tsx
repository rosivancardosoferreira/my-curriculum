import React from "react";
import { motion } from "framer-motion";

// STYLE
import { ContainerNumber } from "./style";

// UTILS
import { AnimationScale, AnimationYXO } from "utils/animations";

export function Numbers() {
  return (
    <ContainerNumber>
      <article className="number__article">
        <div className="number__infos">
          <motion.h4
            className="number__title"
            {...AnimationScale({
              transitionDuration: 0.3,
              transitionDelay: 0.4
            })}
          >
            2+
          </motion.h4>
          <motion.p
            {...AnimationYXO({ transitionDuration: 0.3, transitionDelay: 0.6 })}
            className="number__description"
          >
            ANOS DE EXPERIÊNCIA
          </motion.p>
        </div>
        <div className="number__infos">
          <motion.h4
            className="number__title"
            {...AnimationScale({
              transitionDuration: 0.3,
              transitionDelay: 0.6
            })}
          >
            10+
          </motion.h4>
          <motion.p
            {...AnimationYXO({ transitionDuration: 0.3, transitionDelay: 0.8 })}
            className="number__description"
          >
            PROJETOS ENTREGUES
          </motion.p>
        </div>
      </article>
    </ContainerNumber>
  );
}
