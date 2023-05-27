import { motion, stagger, useAnimate, useInView } from "framer-motion";
import React, { useState } from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

interface Props {
  date: string;
  head: string;
  clr: string;
  Icon: React.ComponentType;
  content: string[];
}

const TimeLine = ({ head, clr, date, Icon, content }: Props) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "var(--forth)",
        color: "var(--third)",
        boxShadow: "var(--main-shadow)",
      }}
      date={date}
      contentArrowStyle={{
        borderRight: "5px solid var(--third)",
        filter: "drop-shadow(var(--secondary-shadow))",
      }}
      icon={<Icon />}
      iconStyle={{
        color: clr,
        background: "var(--forth)",
      }}
    >
      <h3>{head}</h3>
      <ul>
        {content.map((sentence, i) => {
          return <li key={i}>{sentence}</li>;
        })}
      </ul>
    </VerticalTimelineElement>
  );
};

export default TimeLine;
