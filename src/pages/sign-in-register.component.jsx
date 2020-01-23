import React from "react";

import SignIn from "../components/sign-in.component";
import Register from "../components/register.component";

import "../styles/sign-in-register.styles.scss";

const SignInRegisterPage = () => (
  <div className='sign-in-register'>
    <SignIn />
    <Register />
  </div>
);

export default SignInRegisterPage;
