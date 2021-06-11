import React, { Component } from "react";

class Repo extends Component {
  state = {
    repositories: [],
  };

  componentDidMount() {
    fetch("https://api.github.com/orgs/programming-zone")
      .then((data) => data.json())
      .then((res) => {
        this.setState({
          repositories: res,
        });
      });
  }

  render() {
    return (
      <div className="repo-div">
        <a href="#home">
          <h2>
            <i className="fa fa-github"></i> { this.state.repositories.public_repos  } repositories
          </h2>
        </a>
      </div>
    );
  }
}

export default Repo;
