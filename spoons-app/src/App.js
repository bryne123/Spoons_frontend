import "./App.css";
import Login from "./login.js";
import React, { useState } from "react";
function App() {
  const [display, setDisplay] = useState(false);
  const [hide, setHide] = useState(true);
  return (
    <>
      <div class="App">
        <div id="header">
          <h1>So you think you've been to Wetherspoons?</h1>
        </div>

        {hide ? (
          <button
            id="loginButton"
            onClick={() => {
              setDisplay(!display);
              setHide(!hide);
            }}
          >
            Login to see your list!
          </button>
        ) : null}

        {display ? <Login id="login"></Login> : null}
      </div>
    </>
  );
}

export default App;
