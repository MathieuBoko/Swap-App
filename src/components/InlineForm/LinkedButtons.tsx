import React from "react";
import { tableSchema } from "constants/tableSchema";

export const LinkedButtons: React.FC = () => {
  const buttons = tableSchema.InlineForm.buttons;

  return (
    <div className="linked-button-grid">
      {buttons.map(({ label, url, className }) => (
        <button
          key={label}
          className={className}
          onClick={() => window.open(url, "_blank", "noreferrer")}
        >
          {label}
        </button>
      ))}
    </div>
  );
};
