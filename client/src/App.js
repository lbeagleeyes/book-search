import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Title from "./components/Title";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BookResults from "./pages/BookResults";
import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home";
import SavedBooks from "./pages/SavedBooks";

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <NavBar />
      //   <div className="App-header">
      //   <Title/>
      // </div>
      // </div>
      <React.Fragment>
        <div className="App">
      <NavBar />
      <Title />  
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/saved" component={SavedBooks} />
            <Route exact path="/books/:search" component={BookResults} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </div>
    </React.Fragment>
    );
  }
}

export default App;
