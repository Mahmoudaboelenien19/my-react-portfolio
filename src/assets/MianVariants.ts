export const fontVariant = {
  start: { opacity: 0 },
  end: ({
    bool = true,
    i,
    delay = 0.125,
  }: {
    bool: boolean;
    i: number;
    delay: number;
  }) => ({
    opacity: bool ? 1 : 0,
    y: bool ? [-4, 4, 0] : 0,
    transition: { delay: 0.2 + i * delay, typ: "spring", stiffness: 300 },
  }),
};

export const textVariant = {
  start: { opacity: 0, x: 400 },
  end: { opacity: 1, x: 0 },
};

export const opacityVariant = {
  start: { opacity: 0 },
  exit: { opacity: 0 },
  end: { opacity: 1 },
};

export const parVar = {
  start: {},
  end: {
    transition: {
      delayChildren: 1,
      when: "beforeChidren",
      staggerChildren: 0.24,
    },
  },
  exit: {
    transition: {
      when: "afterChidren",
      staggerChildren: 0.24,
      staggerDirection: -1,
    },
  },
};
