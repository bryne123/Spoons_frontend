import React from "react";
import "./login.css";
const login = () => {
  return (
    <div id="login-container">
      <label class="label" for="userName">
        Username{" "}
      </label>
      <br></br>
      <input
        id="userName"
        type="text"
        placeholder="username"
        name="user"
        required
      />
      <br></br>
      <br></br>
      <label class="label" for="pass">
        Password{" "}
      </label>
      <br></br>
      <input id="pass" type="password" placeholder="password" required />
      <br></br>
      <br></br>
      <button id="login-button" type="submit">
        Login
      </button>
    </div>
  );
};

export default login;
