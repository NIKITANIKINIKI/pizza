import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeType, setFilters } from "../redux/slice/filterSlice";
import {setItems} from "../redux/slice/pizzaSlice"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import qs, { parse } from "qs";

import PizzaType from "../components/PizzaType";
import Sort, { sortItems } from "../components/Sort";
import Pizza from "../components/Pizza";
import Skeleton from "../components/PizzaBlock/Skeleton";
import PaginationBlock from "../components/PaginationBlock";

function Home({ searchTitle }) {
  // const [items, changeItems] = React.useState([]);
  const [endLoad, changeEndLoad] = React.useState(true);
  const [totalPages, changeTotalPages] = React.useState(0);
  const isURL = React.useRef(false);
  const isMounted = React.useRef(1);

  const {items}=useSelector((state) => state.pizzaSlice)
  const { pizzaType, activeObj, currentPage } = useSelector(
    (state) => state.filterSlice
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchPizza= async () =>{
    changeEndLoad(true);
    if (!isURL.current) {
      // axios
      //   .get(
      //     `https://6a54dec2369a2d50.mokky.dev/types?name=*${searchTitle}&page=${currentPage}&limit=${8}&${
      //       pizzaType > 0 ? `category=${pizzaType}` : ""
      //     }&sortBy=${activeObj.sortEl}`
      //   )
      //   .then((rez) => {
      //     console.log(rez);
      //     changeItems(rez.data.items);
      //     changeTotalPages(rez.data.meta.total_pages);
      //     changeEndLoad(false);
      //   });
        const {data} = await axios.get(`https://6a54dec2369a2d50.mokky.dev/types?name=*${searchTitle}&page=${currentPage}&limit=${8}&${pizzaType > 0 ? `category=${pizzaType}` : ""}&sortBy=${activeObj.sortEl}`)
        dispatch(setItems(data.items));
        changeTotalPages(data.meta.total_pages);
        changeEndLoad(false);
        window.scrollTo(0, 0);
    }
    isURL.current = false;
  }

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

  React.useEffect(() =>  {
    fetchPizza()
  }, [pizzaType, activeObj, searchTitle, currentPage]);

  React.useEffect(() => {
    if (isMounted.current>2) {
      const quary = qs.stringify({
        pizzaType,
        activeObj: activeObj.sortEl,
        currentPage,
      });
      navigate(`?${quary}`);
    }
    isMounted.current+=1;
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
        <div className="content__items">{endLoad ? skeleton : itemsPizza}</div>
      </div>
      <PaginationBlock currentPage={currentPage} totalPages={totalPages} />
    </>
  );
}

export default Home;
