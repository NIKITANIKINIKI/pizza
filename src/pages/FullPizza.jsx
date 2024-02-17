import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import PizzaContent from "../components/Pizza/PizzaContent";
import PizzaComment from '../components/Pizza/PizzaComment'

function FullPizza() {
  const { id } = useParams();
  const [pizza, setPizza] = React.useState();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          `https://6a54dec2369a2d50.mokky.dev/types/${id}`
        );
        setPizza(data);
      } catch (error) {
        navigate("/");
      }
    }
    fetchPizza();
  }, []);

  if (!pizza) {
    return <div>Загрузка...</div>;
  }
  return (
    <>
      <div className="pizza-block-center">
        <div>
          <div className="pizza-block-top">
            <Link
              to="/"
              className="button button--outline button--add go-back-btn#"
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
          </div>
          <div className="pizza-block-img">
            <img  src={pizza.imageUrl} alt="pizza" />
          </div>
        </div>
        <div className='pizza-block-side'>
          <div className="star-content">
            {
              [...Array(5)].map((_, index) =>(
                <div key={index} className={`star-item ${index<Math.round(pizza.rating/2) ? '' : 'star-active'}`}></div>
              ))
            }
          </div>
          <PizzaContent {...pizza} />
        </div>
        <PizzaComment/>
      </div>
    </>
  );
}

export default FullPizza;
