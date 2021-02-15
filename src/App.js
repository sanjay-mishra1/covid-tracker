import { withWidth } from "@material-ui/core";
import React, { Component } from "react";
import PWAInstall from "./components/PWAInstall";
import "./css/App.css";
import Home from "./pages/home";
class App extends Component {
  types = ["cases", "recovered", "deaths"];
  state = {
    type: this.types.includes(
      new URLSearchParams(window.location.search).get("type")
    )
      ? new URLSearchParams(window.location.search).get("type")
      : "cases",
  };
  componentDidMount() {}
  render() {
    return (
      <div className="app">
        <Home caseProp={this.state.type} width={this.props.width} />
        {this.props.width === "xs" && <PWAInstall />}
      </div>
    );
  }
}
export default withWidth()(App);
