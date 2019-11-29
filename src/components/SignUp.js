import React, { Component } from "react";
import { connect } from "react-redux";
import { signUp } from "../store/signup/actions";

class SignUp extends Component {
  state = {
    name: "",
    email: "",
    password: ""
  };

  handleChange = event => {
    console.log("getting input for SignUp:", this.state);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("handelSubmit in SignUp:");
    const { name, email, password } = this.state;
    this.props.dispatch(signUp(name, email, password));
    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <form onSubmit={this.handleSubmit}>
          <p>
            <input
              type="text"
              name="name"
              placeholder="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </p>

          <p>
            <input
              type="email"
              name="email"
              placeholder="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <input
              type="password"
              name="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <button type="submit">Sign Up</button>
          </p>
        </form>
      </div>
    );
  }
}

export default connect()(SignUp);
