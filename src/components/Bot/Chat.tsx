import React, { useState, useRef, useEffect } from "react";
import myImg from "../../assets/me.jfif";
import { IoCloseSharp } from "react-icons/io5";
import Messages from "./Messages";
import { useInView } from "framer-motion";
interface Props {
  setShowChat: React.Dispatch<React.SetStateAction<boolean>>;
}
const Chat = ({ setShowChat }: Props) => {
  const botArr = [
    {
      id: 0,
      question: " ",
      ans: [
        "hi, I am Mahmoud's Bot 😊",
        "I just do Mahmoud's work.",
        "How can I help you",
      ],
    },
    {
      id: 1,
      question: "👋 I just need to say Hello.",
      ans: ["Hello There 😊.", "Do you enjoy my portfolio ?"],
    },
    {
      id: 2,
      question: "Tell me about your most challenging project ?",
      ans: [
        "my most challenging project is my e-commerce app.",
        "the reason is it was my first time using Graphql and Apollo.",
        "but it was interesting for me.",
      ],
    },
    {
      id: 3,
      question:
        "What technologies and programming languages ​​are you good at?",
      ans: [
        "first I want to show that I'm an Engineer.but I didn't find my passion at that carrer.",
        "so ,I looked for a career I like and I find this at web development.",
        "as a MERN Stack I am good in both frontend and backend.",
        "quite bite good at frontend,I am good at HTML5,CSS3,SASS,React,Vanila JAVASCRIPT.",
        "for React I am good with usibg alot for package such as Apollo,React-hook-form ,react-router-dom , redux-Toolki ,query-client and the most prefered package for me Framer Motion ",
        " In Backend I am good at express ,Graphql,RestFul Api ,JWT,I need to increase my skills at node's treatment with fileSystem.",
        "I am good for both PostgreSQL and MongoDB including Mongoose",
      ],
    },
    {
      id: 4,
      question: "What is your next plans ?",
      ans: [
        "This is my upcoming plan.",
        "I need to increase my Framer-Motion skills",
        "I will start studing ThreeJs",
        "finally start Data Structure.",
      ],
    },
  ];

  const [ChosenQuestionInd, setChosenQuestionInd] = useState<number>(-1);
  const [msgs, setMsgs] = useState([{ cls: "", msg: "", id: 0, delay: 0 }]);
  useEffect(() => {
    let count = 0;
    if (msgs.length === 1) {
      setMsgs([
        ...botArr[0].ans.map((e, i) => ({
          msg: e,
          cls: "chat-ans",
          id: 0,
          delay: count++,
        })),
        ...botArr.map((e, i) => ({
          msg: e.question!,
          cls: "chat-av-q",
          id: e.id,
          delay: count++,
        })),
      ]);
      botArr.splice(0, 1);
    }

    return () => {
      count = 0;
    };
  }, []);

  const chatContainerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    let count = 0;
    if (ChosenQuestionInd === -1) return;

    setMsgs((cur) => [
      ...cur,
      {
        msg: botArr[ChosenQuestionInd].question!,
        cls: "chat-q",
        id: 0,
        delay: 0,
      },
      ...botArr[ChosenQuestionInd].ans.map((e, i) => ({
        msg: e,
        cls: "chat-ans",
        id: 0,
        delay: count++,
      })),
      ...botArr
        .filter((e, i) => i != ChosenQuestionInd)
        .map((e, i) => ({
          msg: e.question!,
          cls: "chat-av-q",
          id: e.id,
          delay: count++,
        })),
    ]);

    botArr.splice(ChosenQuestionInd, 1);
    return () => {
      count = 0;
    };
  }, [ChosenQuestionInd]);

  console.log({ msgs });
  const ref = useRef<HTMLDivElement | null>(null);
  const InView = useInView(ref, { amount: "all" });
  return (
    <div key={"chat-key"} className="chat" ref={ref}>
      <div className="head-chat">
        <IoCloseSharp
          className="chat-close-icon"
          onClick={() => setShowChat(false)}
        />
        <div className="img-par">
          <img src={myImg} />
        </div>
        <div className="chat-content">
          <div className="chat-name">Mahmoud Abo Elenien</div>
          <div className="ask">ask me a question</div>
        </div>
      </div>
      <div className="chat-messages" ref={chatContainerRef}>
        <>
          {InView && (
            <>
              {msgs.map((ob, i) => {
                return (
                  <Messages
                    {...ob}
                    key={i}
                    i={botArr.findIndex((e) => e.id === ob.id)}
                    changeInd={setChosenQuestionInd}
                  />
                );
              })}
            </>
          )}
        </>
      </div>
    </div>
  );
};

export default Chat;
