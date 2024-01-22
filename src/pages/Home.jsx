import React from "react";

import PizzaType from "../components/PizzaType";
import Sort from "../components/Sort";
import Pizza from "../components/Pizza";
import Skeleton from "../components/PizzaBlock/Skeleton"


function Home() {
  const [items, changeItems] = React.useState([]);
  const [endLoad, changeEndLoad] = React.useState(true);

  React.useEffect(() => {
    fetch("https://6a54dec2369a2d50.mokky.dev/types")
      .then((rez) => rez.json())
      .then((rez) => {
        changeItems(rez);
        changeEndLoad(false);
      });
      window.scrollTo(0,0)
  }, []);
  return (
    <>
      <div className="content">
        <div className="container">
          <div className="content__top">
            <PizzaType />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {endLoad
              ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
              : items.map((el, index) => <Pizza key={index} {...el} />)}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home 