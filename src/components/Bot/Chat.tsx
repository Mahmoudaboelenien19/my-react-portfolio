import { useState, useRef, useEffect } from "react";
import Messages from "./Messages";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import ChatHead from "./ChatHead";

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

  const ref = useRef<HTMLDivElement | null>(null);
  const InView = useInView(ref, { amount: "all", once: true });
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

      <>
        {InView && (
          <Messages selectedMsg={selectedMsg} setSelectedMsg={setSelectedMsg} />
        )}
      </>
    </motion.div>
  );
};

export default Chat;
