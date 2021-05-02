import "./navigation.scss";
import { useContext } from "react";
import { GlobalContext } from "../../../providers/global.provider";
import IconAdd from "@material-ui/icons/AddCircle";
import Tooltip from "../tooltip/Tooltip";
import IconDelete from "@material-ui/icons/Delete";
import IconSettings from "@material-ui/icons/Settings";
import { Link } from "react-router-dom";

function Navigation() {
  const {
    name,
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
            className="conversation"
            onClick={() => openConversation(item.id)}
          >
            <div className="image"></div>
            <h4 className="name"> conversation </h4>
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
