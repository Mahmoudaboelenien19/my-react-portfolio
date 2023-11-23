import { VerticalTimelineElement } from "react-vertical-timeline-component";
import CursorDimensionWhenHover from "../widgets/animation/CursorDimensionWhenHover";

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
      icon={
        <CursorDimensionWhenHover scale={0.2} Element="span">
          <Icon />
        </CursorDimensionWhenHover>
      }
      iconStyle={{
        color: clr,
        background: "var(--main)",
      }}
    >
      <CursorDimensionWhenHover scale={0.2} Element="h3" className="itim">
        {head}
      </CursorDimensionWhenHover>
      <ul className="timeline-list">
        {content.map((sentence, i) => {
          return (
            <CursorDimensionWhenHover key={i} scale={1.5} Element="li">
              {sentence}
            </CursorDimensionWhenHover>
          );
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

          <a href={link} target="_balnk" className="itim clr">
            <CursorDimensionWhenHover scale={0.2} Element="span">
              {linkDes}
            </CursorDimensionWhenHover>
          </a>
        </div>
      )}
    </VerticalTimelineElement>
  );
};

export default TimeLine;
