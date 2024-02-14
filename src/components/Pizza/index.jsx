import React from "react";
import { Link } from "react-router-dom";

import PizzaContent from "./PizzaContent";

function Pizza({ id, name, imageUrl, types, sizes, price }) {
  const obj = {
    id,
    name,
    imageUrl,
    types,
    sizes,
    price,
  };

  return (
    <div className="pizza-block-center">
      <div className="pizza-block">
        <Link to={"pizza/" + id}>
          <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
        </Link>
        <PizzaContent {...obj}/>
      </div>
    </div>
  );
}

export default Pizza;
