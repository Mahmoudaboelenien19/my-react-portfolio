import { motion, AnimatePresence } from "framer-motion";
import React, { createContext, useState } from "react";
import { BsFillChatFill } from "react-icons/bs";
import Chat from "./Chat";

interface BotContextInterface {
  setShowChat: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BotContext = createContext({} as BotContextInterface);
const Bot = () => {
  const [showChat, setShowChat] = useState(false);

  return (
    <BotContext.Provider value={{ setShowChat }}>
      <motion.div
        className="bot"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 5, duration: 0.3 }}
      >
        <AnimatePresence mode="wait">
          {!showChat ? (
            <BsFillChatFill
              key={"bot-icon"}
              onClick={() => setShowChat(true)}
            />
          ) : (
            <Chat key="chat" />
          )}
        </AnimatePresence>
      </motion.div>
    </BotContext.Provider>
  );
};

export default Bot;
