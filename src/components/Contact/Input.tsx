import React from "react";

const Input = ({
  placeholder,
  type,
  name,
}: {
  placeholder: string;
  type?: string;
  name: string;
}) => {
  return (
    <div className={`inp-par ${type === "textarea" ? "inp-text" : ""}`}>
      <div className="placeholder">
        {placeholder} <span style={{ color: "var(--scroll)" }}>*</span>
      </div>
      {type === "textarea" ? (
        <textarea name={name} />
      ) : (
        <input type="text" name={name} />
      )}
    </div>
  );
};

export default Input;
