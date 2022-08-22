import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DesignTool from "./Components/DesignTool/DesignTool";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Library from "./Components/Library/Library";
import NavBar from "./Components/NavBar/NavBar";
import Tutorial from "./Components/Tutoria/Tutorial";
import WeeklyUpdate from "./Components/WeeklyUpdate/WeeklyUpdate";

const App = () => {
  const [helloStatue, setHelloStatue] = useState("hello");

  const displayFooter = () => {
    if (helloStatue === "library") {
      return "";
    } else {
      return <Footer />;
    }
  };

  return (
    <Router>
      <div className="App-Hero">
        <div className="App-container">
          <NavBar helloStatue={helloStatue} setHelloStatue={setHelloStatue} />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/weekly">
              <WeeklyUpdate />
            </Route>

            <Route exact path="/design">
              <DesignTool />
            </Route>

            <Route exact path="/tutorial">
              <Tutorial />
            </Route>

            <Route exact path="/library">
              <Library />
            </Route>
          </Switch>
          {displayFooter()}
        </div>
      </div>
    </Router>
  );
};

export default App;
