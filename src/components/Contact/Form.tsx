import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Input from "./Input";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import { IoSend } from "react-icons/io5";
import MainBtn from "../widgets/MainBtn";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues, FormProvider, useForm } from "react-hook-form";

const Form = () => {
  const schema = yup.object().shape({
    user_name: yup.string().min(5).max(20).required(),
    subject: yup.string().min(5).max(20).required(),
    message: yup.string().min(20).max(1000).required(),
    user_email: yup.string().email("insert a valid email").required(),
  });
  const methods = useForm({ resolver: yupResolver(schema) });
  const {
    formState: { errors, isValid },
    handleSubmit,
    getValues,
    reset,
  } = methods;

  const form = useRef<HTMLFormElement | null>(null);

  const onSubmit = (data: FieldValues) => {
    if (isValid) {
      emailjs
        .sendForm(
          import.meta.env.VITE_REACT_APP_service_ID,
          import.meta.env.VITE_REACT_APP_TEMPLATE_ID,
          form.current!,
          import.meta.env.VITE_REACT_APP_PUBLIC_KEY
        )
        .then(
          (result) => {
            if (result.text === "OK") {
              toast.success("message is successfully sent By EmailJs");
              reset();
            }
          },
          (error) => {
            reset();
            console.log(error);
          }
        );
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        ref={form}
        onSubmit={handleSubmit(onSubmit)}
        action="  
  "
      >
        <Input
          placeholder="name"
          name="user_name"
          err={errors?.user_name?.message!.toString()}
        />
        <Input
          placeholder="email"
          name="user_email"
          err={errors?.user_email?.message!.toString()}
        />
        <Input
          placeholder="subject"
          name="subject"
          err={errors?.subject?.message!.toString()}
        />
        <Input
          placeholder="message"
          type="textarea"
          name="message"
          err={errors?.message?.message!.toString()}
        />
        <div className="inp-par inp-send">
          <MainBtn cls="send-btn" Icon={IoSend} btn={"send"} type="submit" />
        </div>
      </form>
    </FormProvider>
  );
};

export default Form;
