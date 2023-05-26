import React, { useRef } from "react";
import { motion } from "framer-motion";
import { opacityVariant } from "../../assets/MianVariants";
interface Props {
  changeInd: React.Dispatch<React.SetStateAction<number>>;
  cls: string;
  msg: string;
  delay: number;
  i: number;
}
const Messages = ({ delay, i, msg, cls, changeInd }: Props) => {
  const messageRef = useRef<null | HTMLDivElement>(null);

  console.log({
    msg,
    i,
  });
  return (
    <>
      {msg !== " " && (
        <motion.div
          ref={messageRef}
          className={cls}
          onClick={() => {
            if (cls == "chat-av-q") {
              changeInd(i - 1);
            }
          }}
          variants={opacityVariant}
          initial="start"
          animate="end"
          transition={{ delay: delay * 0.3, duration: 0.3 }}
          onAnimationComplete={() =>
            messageRef?.current!.scrollIntoView({ behavior: "smooth" })
          }
        >
          {" "}
          {msg}
        </motion.div>
      )}
    </>
  );
};

export default Messages;
