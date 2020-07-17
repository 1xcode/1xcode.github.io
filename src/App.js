import React from "react";
import "./styles/main.scss";
import "./styles/fonts/css/font-awesome.min.css";
import Nav from "./components/Nav-component";
import Header from "./components/Header";
import Card from "./components/Card";
import data from "./components/data";
import Footer from "./components/Footer";
import Contributor from "./components/Contributor";

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
      {/* TODO: Complete the Contributor component */}
      {false && <Contributor />}
      <Footer />
    </div>
  );
}

export default App;
