import React from "react";

import PizzaType from "../components/PizzaType";
import Sort from "../components/Sort";
import Pizza from "../components/Pizza";
import Skeleton from "../components/PizzaBlock/Skeleton";
import PaginationBlock from "../components/PaginationBlock";

function Home({ searchTitle }) {
  const [items, changeItems] = React.useState([]);
  const [endLoad, changeEndLoad] = React.useState(true);
  const [choice, changeChoice] = React.useState(0);
  const [currentPage, changeCurrentPage] = React.useState(1);
  const [totalPages, changeTotalPages]=React.useState(0)
  const [activeObj, changeActive] = React.useState({
    id: 0,
    name: "популярности",
    sortEl: "rating",
  });

  React.useEffect(() => {
    changeEndLoad(true);
    fetch(
      `https://6a54dec2369a2d50.mokky.dev/types?name=*${searchTitle}&page=${currentPage}&limit=${8}&${
        choice > 0 ? `category=${choice}` : ""
      }&sortBy=${activeObj.sortEl}`
    )
      .then((rez) => rez.json())
      .then((rez) => {
        changeItems(rez.items);
        changeTotalPages(rez.meta.total_pages)
        changeEndLoad(false);
      });
    window.scrollTo(0, 0);
  }, [choice, activeObj, searchTitle, currentPage]);

  const onClickButton = (index) => {
    changeChoice(index);
  };

  const skeleton = [...new Array(8)].map((_, index) => (
    <Skeleton key={index} />
  ));
  const itemsPizza = items
    // Simple filter
    // .filter((e) => {
    //   if (e.name.toLowerCase().includes(searchTitle.toLowerCase())) {
    //     return true;
    //   }
    //   return false;
    // })
    .map((el, index) => <Pizza key={index} {...el} />);

  return (
    <>
      <div className="container">
        <div className="content__top">
          <PizzaType choice={choice} onClickButton={(i) => onClickButton(i)} />
          <Sort activeObj={activeObj} changeActive={changeActive} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">{endLoad ? skeleton : itemsPizza}</div>
      </div>
      <PaginationBlock currentPage={currentPage} changeCurrentPage={changeCurrentPage} totalPages={totalPages}/>
    </>
  );
}

export default Home;
