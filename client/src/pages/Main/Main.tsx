import React, { useEffect } from "react";
import Proposition from "../../component/Proposition/Proposition";
import "./Main.scss";
import Carousel from "../../component/Carusel/Carousel";
import { useAppSelector } from "../../hooks/useRedux";

const Main: React.FC = () => {

  const state = useAppSelector(state => state)

  useEffect(() => {
   fetch("http://:server/ws/p/all/story")
    .then(r => r.json())
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.error(err, "ERROR");
    });
  }, []);

  return (
    <div className="page">
      <Carousel />
      <Proposition />
    </div>
  );
};

export default Main;
