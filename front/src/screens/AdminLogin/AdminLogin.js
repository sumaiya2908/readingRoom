import React, { useState } from "react";
import {
  LoginBtn,
  LoginForm,
  LoginHeading,
  LoginInput,
  LoginLabel,
  LoginPage,
} from "./AdminLogin.elements";

function AdminLogin() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userName,password);
  }
    
  return (
    <LoginPage>
      <LoginHeading>Admin Login</LoginHeading>
      <LoginForm onSubmit={handleSubmit}>
        <LoginLabel>UserName</LoginLabel>
        <LoginInput
          required
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          value={userName}
        ></LoginInput>
        <LoginLabel>Password</LoginLabel>
        <LoginInput
          required
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        ></LoginInput>
        <LoginBtn type="submit">Login</LoginBtn>
      </LoginForm>
    </LoginPage>
  );
}

export default AdminLogin;
