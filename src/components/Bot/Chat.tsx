import React, { useState, useRef, useEffect } from "react";
import Messages from "./Messages";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import ChatHead from "./ChatHead";
import { botArr } from "../../assets/Arr.js";

interface MSGState {
  delay: number;
  id: number;
  msg: string;
  cls: string;
}

const Chat = () => {
  const [ChosenQuestionInd, setChosenQuestionInd] = useState<number>(-1);
  const [isSessionSTUsed, setIsSessionStUsed] = useState(true);
  const [msgs, setMsgs] = useState<MSGState[]>([
    { cls: "", msg: "", id: 0, delay: 0 },
  ]);

  useEffect(() => {
    let count = 0;
    if (!sessionStorage.getItem("messages")) {
      setMsgs([
        ...botArr[0].ans.map((e, i) => ({
          msg: e,
          cls: "chat-ans",
          id: 0,
          delay: count++,
        })),
        ...botArr.map((e) => ({
          msg: e.question!,
          cls: "chat-av-q",
          id: e.id,
          delay: count++,
        })),
      ]);
      count = 0;
      sessionStorage.setItem(
        "messages",
        JSON.stringify([
          ...botArr[0].ans.map((e, i) => ({
            msg: e,
            cls: "chat-ans",
            id: 0,
            delay: count++,
          })),
          ...botArr.map((e) => ({
            msg: e.question!,
            cls: "chat-av-q",
            id: e.id,
            delay: count++,
          })),
        ])
      );
      botArr.splice(0, 1);
      setIsSessionStUsed(false);
    } else {
      console.log("session is used");

      setMsgs([
        ...JSON.parse(sessionStorage.getItem("messages") as unknown as string),
      ]);
    }
  }, []);

  useEffect(() => {
    let count = 0;
    if (ChosenQuestionInd != -1) {
      setIsSessionStUsed(false);

      count = 0;
      setMsgs((cur) => [
        ...cur,
        {
          msg: botArr[ChosenQuestionInd].question!,
          cls: "chat-q",
          id: 0,
          delay: 1,
        },
        ...botArr[ChosenQuestionInd].ans.map((e, i) => {
          count = i + 2; // ! i ido this as when i use count++ it starts from 5 i will go back to see why
          return { msg: e, cls: "chat-ans", id: 0, delay: count }; //why this count is 5  I need it 0
        }),
        ...botArr
          // .filter((e, i) => i != ChosenQuestionInd)
          .map((e, i) => ({
            msg: e.question!,
            cls: "chat-av-q",
            id: e.id,
            delay: ++count,
          })),
      ]);
      sessionStorage.setItem(
        "messages",
        JSON.stringify([
          ...JSON.parse(
            sessionStorage.getItem("messages") as unknown as string
          ),
          {
            msg: botArr[ChosenQuestionInd].question!,
            cls: "chat-q",
            id: 0,
            delay: 1,
          },
          ...botArr[ChosenQuestionInd].ans.map((e, i) => {
            count = i + 2;
            return { msg: e, cls: "chat-ans", id: 0, delay: count }; //why this count is 5  I need it 0
          }),
          ...botArr
            // .filter((e, i) => i != ChosenQuestionInd)
            .map((e, i) => ({
              msg: e.question!,
              cls: "chat-av-q",
              id: e.id,
              delay: ++count,
            })),
        ])
      );
      // botArr.splice(ChosenQuestionInd, 1);
    }

    return () => {
      count = 0;
    };
  }, [ChosenQuestionInd]);

  const ref = useRef<HTMLDivElement | null>(null);
  const InView = useInView(ref, { amount: "all", once: true });
  console.log(msgs);
  return (
    <motion.div
      key={"chat-key"}
      className="chat"
      ref={ref}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      initial={{ scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <ChatHead />
      <motion.div className="chat-messages">
        <>
          {InView && (
            <>
              {msgs.map((ob, i: number) => {
                return (
                  <Messages
                    {...ob}
                    key={i}
                    i={botArr.findIndex((e) => e.id === ob.id)}
                    changeInd={setChosenQuestionInd}
                    isSessionUsed={isSessionSTUsed}
                  />
                );
              })}
            </>
          )}
        </>
      </motion.div>
    </motion.div>
  );
};

export default Chat;
