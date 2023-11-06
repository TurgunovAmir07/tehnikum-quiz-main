import React from "react";
import { ProgressBar } from "../components/ProgressBar";
import { AnswerItem } from "../components/AnswerItem";

const StepTwo = () => {
  const variants = [
    {
      id: "variant-1",
      AnswerLabel: "Ответ №1",
    },
    {
      id: "variant-2",
      AnswerLabel: "Ответ №2",
    },
    {
      id: "variant-3",
      AnswerLabel: "Ответ №3",
    },
    {
      id: "variant-4",
      AnswerLabel: "Ответ №4",
    },
  ];
  return (
    <div className="container">
      <div className="wrapper">
        <div className="variants-quiz">
          <ProgressBar />
          <div className="question">
            <h2>1. Занимательный вопрос</h2>
            <ul className="variants">
              {variants.map((elem) => (
                <AnswerItem
                  key={elem.id}
                  id={elem.id}
                  AnswerLabel={elem.AnswerLabel}
                />
              ))}
              {/* <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-1" />
                <label htmlFor="variant-1">Ваш ответ</label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-2" />
                <label htmlFor="variant-2">Ваш ответ</label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-3" />
                <label htmlFor="variant-3">Ваш ответ</label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-4" />
                <label htmlFor="variant-4">Ваш ответ</label>
              </li> */}
            </ul>
            <button disabled id="next-btn">
              Далее
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
