import { useContext } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { BotContext } from "./Bot";
import myImg from "../../assets/images/me.jfif";

const ChatHead = () => {
  const { setShowChat } = useContext(BotContext);
  return (
    <div className="head-chat">
      <IoCloseSharp
        className="chat-close-icon"
        onClick={() => setShowChat(false)}
      />
      <div className="img-par">
        <img src={myImg} />
      </div>
      <div className="chat-content">
        <div className="chat-name itim">Mahmoud Abo Elenien</div>
        <div className="ask">ask me a question</div>
      </div>
    </div>
  );
};

export default ChatHead;
