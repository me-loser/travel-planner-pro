"use client";
import React, { useState, useContext } from "react";
import classes from "../../styles/Auth.module.css";
import Svgcross from "../../../public/SvgCross";
import AuthenticationContext from "../../Store/Authentication-context";
import useAuth from "../../Hook/useAuth";
import SvgOpen from "../../../public/SvgOpen";
import SvgClosed from "../../../public/SvgClosed";
import Image from "next/image";

const LogIn = () => {
  const { Auth } = useAuth();
  const AuthenticationCtx = useContext(AuthenticationContext);
  const [values, setValues] = useState({
    email: "",
    password: "",
    open: false,
    error: "",
  });
  const [isTextPassword, setIsTextPassword] = useState(true);

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    const response = await Auth(
      { email: values.email, password: values.password },
      "signin"
    );
    if (response === "Success") {
      AuthenticationCtx.setDetails("", "", values.email);
      AuthenticationCtx.onHide("all");
      setValues({ email: "", open: true, error: "", password: "" });
    }
  };

  const openResetPasswordHandler = () => {
    AuthenticationCtx.onShow("ResetPasswordOpen");
  };

  const hideHandler = () => {
    AuthenticationCtx.onHide("LogInOpen");
  };

  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <div className={classes.close} onClick={hideHandler}>
          <Svgcross />
        </div>
        <div className={classes.part1}>
          <div className={classes.part1_left}>
            <h1>Login</h1>
            <p
              onClick={() => {
                AuthenticationCtx.onShow("signupOpen");
              }}
            >
              <span>or</span> create an account
            </p>
            <div className={classes.underline}> </div>
          </div>
          <div className={classes.part1_right}>
            <Image src={"/logo1.jpeg"} alt="logo" height="80" width="80" />
          </div>
        </div>
        <div className={classes.form}>
          <input
            type="email"
            placeholder="Email Id"
            value={values.email}
            onChange={handleChange("email")}
          />
          <input
            type={!isTextPassword ? "text" : "password"}
            placeholder="Password"
            value={values.password}
            onChange={handleChange("password")}
          />
          <div
            className={classes.openclosed}
            onClick={() => {
              setIsTextPassword((prev) => !prev);
            }}
          >
            {!isTextPassword ? <SvgOpen /> : <SvgClosed />}
          </div>
        </div>
        <div className={classes.continue} onClick={submit}>
          <a>Login</a>
        </div>
        <div className={classes.privacy_policy}>
          By creating an account, I accept the Terms & Conditions & Privacy
          Policy
        </div>
        <div
          className={classes.forgotPassord}
          onClick={openResetPasswordHandler}
        >
          Forgot Password
        </div>
      </div>
    </div>
  );
};

export default LogIn;
