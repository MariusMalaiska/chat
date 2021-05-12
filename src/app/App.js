import { Route, Switch } from "react-router-dom";

import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { paths } from "./constants";

function App() {
  return (
    <Switch>
      <Route exact path={paths.login} Component={Login}>
        <Login />
      </Route>
      <Route exact path={paths.chat} Component={Chat}>
        <Chat />
      </Route>
      <Route exact path={paths.profile} Component={Profile}>
        <Profile />
      </Route>
    </Switch>
  );
}

export default App;
