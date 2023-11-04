import React, { useState } from "react";
import { Heading } from "../components/Heading";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

const Welcome = () => {
  const [nameValue, setNameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");

  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const clickHandler = () => {
    if (!nameValue) {
      setNameError(true);
    } else {
      setNameError(false);
    }

    if (!phoneValue) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }
  };
  // }, [{ nameValue, phoneValue }]

  // useEffect(() => {
  // if (!nameValue) {
  // setNameError(true);
  // } else {
  // setNameError(false);
  // }
  // if (!phoneValue) {
  // setPhoneError(true);
  // } else {
  // setPhoneError(false);
  // }
  // }, [{ nameValue, phoneValue }]);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <Heading
            text="Добро пожаловать в квиз от лучшего учебного центра"
            headingType="h1"
          />
          <form className="welcome__form">
            <Input
              hasError={nameError}
              value={nameValue}
              onChange={setNameValue}
              id="username"
              isRequired
              inputLabel="Ваше имя"
              inputPlaceholder="Ваш ответ"
              errorMessage="Введите ваше имя"
            />
            <label className="input-wrapper" htmlFor="username">
              {/* Ваш номер */}
              <Input
                hasError={phoneError}
                value={phoneValue}
                onChange={setPhoneValue}
                id="phone"
                isRequired
                inputLabel="Ваш номер"
                inputPlaceholder="+998 9- --- -- --"
                errorMessage="Введите номер в правильном формате"
              />
              {/* <span id="error-message">Введите номер в правильном формате</span> */}
            </label>
            <Button
              buttonType="button"
              buttonText="Далее"
              onClick={clickHandler}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
