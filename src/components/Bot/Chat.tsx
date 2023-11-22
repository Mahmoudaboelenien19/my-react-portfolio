import { useState, useRef, useEffect } from "react";
import Messages from "./Messages";
import { motion } from "framer-motion";
import ChatHead from "./ChatHead";
import FadeINWrapper from "../widgets/animation/FadeINWrapper";

const Chat = () => {
  const [selectedMsg, setSelectedMsg] = useState<number[]>([]);
  const initialRender = useRef(true);
  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;

      if (sessionStorage.getItem("messages")) {
        setSelectedMsg([
          ...JSON.parse(
            sessionStorage.getItem("messages") as unknown as string
          ),
        ]);
      }
    }
  }, []);

  return (
    <motion.div
      key={"chat-key"}
      className="chat"
      animate={{ height: 350, opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      initial={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3 }}
      onWheel={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <ChatHead />
      <FadeINWrapper delay={0.4} key="chat">
        <Messages selectedMsg={selectedMsg} setSelectedMsg={setSelectedMsg} />
      </FadeINWrapper>
    </motion.div>
  );
};

export default Chat;
