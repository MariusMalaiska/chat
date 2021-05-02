import { useState, useContext } from "react";

import { GlobalContext } from "../../providers/global.provider";
import IconBack from "@material-ui/icons/ArrowBack";
import Tooltip from "../components/tooltip/Tooltip";
import { Link } from "react-router-dom";

function Profile() {
  const { name, setName } = useContext(GlobalContext);
  const [errors, setErrors] = useState("");
  const [edit, setEdit] = useState(false);

  const [state, setState] = useState({
    oldPassword: "",
    reOldPassword: "",
    newPassword: "",
    newName: "",
  });

  const validate = (e) => {
    let isValid = true;
    if (state.newName.length < 3) {
      setErrors("Name must contain at least 3 letters");
      isValid = false;
    }

    return isValid;
  };

  const save = (e) => {
    e.preventDefault();

    if (validate()) {
      setErrors("");
      setName(state.newName);
      setEdit(false);
    }
  };

  return (
    <div className="profile">
      <div className="container">
        <div className="profileContainer">
          <Tooltip text="Back">
            <Link to="/chat" className="iconButton">
              <IconBack />
            </Link>
          </Tooltip>
          <div className="editContainer">
            {edit ? (
              <input
                onChange={(e) =>
                  setState({ ...state, newName: e.target.value })
                }
                className="input"
                type="text"
                placeholder="New name"
                name="name"
              />
            ) : (
              <>
                <h4 className="label">Name:</h4>
                <h4 className="name">{name || "Name not set"}</h4>
              </>
            )}
            {edit ? (
              <>
                <input
                  onChange={(e) =>
                    setState({ ...state, oldPassword: e.target.value })
                  }
                  className="input"
                  type="password"
                  placeholder="Old Password"
                  name="password"
                />
                <input
                  onChange={(e) =>
                    setState({ ...state, reOldPassword: e.target.value })
                  }
                  className="input"
                  type="password"
                  placeholder="Repeat old password"
                  name="password"
                />
                <input
                  onChange={(e) =>
                    setState({ ...state, newPassword: e.target.value })
                  }
                  className="input"
                  type="password"
                  placeholder="New password"
                  name="password"
                />
              </>
            ) : (
              <>
                <h4 className="label">Password:</h4>
                <h4>*****</h4>
              </>
            )}
          </div>
        </div>
        {!!errors && <div className="inputError">{errors}</div>}
        <div className="options">
          {edit ? (
            <>
              <button className="button" onClick={save}>
                Save
              </button>
              <button className="button" onClick={() => setEdit(false)}>
                Nevermind
              </button>
            </>
          ) : (
            <button className="button" onClick={() => setEdit(true)}>
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
