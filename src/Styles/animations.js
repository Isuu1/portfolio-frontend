const windowWidth = window.innerWidth;
console.log(windowWidth);

export const childDelayTopSpring = {
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
  hidden: {
    opacity: 0,
  },
};

export const headlineSpringAnimation = {
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  hidden: {
    scale: 0.2,
    opacity: 0,
  },
};

export const iconsDelayAnimation = {
  visible: {
    opacity: 1,
    transform: "translateY(0px)", // Adding transform for smoother rendering
  },
  hidden: {
    opacity: 0,
    transform: "translateY(20px)", // Starting with an offset
  },
  transition: {
    type: "spring", // Spring animation for smoother motion
    stiffness: 100,
  },
};

export const noOpacitySlide = {
  visible: {
    y: 0,

    transition: {
      type: "spring",
      bounce: 0.7,
      duration: 1,
      delay: 0.2,
    },
  },
  hidden: {
    y: 20,
  },
};

export const slideInTopSpring = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.7,
      duration: 1,
    },
  },
  hidden: {
    y: -30,
    opacity: 0,
  },
  exit: {
    y: -30,
    opacity: 0,
  },
};

export const opacityAnimation = {
  visible: {
    opacity: 1,
    transition: {
      duration: 1.2,
    },
  },
  hidden: {
    opacity: 0,
  },
};

export const scaleAndOpacityAnimation = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: 0.2,
    },
  },
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
};

//Single project image animation
export const slideInLeft = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      delay: 0.2,
    },
  },
  hidden: {
    opacity: 0,
    x: -500,
  },
  exit: {
    opacity: 0,
    x: -500,
    transition: {
      duration: 0.4,
      delay: 0.2,
    },
  },
};

// Whole single project page animation with delay for children
export const singleProjectAppear = {
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
  hidden: {
    opacity: 0,
  },
  exit: {
    opacity: 0,
    top: -1500,
    transition: {
      duration: 0.5,
    },
  },
};

//Animation for a content of single project page
export const singleProjectContentAppear = {
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      delayChildren: 0.4,
      staggerChildren: 0.2,
    },
  },
  hidden: {
    opacity: 0,
  },
  exit: {
    opacity: 0,
    y: -100,
    transition: {
      duration: 0.4,
    },
  },
};

export const slideInBottom = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  hidden: {
    y: 30,
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

export const newFancyAnimation = {
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.25,
    },
  },
  hidden: {
    opacity: 0.2,
    scale: 0.75,
    y: 70,
  },
  exit: {
    opacity: 0.2,
    y: 70,
    scale: 0.75,
    transition: {
      duration: 0.25,
    },
  },
};
