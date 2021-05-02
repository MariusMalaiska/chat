import "./navigation.scss";
import { useContext } from "react";
import { GlobalContext } from "../../../providers/global.provider";
import IconAdd from "@material-ui/icons/AddCircle";
import Tooltip from "../tooltip/Tooltip";
import IconDelete from "@material-ui/icons/Delete";

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
      <header className="header">
        <div className="image"></div>
        <h4 className="name">{name}</h4>
      </header>
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
                onClick={() => deleteConversation(item.id)}
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
