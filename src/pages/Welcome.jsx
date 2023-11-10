import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Heading } from "../components/Heading";
// import { Button } from "../components/Button";
import { LinkButton } from "../components/LinkButton";
import { Input } from "../components/Input";

const Welcome = () => {
  const navigate = useNavigate();

  const [nameValue, setNameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");

  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const goToNextPage = () => {
    if (nameError && phoneError) {
      navigate("/step-one");
    }
  };

  const validateName = () => {
    if (!nameValue) {
      setNameError(true);
    } else {
      setNameError(false);
    }
  };
  const validatePhone = () => {
    if (!phoneValue) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }
  };

  const handleNameInput = (value) => {
    setNameValue(value);
    validateName();
  };
  const handlePhoneInput = (value) => {
    setPhoneValue(value);
    validatePhone();
  };

  const clickHandler = () => {
    validateName();
    validatePhone();

    goToNextPage();
  };

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
              onChange={(value) => handleNameInput(value)}
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
                onChange={(value) => handlePhoneInput(value)}
                id="phone"
                isRequired
                inputLabel="Ваш номер"
                inputPlaceholder="+998 9- --- -- --"
                errorMessage="Введите номер в правильном формате"
              />
              {/* <span id="error-message">Введите номер в правильном формате</span> */}
            </label>
            <LinkButton
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
