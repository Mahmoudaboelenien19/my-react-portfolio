import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { opacityVariant } from "../../assets/Utils/MianVariants";
import ReactAudioPlayer from "react-audio-player";
// import BotAns from "../../assets/audios/botAns.mp3";
// import Botasks from "../../assets/audios/defaultQuestions.mp3";
// import userAsks from "../../assets/audios/userPick.mp3";
interface Props {
  changeInd: React.Dispatch<React.SetStateAction<number>>;
  cls: string;
  msg: string;
  delay: number;
  i: number;
  isSessionUsed: boolean;
  id: number;
}
const Messages = ({
  isSessionUsed,
  id,
  delay,
  i,
  msg,
  cls,
  changeInd,
}: Props) => {
  const messageRef = useRef<null | HTMLDivElement>(null);
  console.log({ isSessionUsed });
  const [startAudio, setStartAudio] = useState(false);
  return (
    <>
      {msg !== " " && (
        <motion.div
          ref={messageRef}
          className={cls}
          onClick={() => {
            if (cls == "chat-av-q") {
              changeInd(i);
            }
          }}
          variants={opacityVariant}
          initial="start"
          animate="end"
          transition={{
            delay: isSessionUsed ? 0 : delay * 1.2,
            duration: 0.4,
          }}
          onAnimationComplete={() => {
            messageRef?.current!.scrollIntoView({ behavior: "smooth" });
            if (!isSessionUsed) {
              setStartAudio(true);
            }
          }}
        >
          {msg}
        </motion.div>
      )}
      {/* {startAudio && (
        <ReactAudioPlayer
          src={
            cls === "chat-av-q" ? Botasks : cls === "chat-q" ? userAsks : BotAns
          }
          autoPlay
        />
      )} */}
    </>
  );
};

export default Messages;
