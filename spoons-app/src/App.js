import "./App.css";
import Login from "./login.js";
import React, { useState } from "react";
import axios from "axios";
import Card from "./components/card";
function App() {
  const [display, setDisplay] = useState(false);
  const [hide, setHide] = useState(true);

  const apiCode =
    "orvD2NJONGqvE4glmnnhhvfOrVLlJDmqbusear5sqbzzs5fOA4IET9VZXmjwIKde";
  const fetchPubs = (event) => {
    if (event.key === "Enter") {
      axios
        .get(
          `https://data.mongodb-api.com/app/data-ixnyf/endpoint/data/v1${apiCode}`
        )
        .then((response) => {
          console.log(response.data);
        });
    }
  };

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

        <div>
          <input
            onChange={fetchPubs}
            type="text"
            placeholder="Search for pubs"
          ></input>
        </div>
        <Card></Card>
      </div>
    </>
  );
}

export default App;
