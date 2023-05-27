import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Input from "./Input";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import { IoSend } from "react-icons/io5";
import MainBtn from "../widgets/MainBtn";
const Form = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i1m9rdf",
        "template_o7nzi0c",
        form.current!,
        "ewh4vljEV59tCgEiH"
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.text === "OK") {
            toast.success("message is successfully send");
            form.current!.reset();
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      action="  
  "
    >
      <Input placeholder="your name" name="user_name" />
      <Input placeholder="your email" name="user_email" />
      <Input placeholder="your subject" name="subject" />
      <Input placeholder="your message" type="textarea" name="message" />
      <div className="inp-par inp-send">
        <MainBtn cls="send-btn" Icon={IoSend} btn={"send"} type="submit" />
      </div>
    </form>
  );
};

export default Form;
