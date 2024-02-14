import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeType, setFilters } from "../redux/slice/filterSlice";
import { useNavigate } from "react-router-dom";
import qs, { parse } from "qs";
import { fetchItems } from "../redux/slice/pizzaSlice";

import PizzaType from "../components/PizzaType";
import Sort, { sortItems } from "../components/Sort";
import Pizza from "../components/Pizza";
import Skeleton from "../components/PizzaBlock/Skeleton";
import PaginationBlock from "../components/PaginationBlock";
import NotFound from "./NotFound";

function Home({ searchTitle }) {
  const isURL = React.useRef(false);
  const isMounted = React.useRef(1);

  const { items, totalPages, status } = useSelector(
    (state) => state.pizzaSlice
  );
  const { pizzaType, activeObj, currentPage } = useSelector(
    (state) => state.filterSlice
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchPizza = async () => {
    if (!isURL.current) {
      dispatch(fetchItems({ searchTitle, currentPage, pizzaType, activeObj }));
      window.scrollTo(0, 0);
    }
    isURL.current = false;
  };

  React.useEffect(() => {
    if (window.location.search) {
      const parseParams = qs.parse(window.location.search.substring(1));
      const sort = sortItems.find((el) => el.activeObj == parseParams.sortEl);
      dispatch(
        setFilters({
          ...parseParams,
          activeObj: sort,
        })
      );
      isURL.current = true;
    }
  }, []);

  React.useEffect(() => {
    fetchPizza();
  }, [pizzaType, activeObj, searchTitle, currentPage]);

  React.useEffect(() => {
    if (isMounted.current > 2) {
      const quary = qs.stringify({
        pizzaType,
        activeObj: activeObj.sortEl,
        currentPage,
      });
      navigate(`?${quary}`);
    }
    isMounted.current += 1;
  }, [pizzaType, activeObj.sortEl, currentPage]);

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
          <PizzaType
            pizzaType={pizzaType}
            onClickButton={(i) => dispatch(changeType(i))}
          />
          <Sort activeObj={activeObj} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        {status == "error" && <NotFound />}
        <div className="content__items">
          {status == "loading" ? skeleton : itemsPizza}
        </div>
      </div>
      <PaginationBlock currentPage={currentPage} totalPages={totalPages} />
    </>
  );
}

export default Home;
