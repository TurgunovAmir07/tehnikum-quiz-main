import React from "react";
import { Heading } from "../components/Heading";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

const StepOne = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <div className="indicator">
            <div className="indicator__text">
              <span className="indicator__description">
                Скидка за прохождение опроса:
              </span>
              <span className="indicator__value">15%</span>
            </div>
            <div className="indicator__progressbar">
              <div className="indicator__unit indicator__unit-1"></div>
              <div className="indicator__unit indicator__unit-2"></div>
              <div className="indicator__unit indicator__unit-3"></div>
              <div className="indicator__unit indicator__unit-4"></div>
            </div>
          </div>
          <div className="question">
            <Heading text="1. Занимательный вопрос" headingType="h2" />
            <label className="input-wrapper">
              <Input
                isRequired
                type="text"
                id="answer"
                inputPlaceholder="Ваш ответ"
                errorMessage="Введите номер в правильном формате например"
              />
              {/* <span  */}
              {/* // id="error-message"> */}
              {/* Введите номер в правильном формате например */}
              {/* </span> */}
            </label>
            <Button isDisabled id="next-btn" buttonText="Далее" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
