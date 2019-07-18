import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Title from "./components/Title";
import SavedBooks from "./components/pages/BookResults";
import BookResults from "./components/pages/BookResults";
import NoMatch from "./components/pages/NoMatch";
import Home from "./components/pages/Home";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/saved" component={SavedBooks} />
          {/* <Route exact path="/books/:search" component={BookResults} /> */}
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
        <div className="App-header">
          <Title/>
      </div>
      </div>
    );
  }
}

export default App;
