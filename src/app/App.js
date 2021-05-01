import Login from "./pages/Login";
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/" Component={Login}>
        <Login />
      </Route>
      <Route exact path="/chat">
        <Chat />
      </Route>
      <Route exact path="/profile" Component={Profile}>
        <Profile />
      </Route>
    </Switch>
  );
}

export default App;
