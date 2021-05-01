import { useState, useContext } from "react";
import IconChat from "@material-ui/icons/Chat";
import { GlobalContext } from "../../providers/global.provider";
import { useHistory } from "react-router-dom";

function Login() {
  const { name, setName } = useContext(GlobalContext);
  const [password, setPassword] = useState("");
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
      <div className="container">
        <div className="loginContainer">
          <IconChat className="icon" />
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
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
