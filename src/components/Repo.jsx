import React, { Component } from "react";

class Repo extends Component {
  state = {
    repositories: [],
  };

  componentDidMount() {
    fetch("https://api.github.com/orgs/programming-zone/repos")
      .then((data) => data.json())
      .then((res) => {
        this.setState({
          repositories: res,
        });
      });
  }

  render() {
    let num = this.state.repositories.length;
    return (
      <div>
        <h2>
          <i className="fa fa-github"></i> {num} repositories
        </h2>
      </div>
    );
  }
}

export default Repo;
