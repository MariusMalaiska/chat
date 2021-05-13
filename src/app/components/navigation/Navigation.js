import "./navigation.scss";

import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import IconAdd from "@material-ui/icons/AddCircle";
import IconDelete from "@material-ui/icons/Delete";
import IconSettings from "@material-ui/icons/Settings";
import IconSearch from "@material-ui/icons/Search";

import Tooltip from "../tooltip/Tooltip";

import { GlobalContext } from "../../../providers/global.provider";

function Navigation() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const {
    name,
    open,
    addConversation,
    conversations,
    deleteConversation,
    openConversation,
  } = useContext(GlobalContext);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

  useEffect(() => {
    let found = conversations;
    if (searchTerm) {
      found = conversations.filter((word) =>
        word.name.includes(capitalizeFirstLetter(searchTerm))
      );
    }
    setResults(found);
  }, [conversations, searchTerm]);

  return (
    <nav className="chatNavigation">
      <Link className="header" to="profile">
        <div className="image"></div>
        <div className="nameContainer">
          <span className="name">{name}</span>
          <div className="settingsContainer">
            <span>Settings</span>
            <IconSettings className="icon" />
          </div>
        </div>
      </Link>

      <div className="divider" />
      <div className="tools">
        <div className="inputContainer">
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input"
            placeholder="Search"
          />
          <span className="icon">
            <IconSearch fontSize="small" color="disabled" />
          </span>
        </div>
        <Tooltip text="Start new conversation">
          <div className="iconButton" onClick={() => addConversation()}>
            <IconAdd />
          </div>
        </Tooltip>
      </div>
      <div className="divider" />
      <div className="conversations">
        {results.map((item, idx) => (
          <div
            key={item.id}
            className={`conversation ${item.id === open.id ? "active" : ""}`}
            onClick={() => openConversation(item.id)}
          >
            <div className="chatHead">
              <div className="image"></div>
              <h4 className="name">{item.name}</h4>
            </div>

            <div
              className="deleteButton"
              onClick={(e) => {
                e.stopPropagation();
                deleteConversation(item.id);
              }}
            >
              <IconDelete fontSize="small" />
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
}

export default Navigation;
