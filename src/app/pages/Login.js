import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import { GlobalContext } from "../../providers/global.provider";

function Login() {
  const { name, setName, password, setPassword } = useContext(GlobalContext);
  const [errors, setErrors] = useState("");
  const history = useHistory();

  const validate = (e) => {
    let isValid = true;
    if (name.length < 3) {
      setErrors("Name must contain at least 3 letters");
      isValid = false;
    }
    if (password.length < 3) {
      setErrors("Password must contain at least 3 letters");
      isValid = false;
    }

    return isValid;
  };

  const login = (e) => {
    e.preventDefault();

    if (validate()) {
      setErrors("");
      history.replace("/chat");
    }
  };

  return (
    <div className="login">
      {Array.from(Array(30)).map((bubble, index) => (
        <div key={index} className={`bubble bubble-${index + 1}`}></div>
      ))}
      <div className="login"></div>
      <div className="container">
        <div className="loginContainer">
          <div className="icon"></div>
          <h1 className="heading">Login</h1>
          <input
            onChange={(e) => setName(e.target.value)}
            className="input"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            type="password"
            placeholder="Password"
            name="password"
          />
          {!!errors && <div className="inputError">{errors}</div>}
          <button className="button" onClick={login}>
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
