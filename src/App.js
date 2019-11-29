import React from "react";
import "./App.css";
import DevelopersList from "./components/DevelopersList";
import Developer from "./components/Developer";
import { Route, NavLink } from "react-router-dom";
import PostPage from "./components/PostPage";
import LoginPage from "./components/LoginPage";
import SignUp from "./components/SignUp";
import AddPost from "./components/AddPost";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <ul className="navbar">
        <li>
          {" "}
          <NavLink to="/" activeStyle={{ color: "green" }}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" activeStyle={{ color: "green" }}>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/signup" activeStyle={{ color: "green" }}>
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to="/posts/new" activeStyle={{ color: "green" }}>
            New Post
          </NavLink>
        </li>
      </ul>

      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/posts/new" component={AddPost} />
      <Route exact path="/read/:id" component={PostPage} />
      <Route exact path="/" component={DevelopersList} />
      <Route exact path="/developers" component={Developer} />
      <div>
        <Profile />
      </div>
    </div>
  );
}

export default App;
