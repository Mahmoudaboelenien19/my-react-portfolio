import React, { useState } from "react";
import AllQuestions from "./AllQuestions";
import Messages from "./Messages";
import ChosenQuestion from "./ChosenQuestion";
const botArr = [
  {
    id: 0,
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
    question: "What technologies and programming languages ​​are you good at?",
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
const ChatCom = () => {
  const [ChosenQuestionInd, setChosenQuestionInd] = useState<number>();

  return (
    <div className="chat-messages">
      {/* <ChosenQuestion question={botArr[ChosenQuestionInd || -1]?.question} /> */}
      <>
        {botArr[ChosenQuestionInd || 0]?.ans?.map((message, i) => {
          return <Messages ans={message} key={i} />;
        })}
      </>
      {botArr.map((obj, i) => {
        return (
          <AllQuestions
            changeInd={setChosenQuestionInd}
            i={i}
            key={`ques-${i}`}
            ques={obj?.question}
          />
        );
      })}
    </div>
  );
};

export default ChatCom;
