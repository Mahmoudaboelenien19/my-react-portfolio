import { BsFillMapFill, BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import ContactDetail from "./ContactDetail";
const arr = [
  { Icon: FaUserAlt, detail: "name", value: "Mahmoud Abo Elenien" },
  { Icon: MdEmail, detail: "email", value: "m.aboelenien19019@gmail.com" },
  { Icon: BsTelephoneFill, detail: "phone", value: "+201503636395" },
  { Icon: BsFillMapFill, detail: "address", value: "Mansoura Egypt" },
];
const MyDetails = () => {
  return (
    <div className="my-details">
      {arr.map((obj, i) => {
        return <ContactDetail {...obj} key={i} i={i} />;
      })}
    </div>
  );
};

export default MyDetails;
