import React from "react";
import "./App.css";
import DevelopersList from "./components/DevelopersList";
import Developer from "./components/Developer";
import { Route } from "react-router-dom";
import PostPage from "./components/PostPage";
import LoginPage from "./components/LoginPage";
import { Link } from "react-router-dom";
import SignUp from "./components/SignUp";
import AddPost from "./components/AddPost";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <ul className="navbar">
        <li>
          {" "}
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
        <li>
          <Link to="/posts/new">New Post</Link>
        </li>
      </ul>

      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignUp} />
      <Route path="/posts/new" component={AddPost} />
      <Route path="/read/:id" component={PostPage} />
      <Route exact path="/" component={DevelopersList} />
      <Route exact path="/developers" component={Developer} />
      <div>
        <Profile />
      </div>
    </div>
  );
}

export default App;
