import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { BsFillChatFill } from "react-icons/bs";
import Chat from "./Chat";

const Bot = () => {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="bot">
      <AnimatePresence mode="wait">
        {!showChat ? (
          <BsFillChatFill key={"bot-icon"} onClick={() => setShowChat(true)} />
        ) : (
          <Chat key="chat" setShowChat={setShowChat} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Bot;
