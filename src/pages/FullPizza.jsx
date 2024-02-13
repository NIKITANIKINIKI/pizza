import axios from "axios";
import React, { useEffect, useState } from "react";
import {  useParams, Link } from "react-router-dom";

function FullPizza() {
  const {id} = useParams();
  const [pizza, setPizza]=React.useState()

  React.useEffect(() => {
    async function fetchPizza() {
      try{
        const { data } = await axios.get(
          `https://6a54dec2369a2d50.mokky.dev/types/${id}`
        );
        setPizza(data)
      }
      catch(error){
        alert('Произошла ошибка')
      }
      
    }
    fetchPizza();
  }, []);

  if(!pizza){
    (
      <div>Загрузка</div>
    )
  }
  return (
    <>
      <div className="pizza-block-center">
        <div>
        <Link
                to="/"
                className="button button--outline button--add go-back-btn"
              >
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 13L1 6.93015L6.86175 1"
                    stroke="#D3D3D3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span>Вернуться назад</span>
              </Link>
          <img
            src="https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg"
            alt=""
          />
        </div>
        <div>
          <div className="star-content">
            <div className="star-item"></div>
            <div className="star-item"></div>
            <div className="star-item"></div>
            <div className="star-item"></div>
            <div className="star-item"></div>
          </div>
          <h1 className="pizza-block__title">Сырная</h1>
          <div className="pizza-block__selector">
            <ul>
              {/* {types.map((el, index) => (
                <li
                  key={index}
                  onClick={() => changeIndex(index)}
                  className={pizzaIndex === index ? "active" : ""}
                >
                  {typePizza[index]}
                </li>
              ))} */}
            </ul>
            <ul>
              {/* {sizes.map((el, index) => (
                <li
                  key={index}
                  onClick={() => changeSize(index)}
                  className={pizzaSize === index ? "active" : ""}
                >
                  {el} см.
                </li>
              ))} */}
            </ul>
          </div>
          <div className="pizza-block__bottom">
            <div className="pizza-block__price">222 руб.</div>
            <div className="button button--outline button--add">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                  fill="white"
                />
              </svg>
              <span>Добавить</span>
              <i>1</i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FullPizza;
