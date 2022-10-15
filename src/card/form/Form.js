import React from "react";
import useFormValidation from "../hooks/useFormValidation";
import "./Form.css";

export default function Form() {
  //For name Input
  const {
    value: enteredName,
    isValueValid: nameIsValid,
    hasError: nameInputHasError,
    inputChangeHandler: nameChangeHandler,
    blurHandler: nameBlurHandler,
  } = useFormValidation((value) => value.trim() !== "");

  //For Email Input
  const {
    value: enteredEmail,
    isValueValid: emailIsValid,
    hasError: emailInputHasError,
    inputChangeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
  } = useFormValidation((value) => value.includes("@"));

  //For Password
  const {
    value: enteredPassword,
    isValueValid: passwordIsValid,
    hasError: passwordInputHasError,
    inputChangeHandler: passwordChangeHandler,
    blurHandler: passwordBlurHandler,
  } = useFormValidation((value) => value.trim().length > 6);

  //For Confirm Password
  const {
    value: enteredConfirmPassword,
    isValueValid: confirmPasswordIsValid,
    hasError: confirmPasswordInputHasError,
    inputChangeHandler: confirmPasswordChangeHandler,
    blurHandler: confirmPasswordBlurHandler,
  } = useFormValidation((value) => value === enteredPassword);

  //Checking form validation on submit button handler
  let formIsValid = false;
  if (
    nameIsValid &&
    emailIsValid &&
    passwordIsValid &&
    confirmPasswordIsValid
  ) {
    formIsValid = true;
  }

  //Form Submit handler
  function onSumbitHandler(event) {
    event.preventDefault();
    if (formIsValid) {
      console.log(enteredName);
    } else {
      console.log("not valid");
      nameBlurHandler();
      emailBlurHandler();
      passwordBlurHandler();
      confirmPasswordBlurHandler();
    }
  }

  return (
    <form onSubmit={onSumbitHandler}>
      <div className="row">
        <div className="col-25">
          <label htmlFor="name">Name</label>
        </div>
        <div className="col-75">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
          />
          {nameInputHasError && (
            <p style={{ color: "red" }}>Entered a valid name</p>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label htmlFor="email">Email</label>
        </div>
        <div className="col-75">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={enteredEmail}
          />
          {emailInputHasError && (
            <p style={{ color: "red" }}>Please enter a valid email</p>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label htmlFor="password">Password</label>
        </div>
        <div className="col-75">
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
            value={enteredPassword}
          />
          {passwordInputHasError && (
            <p style={{ color: "red" }}>
              Please enter a valid password of six character
            </p>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label htmlFor="confirmPassword">Confirm Password</label>
        </div>
        <div className="col-75">
          <input
            type="password"
            name="confirmPassword"
            placeholder="Enter your password"
            onChange={confirmPasswordChangeHandler}
            onBlur={confirmPasswordBlurHandler}
            value={enteredConfirmPassword}
          />
          {confirmPasswordInputHasError && (
            <p style={{ color: "red" }}>Please enter a matching password</p>
          )}
        </div>
      </div>
      <button>Submit</button>
    </form>
  );
}
