import "./navigation.scss";

import { useContext } from "react";
import { Link } from "react-router-dom";

import IconAdd from "@material-ui/icons/AddCircle";
import IconDelete from "@material-ui/icons/Delete";
import IconSettings from "@material-ui/icons/Settings";

import Tooltip from "../tooltip/Tooltip";

import { GlobalContext } from "../../../providers/global.provider";

function Navigation() {
  const {
    name,
    open,
    addConversation,
    conversations,
    deleteConversation,
    openConversation,
  } = useContext(GlobalContext);

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
        <Tooltip text="Start new conversation">
          <div className="iconButton" onClick={() => addConversation()}>
            <IconAdd />
          </div>
        </Tooltip>
      </div>
      <div className="divider" />
      <div className="conversations">
        {conversations.map((item, idx) => (
          <div
            key={item.id}
            className={`conversation ${item.id === open.id ? "active" : ""}`}
            onClick={() => openConversation(item.id)}
          >
            <div className="chatHead">
              <div className="image"></div>
              <h4 className="name">{item.name}</h4>
            </div>
            <Tooltip text="delete conversation">
              <div
                className="deleteButton"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteConversation(item.id);
                }}
              >
                <IconDelete fontSize="small" />
              </div>
            </Tooltip>
          </div>
        ))}
      </div>
    </nav>
  );
}

export default Navigation;
