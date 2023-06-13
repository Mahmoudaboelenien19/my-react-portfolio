/* eslint-disable react/jsx-no-undef */
import React from "react";
import { useFormContext } from "react-hook-form";
import { opacityVariant } from "../../assets/Utils/MianVariants";
import { AnimatePresence, motion } from "framer-motion";

const Input = ({
  placeholder,
  type,
  name,
  err,
}: {
  placeholder: string;
  type?: string;
  name: string;
  err?: string;
}) => {
  const { register } = useFormContext();

  return (
    <div className={`inp-par ${type === "textarea" ? "inp-text" : ""}`}>
      <div className="placeholder">
        your {placeholder} <span style={{ color: "var(--scroll)" }}>*</span>
      </div>
      {type === "textarea" ? (
        <textarea {...register(name)} />
      ) : (
        <input type="text" {...register(name)} />
      )}
      <AnimatePresence>
        {err && (
          <motion.span
            className="err-form"
            variants={opacityVariant}
            transition={{ duration: 0.4 }}
            initial="start"
            animate="end"
            exit="exit"
          >
            {err}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Input;
