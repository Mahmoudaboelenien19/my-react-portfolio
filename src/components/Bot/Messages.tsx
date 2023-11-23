import { Fragment, useRef } from "react";
import { motion } from "framer-motion";
import { botArr } from "@/assets/Utils/Arr.js";
import { opacityVariant } from "@/assets/Utils/MainVariants";
import CursorDimensionWhenHover from "../widgets/animation/CursorDimensionWhenHover";
const playAudio = (audio: string) => new Audio(audio).play();
export const parVar = {
  start: {},
  end: {
    transition: {
      when: "beforeChidren",
      staggerChildren: 0.5,
    },
  },
};

interface Props {
  selectedMsg: number[];
  setSelectedMsg: React.Dispatch<React.SetStateAction<number[]>>;
}
const Messages = ({ selectedMsg, setSelectedMsg }: Props) => {
  const addMsg = (id: number) => {
    setSelectedMsg((cur) => [...cur, id]);
  };
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const AnimationComplete = () => chatContainerRef.current?.scrollBy(0, 60);
  return (
    <div className="chat-messages" ref={chatContainerRef}>
      <div className="msg-container">
        <Questions addMsg={addMsg} />

        {selectedMsg.map((msg, i) => {
          return (
            <motion.div
              className="msg-container"
              initial="start"
              animate="end"
              variants={parVar}
              key={botArr[msg]?.question + i}
            >
              <>
                <CursorDimensionWhenHover
                  scale={0.2}
                  Element="div"
                  className="chat-q"
                  variants={opacityVariant}
                  key={botArr[msg]?.question + i}
                  onAnimationComplete={() => {
                    AnimationComplete();
                    playAudio("/audios/user pick.mp3");
                  }}
                >
                  {botArr[msg]?.question}
                </CursorDimensionWhenHover>
                <motion.div variants={opacityVariant} />
              </>
              <>
                {botArr[msg]?.ans.map((answer, i) => {
                  return (
                    <Fragment key={answer + i}>
                      <CursorDimensionWhenHover
                        scale={0.2}
                        Element="div"
                        className="chat-ans"
                        variants={opacityVariant}
                        onAnimationComplete={() => {
                          AnimationComplete();
                          playAudio("/audios/bot ans.mp3");
                        }}
                      >
                        {answer}
                      </CursorDimensionWhenHover>
                      <motion.div variants={opacityVariant} />
                    </Fragment>
                  );
                })}
              </>

              <Questions
                addMsg={addMsg}
                AnimationComplete={AnimationComplete}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Messages;

type QuestionProps = {
  addMsg: (id: number) => void;
  AnimationComplete?: () => void;
};
const Questions = ({ addMsg, AnimationComplete }: QuestionProps) => (
  <>
    {botArr.slice(1).map(({ id }, i) => {
      return (
        <Fragment key={botArr[i]?.question + i + "question"}>
          <CursorDimensionWhenHover
            scale={0.2}
            Element="div"
            className="chat-av-q"
            variants={opacityVariant}
            onClick={() => addMsg(id)}
            onAnimationComplete={() => {
              if (AnimationComplete) {
                AnimationComplete();
                playAudio("/audios/defaultQuestions.mp3");
              }
            }}
          >
            {botArr[id]?.question}
          </CursorDimensionWhenHover>
          <motion.div variants={opacityVariant} />
        </Fragment>
      );
    })}
  </>
);
