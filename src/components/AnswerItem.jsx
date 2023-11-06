import React from "react";

export const AnswerItem = ({ id, AnswerLabel }) => {
  return (
    <li className="variant-wrapper">
      <input required type="radio" name="question" id={id} />
      <label htmlFor={id}>{AnswerLabel}</label>
    </li>
  );
};
