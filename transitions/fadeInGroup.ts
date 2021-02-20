export const fadeInGroup = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.125,
    },
  },
}

export const fadeInItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};