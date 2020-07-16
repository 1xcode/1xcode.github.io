import React from "react";
import "./App.css";
import "./styles/main.scss";
import "./styles/fonts/css/font-awesome.min.css";
import Nav from "./components/Nav-component";
import Header from "./components/Header";
import Card from "./components/Card";
import data from "./components/data";

function App() {
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
    </div>
  );
}

export default App;
