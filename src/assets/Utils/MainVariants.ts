export const headerVariant = {
  start: { opacity: 0 },
  end: ({
    bool = true,
    i = 0,
    delay = 0.1,
  }: {
    bool: boolean;
    i: number;
    delay: number;
  }) => ({
    opacity: bool ? 1 : 0,
    y: bool ? [-4, 4, 0] : 0,
    transition: { delay: i * delay, type: "spring", stiffness: 300 },
  }),
};
export const fontVariant = {
  start: { opacity: 0 },
  end: {
    opacity: 1,
    y: [-4, 4, 0],
    transition: { type: "spring", stiffness: 300 },
  },
};

export const textVariant = (opacity = 1) => ({
  start: { opacity: 0, x: 40 },
  end: { opacity: [0, 0.2, opacity], x: 0 },
});

export const opacityVariant = {
  start: { opacity: 0, scale: 0.8 },
  exit: { opacity: 0 },
  end: (opacity?: number) => ({ opacity: opacity || 1, scale: 1 }),
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



export const parVariant = {
  initial: {},
  view: {},
  end: {},
  exit: {},
};
