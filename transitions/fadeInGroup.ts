export const fadeInGroup = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.125,
    },
  },
}

export const fadeInGroupDelayed = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.5,
      staggerChildren: 0.125,
    },
  },
}

export const fadeInItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};