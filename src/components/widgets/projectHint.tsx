import React from "react";

const ProjectHint = ({ top, bottom }: { top: string; bottom: string }) => {
  return (
    <div className="hint-par">
      <div className="hint">
        <span>{top}</span>
        <span>+</span>
        <span>{bottom}</span>
      </div>
    </div>
  );
};

export default ProjectHint;
