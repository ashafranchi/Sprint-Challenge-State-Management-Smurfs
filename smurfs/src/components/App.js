import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { Smurfs } from "./Smurfs";
import { getSmurf } from "../actions/a-index";
import SmurfForm from "./SmurfForm";

class App extends Component {
  render() {
    return (
        <div className="App">
          <SmurfForm />
          <Smurfs smurfs={this.props.smurfs} />
        </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    getSmurf: state.getSmurf
  }
}

export default connect(
  mapStateToProps,
  { getSmurf }
) (App);
