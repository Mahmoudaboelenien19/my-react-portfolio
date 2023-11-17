interface Props {
  Icon: React.ComponentType;
  detail: string;
  value: string;
}
const ContactDetail = ({ Icon, detail, value }: Props) => {
  return (
    <div className="contact-detail">
      <div className="contact-shape">
        <div className="circle">
          {" "}
          <Icon />
        </div>
        <div className="line"></div>
      </div>
      <div className="contact-detail-data">
        <div className="contact-detail">{detail}</div>
        <div className="contact-value">{value}</div>
      </div>
    </div>
  );
};

export default ContactDetail;
