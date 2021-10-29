import React from "react";
import Proposition from "../../component/Proposition/Proposition";
import "./Main.scss";
import Carousel from "../../component/Carusel/Carousel";

const Main: React.FC = () => {

  return (
    <div className="page">
      <Carousel />
      <Proposition />
    </div>
  );
};

export default Main;
