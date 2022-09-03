import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DesignDetails from "./Components/DesignTool/DesignDetails";
import DesignTool from "./Components/DesignTool/DesignTool";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Library from "./Components/Library/Library";
import NavBar from "./Components/NavBar/NavBar";
import Tutorial from "./Components/Tutoria/Tutorial";
import TutorialDetails from "./Components/Tutoria/TutorialDetails";
import WeeklyDetails from "./Components/WeeklyUpdate/WeeklyDetails";
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
            <Route exact path="/" component={Home} />
            <Route exact path="/weekly" component={WeeklyUpdate} />
            <Route exact path="/design" component={DesignTool} />
            <Route exact path="/tutorial" component={Tutorial} />
            <Route exact path="/library" component={Library} />
            <Route
              exact
              path="/design/:id"
              render={(props) => <DesignDetails {...props} />}
            />
            <Route
              exact
              path="/tutorial/:id"
              render={(props) => <TutorialDetails {...props} />}
            />
            <Route
              exact
              path="/weekly/:id"
              render={(props) => <WeeklyDetails {...props} />}
            />
          </Switch>
          {displayFooter()}
        </div>
      </div>
    </Router>
  );
};

export default App;
