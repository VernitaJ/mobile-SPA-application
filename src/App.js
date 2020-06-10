import React from "react";
import "./styles.css";
import { HashRouter as Router, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import TutorialPage from "./TutorialPage";
import MapView from "./MapView";
import QuestView from "./QuestView";
import Register from "./Register";
import SignIn from "./SignIn";
import QuestOptions from "./QuestOptions";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/quest" component={QuestView} />
        <Route exact path="/tutorial" component={TutorialPage} />
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/quest-options" component={QuestOptions} />
        <Route exact path="/map" component={MapView} />
      </Router>
    </div>
  );
}
