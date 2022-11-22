import "./App.css";
import Login from "./login.js";
import LoginButton from "./loginButton.js";
function App() {
  return (
    <>
      {" "}
      <div class="App">
        <div id="header">
          {" "}
          <h1>So you think you've been to Wetherspoons?</h1>
        </div>
        <LoginButton></LoginButton>
        <Login id="login"></Login>
      </div>
    </>
  );
}

export default App;
