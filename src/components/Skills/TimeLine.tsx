import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

interface Props {
  date: string;
  head: string;
  clr: string;
  link?: string;
  Icon: React.ComponentType;
  content: string[];
  linkDes?: string;
}

const TimeLine = ({ linkDes, head, clr, date, Icon, content, link }: Props) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "var(--main)",
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
      <ul className="timeline-list">
        {content.map((sentence, i) => {
          return <li key={i}>{sentence}</li>;
        })}
      </ul>
      {link && (
        <div
          className="link-timeline"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <div className="detail">link to certificate : </div>

          <a href={link} target="_balnk" style={{ color: "var(--scroll)" }}>
            {linkDes}
          </a>
        </div>
      )}
    </VerticalTimelineElement>
  );
};

export default TimeLine;
