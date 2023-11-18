/* eslint-disable react/jsx-no-undef */
import { useFormContext } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";

const Input = ({
  placeholder,
  name,
}: {
  placeholder: string;
  name: string;
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const err = errors && errors[name]?.message?.toString();

  return (
    <div className={clsx("inp-par", name === "message" && "inp-text")}>
      <div className="placeholder">
        your {placeholder} <span style={{ color: "var(--main-clr)" }}>*</span>
      </div>
      {placeholder === "message" ? (
        <textarea {...register(name)} />
      ) : (
        <input type="text" {...register(name)} />
      )}
      <AnimatePresence>
        {err && (
          <motion.span
            className="err-form"
            transition={{ duration: 0.4 }}
            initial={{ opacity: 0, scale: 0.8, height: 0 }}
            exit={{ opacity: 0, scale: 0.8, height: 0 }}
            animate={{ opacity: [0.2, 0.7], scale: 1, height: 20 }}
          >
            {err}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Input;
