import React from "react";
import "./App.css";
import DevelopersList from "./components/DevelopersList";
import Developer from "./components/Developer";
import { Switch, Route } from "react-router-dom";
import PostPage from "./components/PostPage";
import LoginPage from "./components/LoginPage";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/developers" component={Developer} />
        <Route component={DevelopersList} />
      </Switch>
      <Route path="/read/:id" component={PostPage} />
      <Route path="/login" component={LoginPage} />
      <Link to="/login">Log in</Link>
    </div>
  );
}

export default App;
