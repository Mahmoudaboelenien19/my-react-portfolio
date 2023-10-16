import React from "react";
import { BsFillMapFill, BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import ContactDetail from "./ContactDetail";
import FadeINWrapper from "../widgets/FadeINWrapper";
const MyDetails = () => {
  const arr = [
    { Icon: FaUserAlt, detail: "name", value: "Mahmoud Abo Elenien" },
    { Icon: MdEmail, detail: "email", value: "m.aboelenien20020@gmail.com" },
    { Icon: BsTelephoneFill, detail: "phone", value: "+201503636395" },
    { Icon: BsFillMapFill, detail: "address", value: "Mansoura Egypt" },
  ];

  return (
    <div className="my-details">
      {arr.map((obj, i) => {
        return (
          <FadeINWrapper ind={i} key={i}>
            <ContactDetail {...obj} />
          </FadeINWrapper>
        );
      })}
    </div>
  );
};

export default MyDetails;
