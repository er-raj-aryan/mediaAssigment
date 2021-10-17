import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Page/Home/Home"
function App() {

  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Navbar />
          <Home />
        </Route>

      {/* -- Page Not Found -- */}
        <Route >
          404 Page not Found
        </Route>
      </Switch>
    </div>
  );
}

export default App;
