import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./components/navbar";
import Dashboard from "./components/dashboard";
import Heroes from "./components/heroes";
import HeroDetail from "./components/heroDetail";
import NoMatch from "./components/noMatch";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main role="main" className="container">
          <Switch>
            <Route path="/" render={() => <Redirect to="/dashboard" />} exact />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/heroes" component={Heroes} exact />
            <Route path="/heroes/:id" component={HeroDetail} />
            <Route component={NoMatch} />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
