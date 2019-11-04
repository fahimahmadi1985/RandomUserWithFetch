import React, { Component } from "react";

export class TableComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      shouldRender: false
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      (nextProps.queryParam.number !== prevState.number ||
        nextProps.queryParam.gender !== prevState.gender ||
        nextProps.queryParam.nat !== prevState.nat) &&
      nextProps.queryParam.shouldRender !== prevState.shouldRender
    ) {
      return {
        results: [],
        shouldRender: nextProps.queryParam.shouldRender,
        nat: nextProps.queryParam.nat,
        gender: nextProps.queryParam.gender,
        number: nextProps.queryParam.number
      };
    }
  }

  shouldComponentUpdate(prevState, nextState) {
    if (this.state.shouldRender) {
      fetch(
        `https://randomuser.me/api/?results=${this.state.number}&&gender=${this.state.gender}&&nat=${this.state.nat}`
      )
        .then(res => res.json())
        .then(jsonData => this.setState({ results: [...jsonData.results] }));
      this.setState({ shouldRender: false });
    } else {
      return true;
    }
  }

  componentDidMount() {
    fetch(
      `https://randomuser.me/api/?results=${this.state.number}&&gender=${this.state.gender}&&nat=${this.state.nat}`
    )
      .then(res => res.json())
      .then(jsonData => this.setState({ results: [...jsonData.results] }));
  }

  render() {
    return (
      <div>
        <table className="table border-white">
          <thead>
            <tr>
              <th>#</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Gender</th>
              <th>Date of Birth</th>
              <th>Picture</th>
            </tr>
          </thead>
          <tbody>
            {this.state.results.map((result, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{result.name.first}</td>
                <td>{result.name.last}</td>
                <td>{result.gender}</td>
                <td>
                  {`${new Date(result.dob.date).getFullYear()}-${new Date(
                    result.dob.date
                  ).getMonth()}-${new Date(result.dob.date).getDate()}`}
                </td>
                <td>
                  <img
                    src={result.picture.thumbnail}
                    alt={result.name.first}
                    className="rounded"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TableComp;
