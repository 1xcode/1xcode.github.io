import React from "react";
import "./styles/main.scss";
import "./styles/fonts/css/font-awesome.min.css";
import Nav from "./components/Nav-component";
import Header from "./components/Header";
import Card from "./components/Card";
import data from "./components/data";
import Projects from "./components/Projects";
import Contributor from "./components/Contributor";
import Footer from "./components/Footer";

class App extends React.Component {
  state = {
    repositories: [],
    raw:[],
    searchBar: "",
  };

  handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({
          [name]: checked,
        })
      : this.setState({
          [name]: value,
        });

    this.handleSearch();
  };

  handleSearch = (event) => {
    fetch("https://api.github.com/orgs/programming-zone/repos?per_page=100")
    .then((data) => data.json())
    .then((res) => {
      this.setState({
        raw: res,
      });
    });
    let resp = [];
    for (const repo of this.state.raw) {
      if (this.state.searchBar !== ""){
        if (repo.name.includes(this.state.searchBar)) {
          resp = [...resp,repo];
        }
      }
    }
    // console.log(resp)
    this.setState({
      repositories: resp,
    })
  };

  componentDidMount() {
    fetch("https://api.github.com/orgs/programming-zone/repos?per_page=100")
      .then((data) => data.json())
      .then((res) => {
        this.setState({
          repositories: res,
          raw: res,
        });
      });
  }

  render() {
    const cardlist = data.map((data) => (
      <Card
        key={data.id}
        img={data.img}
        title={data.title}
        description={data.description}
        url={data.url}
        website={data.website}
      />
    ));
    return (
      <div className="App">
        <Nav />
        <Header />
        <div className="band-container" data-layout="3-up">
          {cardlist}
        </div>
        <Projects
        data={this.state.searchBar !== "" ? this.state.repositories : this.state.raw}
        repo={this.state.repositories}
        value={this.state.searchBar}
        handleChange={this.handleChange}
        handleSearch={this.handleSearch} />
        <Contributor />
        <Footer />
      </div>
    );
  }
}

export default App;
