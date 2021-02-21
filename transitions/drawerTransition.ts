export const drawerTransition = {
  initial: {
    opacity: 0,
    x: '-60%',
    duration: 3,
    type: 'tween',
  },
  enter: {
    opacity: 1,
    x: '0',
    duration: 3,
    type: 'tween',
  },
  exit: {
    opacity: 0,
    x: '-60%',
    duration: 3,
    type: 'tween',
  },
};
