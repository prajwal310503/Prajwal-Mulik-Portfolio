import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="prajwalmulik3106@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+91 7738191499" Image={FiPhone} />
      <SingleInfo text="India, Maharashtra" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
