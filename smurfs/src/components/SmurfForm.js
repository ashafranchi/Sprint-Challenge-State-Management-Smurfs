import React from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions/a-index";

class SmurfForm extends React.Component {
    state = {
        name: '',
        age: '',
        height: ''
    }

    handleChange = e => {
        this.setState ({ [e.target.name]: e.target.value })
    }

    addASmurf = e => {
        e.preventDefault()
        const Smurf = this.state
        this.props.addSmurf(Smurf)
        this.setState({
            name: '',
            age: '',
            height: ''
        })
    }
    render() {
        return(
            <div className="sForm">
                <form onSubmit={this.addASmurf}>
                    <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    />
                    <input
                    type="text"
                    name="age"
                    placeholder="Age"
                    value={this.state.age}
                    onChange={this.handleChange}
                    />
                    <input
                    type="text"
                    name="height"
                    placeholder="Height"
                    value={this.state.height}
                    onChange={this.handleChange}
                    />
                    <button onClick={this.addASmurf}>
                        Add Smurf
                    </button>
                </form>
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        addSmurf: state.addSmurf
    }
  };
  
  export default connect(
    mapStateToProps,
    { addSmurf }
  )(SmurfForm);