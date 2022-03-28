interface PropsAnimationsYX {
  initialOpacity?: number;
  initialTranslateY?: number;
  initialTranslateX?: number;
  whileInViewOpacity?: number;
  whileInViewTranslateY?: number;
  whileInViewTranslateX?: number;
  transitionDuration: number;
  transitionDelay?: number;
}

export function AnimationYXO({
  initialOpacity,
  initialTranslateY,
  initialTranslateX,
  whileInViewOpacity,
  whileInViewTranslateY,
  whileInViewTranslateX,
  transitionDuration,
  transitionDelay
}: PropsAnimationsYX) {
  return {
    viewport: {
      once: true
    },
    initial: {
      opacity: initialOpacity || 0,
      translateY: initialTranslateY || 0,
      translateX: initialTranslateX || 0
    },
    whileInView: {
      opacity: whileInViewOpacity || 1,
      translateY: whileInViewTranslateY || 0,
      translateX: whileInViewTranslateX || 0
    },
    transition: {
      duration: transitionDuration || 0,
      delay: transitionDelay || 0
    }
  };
}

interface PropsAnimationsScale {
  initialOpacity?: number;
  initialScale?: number;
  whileInViewOpacity?: number;
  whileInViewScale?: number;
  transitionDuration: number;
  transitionDelay?: number;
}

export function AnimationScale({
  initialOpacity,
  initialScale,
  whileInViewOpacity,
  whileInViewScale,
  transitionDuration,
  transitionDelay
}: PropsAnimationsScale) {
  return {
    viewport: {
      once: true
    },
    initial: {
      opacity: initialOpacity || 0,
      scale: initialScale || 0
    },
    whileInView: {
      opacity: whileInViewOpacity || 1,
      scale: whileInViewScale || 1
    },
    transition: {
      duration: transitionDuration,
      delay: transitionDelay || 0
    }
  };
}
