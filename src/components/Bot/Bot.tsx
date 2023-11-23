import { motion, AnimatePresence } from "framer-motion";
import { createContext, useState } from "react";
import { BsFillChatFill } from "react-icons/bs";
import Chat from "./Chat";
import CursorDimensionWhenHover from "../widgets/animation/CursorDimensionWhenHover";

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
            <CursorDimensionWhenHover scale={0.2} Element="span">
              <BsFillChatFill
                key={"bot-icon"}
                onClick={() => setShowChat(true)}
              />
            </CursorDimensionWhenHover>
          ) : (
            <Chat key="chat" />
          )}
        </AnimatePresence>
      </motion.div>
    </BotContext.Provider>
  );
};

export default Bot;
