import React, { useState } from "react";
import { Heading } from "../components/Heading";
import { Input } from "../components/Input";
// import { Button } from "../components/Button";
import { ProgressBar } from "../components/ProgressBar";
import { LinkButton } from "../components/LinkButton";

const StepOne = () => {
  const [phoneValue, setPhoneValue] = useState("");
  const [phoneError, setPhoneError] = useState(false);

  const clickHandler = () => {
    if (!phoneValue) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          {/* <div className="indicator"> */}
          {/* <div className="indicator__text"> */}
          {/* <span className="indicator__description"> */}
          {/* Скидка за прохождение опроса: */}
          {/* </span> */}
          {/* <span className="indicator__value">15%</span> */}
          {/* </div> */}
          {/* <div className="indicator__progressbar"> */}
          {/* <div className="indicator__unit indicator__unit-1"></div> */}
          {/* <div className="indicator__unit indicator__unit-2"></div> */}
          {/* <div className="indicator__unit indicator__unit-3"></div> */}
          {/* <div className="indicator__unit indicator__unit-4"></div> */}
          {/* </div> */}
          {/* </div> */}
          <ProgressBar currentStep={1} />
          <div className="question">
            <Heading text="1. Занимательный вопрос" headingType="h2" />
            <label className="input-wrapper">
              <Input
                hasError={phoneError}
                value={phoneValue}
                onChange={setPhoneValue}
                isRequired
                type="text"
                id="answer"
                inputPlaceholder="Ваш ответ"
                errorMessage="Введите номер в правильном формате"
              />
            </label>
            <LinkButton
              id="next-btn"
              buttonText="Далее"
              onClick={clickHandler}
              path="/step-two"
              type="button"
            />
            {/* <Button id="next-btn" buttonText="Далее" onClick={clickHandler} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
