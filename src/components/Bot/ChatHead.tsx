import { useContext } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { BotContext } from "./Bot";
import myImg from "../../assets/images/me.jfif";
import CursorDimensionWhenHover from "../widgets/animation/CursorDimensionWhenHover";

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
        <CursorDimensionWhenHover
          Element="div"
          scale={1}
          className="chat-name itim"
        >
          Mahmoud Abo Elenien
        </CursorDimensionWhenHover>
        <div className="ask">ask me a question</div>
      </div>
    </div>
  );
};

export default ChatHead;
