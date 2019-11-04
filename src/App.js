import React, { Component } from "react";
import TableComp from "./components/table";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],

      number: "",
      gender: "",
      nat: "",

      displayResult: false
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitForm = e => {
    e.preventDefault();
    this.setState({ displayResult: true });
    this.forceUpdate();
  };

  render() {
    return (
      <div className="container d-flex justify-content-center flex-column">
        <div className="container mb-5 bg-dark rounded">
          <form className="m-5 p-5" onSubmit={this.submitForm}>
            <label className="text-white">Number of Users</label>
            <input
              type="text"
              name="number"
              onBlur={this.changeHandler}
              className="form-control"
            />

            <label className="text-white mt-4">Nationality</label>
            <select
              className="form-control"
              name="nat"
              onChange={this.changeHandler}
            >
              <option value="">Select Country</option>
              <option value="IR">IRAN</option>
              <option value="US">USA</option>
              <option value="GB">UK</option>
              <option value="CH">China</option>
              <option value="RU">Russia</option>
              <option value="DE">Germany</option>
            </select>

            <label className="text-white mt-4">Gender</label>
            <div className="d-flex flex-row pr-5 pl-5">
              <label className="text-white">Male</label>
              <input
                type="radio"
                name="gender"
                value="male"
                className="form-control"
                onChange={this.changeHandler}
              />
              <label className="text-white">Female</label>
              <input
                type="radio"
                name="gender"
                value="female"
                className="form-control"
                onChange={this.changeHandler}
              />
            </div>

            <input
              type="submit"
              value="Get Result"
              className="btn btn-success float-right pl-5 pr-5"
            />
          </form>
        </div>

        <div>
          {this.state.displayResult ? (
            <TableComp
              //results={this.state.results}
              queryParam={{
                nat: this.state.nat,
                gender: this.state.gender,
                number: this.state.number,
                
                : true
              }}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
