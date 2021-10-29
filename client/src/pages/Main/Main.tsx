import React from "react";
import Proposition from "../../component/Proposition/Proposition";
import "./Main.scss";
import Carousel from "../../component/Carusel/Carousel";

const Main: React.FC = () => {

  return (
    <div className="page">
      <h1>Main</h1>
      <Carousel />
      <Proposition />
    </div>
  );
};

export default Main;
