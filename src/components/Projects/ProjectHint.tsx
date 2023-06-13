import React from "react";

interface Props {
  msgTwo: string;
  msgOne: string;
}
const ProjectHint = ({ msgOne, msgTwo }: Props) => {
  return (
    <span className="hint">
      <small>{msgOne}</small>
      <small>+</small>
      <small>{msgTwo}</small>
    </span>
  );
};

export default ProjectHint;
