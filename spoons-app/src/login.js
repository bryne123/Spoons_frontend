import React from "react";
import "./login.css";
const login = () => {
  return (
    <div id="login-container">
      <label for="userName">Username</label>
      <input
        id="userName"
        type="text"
        placeholder="username"
        name="user"
        required
      />
      <label for="pass"></label>
      <input id="pass" type="password" placeholder="password" required />
      <button type="submit">Login</button>
    </div>
  );
};

export default login;
