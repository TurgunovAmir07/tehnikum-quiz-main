import React from "react";

export const Button = ({ buttonType, buttonText, isDisabled }) => {
  return (
    <button
      type={buttonType === "submit" ? "submit" : "button"}
      disabled={isDisabled}
    >
      {buttonText}
    </button>
  );
};
