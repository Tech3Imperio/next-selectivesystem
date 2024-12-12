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

// export const FadeLeft = (delay) => {
//   return {
//     hidden: {
//       opacity: 0,
//       x: 100,
//     },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         duration: 1,
//         delay: delay,
//       },
//     },
//   };
// };
export const FadeLeft = (delay) => {
  return {
    hidden: {
      opacity: 0,
      x: 100, // Start from off-screen right
    },
    visible: {
      opacity: 1,
      x: 0, // End at the final position
      transition: {
        duration: 0.5, // Faster transition (shortened from 1s to 0.5s)
        delay: delay, // Keep dynamic delay based on product data
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
