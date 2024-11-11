export const sidebarAnimationOpen = () => {
  return {
    initial: false,
    animate: { y: 0 },
    exit: { y: "-100%" },
    transition: { duration: 0.8, ease: "easeInOut" },
  };
};

export const sidebarAnimationClose = () => {
  return {
    initial: false,
    animate: { y: "-100%" },
    exit: { y: "100%" },
    transition: { duration: 0.7, ease: "easeInOut" },
  };
};

export const dropdownAnimationOpen = () => {
  return {
    initial: { x: "-100%" },
    animate: { x: "0%" },
    exit: { x: "-100%" },
    transition: { duration: 0.8, ease: "easeInOut" },
  };
};

export const FadeUp = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: delay,
      },
    },
  };
};

export const FadeLeft = (delay) => {
  return {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: delay,
      },
    },
  };
};

export const FadeRight = (delay) => {
  return {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: delay,
      },
    },
  };
};

export const FadeDown = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: -100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: delay,
      },
    },
  };
};
