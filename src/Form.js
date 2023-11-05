import React, { useState } from "react";

const SignUphtmlForm = () => {
  const [userName, setUserName] = useState("");
  const [unValid, setUnValid] = useState(true);
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [password, setPassword] = useState("");
  const [validPW, setvalidPW] = useState(true);
  const [confirmPw, setConfirmPw] = useState("");
  const [validConfirmPw, setValidConfirmPw] = useState(true);
  const [htmlFormValid, sethtmlFormValid] = useState(false);
  function isAlphaNumeric(str) {
    var code, i, len;

    for (i = 0, len = str.length; i < len; i++) {
      code = str.charCodeAt(i);
      if (
        !(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)
      ) {
        // lower alpha (a-z)
        return false;
      }
    }
    return true;
  }
  const validateEmail = () => {
    const validEmail = String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    setValidEmail(validEmail);
    return validEmail;
  };
  const checkAllFields = () => {
    const formValid = unValid && validEmail && validPW && validConfirmPw;
    console.log(formValid);
    sethtmlFormValid(formValid);
  };
  const validateUsername = () => {
    let validUsername = userName.length > 3 && isAlphaNumeric(userName);
    setUnValid(validUsername);
    return validUsername;
  };

  const validatePw = () => {
    let validPW = password.length > 5;
    setvalidPW(validPW);
    return validPW;
  };

  const validateConfirmPw = () => {
    let validConfirmPW = confirmPw === password;
    setValidConfirmPw(validConfirmPW);
    return validConfirmPW;
  };

  return (
    <div>
      <h1>Sign Up htmlForm</h1>
      <form>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          onBlur={(e) => {
            validateUsername(e.target.value);
            checkAllFields();
          }}
        ></input>
        <span className={unValid ? "hidden" : "visible"}>
          Username must be alphanumeric and 4 characters or longer
        </span>
        <br></br>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={(e) => {
            validateEmail(e.target.value);
            checkAllFields();
          }}
        ></input>
        <span className={validEmail ? "hidden" : "visible"}>
          Please enter a valid email
        </span>
        <br></br>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={(e) => {
            validatePw(e.target.value);
            checkAllFields();
          }}
        ></input>
        <span className={validPW ? "hidden" : "visible"}>
          Password must be 6 or more characters
        </span>
        <br></br>
        <label htmlFor="confirm">Confirm Password:</label>
        <input
          type="password"
          id="confirm"
          name="confirm"
          value={confirmPw}
          onChange={(e) => setConfirmPw(e.target.value)}
          onBlur={(e) => {
            validateConfirmPw(e.target.value);
            checkAllFields();
          }}
        ></input>
        <span className={validConfirmPw ? "hidden" : "visible"}>
          Passwords do not match
        </span>
        <button disabled={!htmlFormValid} type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUphtmlForm;
