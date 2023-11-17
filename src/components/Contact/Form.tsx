import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Input from "./Input";
import { toast } from "react-hot-toast";
import { IoSend } from "react-icons/io5";
import MainBtn from "../widgets/MainBtn";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import FormSvg from "./FormSvg";
const inputs = [
  { name: "user_name", placeholder: "name" },
  { name: "user_email", placeholder: "email" },
  { name: "subject", placeholder: "subject" },
  { name: "message", placeholder: "message" },
];
const Form = () => {
  const schema = yup.object().shape({
    user_name: yup
      .string()
      .min(5, "username myst be 5 letters minimum")
      .max(20, "you can't exceed 20 letteres")
      .required("username is required"),
    subject: yup
      .string()
      .min(5, "use 5 letters minimum in your subject")
      .max(20, "use at most 20 letters at your subject")
      .required("add a subject"),
    message: yup
      .string()
      .min(20, "use 20 letters minimum in your message")
      .max(1000, "you can't exceed 1000")
      .required("add a message"),
    user_email: yup
      .string()
      .email("insert a valid email")
      .required("add your email"),
  });
  const methods = useForm({ resolver: yupResolver(schema) });
  const {
    formState: { isValid },
    handleSubmit,
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
    <div className="form-par">
      <FormSvg />
      <FormProvider {...methods}>
        <form
          ref={form}
          onSubmit={handleSubmit(onSubmit)}
          action="  
  "
        >
          <h2 className="itim">Get in Touch</h2>
          <p>
            Your message has been received. I will be in touch via email
            shortly. Looking forward to connecting with you!
          </p>
          {inputs.map((ob, i) => {
            return <Input key={i} {...ob} />;
          })}

          {/* <Input placeholder="message" type="textarea" name="message" /> */}
          <div className="inp-par inp-send">
            <MainBtn Icon={IoSend} btn={"send"} type="submit" />
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default Form;
