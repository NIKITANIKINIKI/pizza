import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/slice/cartSlice";

function PizzaContent({ id, name, imageUrl, types, sizes, price }) {
  const [pizzaSize, changeSize] = React.useState(0);
  const [pizzaIndex, changeIndex] = React.useState(0);

  const oldItem = useSelector((state) =>
    state.cartSlice.items.find((el) => el.id == id)
  );
  const dispatch = useDispatch();

  const typePizza = ["тонкое", "традиционная"];

  const onClickToAdd = () => {
    const item = {
      id,
      name,
      price,
      imageUrl,
      type: typePizza[pizzaIndex],
      size: sizes[pizzaSize],
      count: 1,
    };
    dispatch(addToCart(item));
  };
  return (
    <>
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {types.map((el, index) => (
            <li
              key={index}
              onClick={() => changeIndex(index)}
              className={pizzaIndex === index ? "active" : ""}
            >
              {typePizza[index]}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((el, index) => (
            <li
              key={index}
              onClick={() => changeSize(index)}
              className={pizzaSize === index ? "active" : ""}
            >
              {el} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">{price} руб.</div>
        <div
          onClick={onClickToAdd}
          className="button button--outline button--add"
        >
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
          <i>{oldItem ? oldItem.count : 0}</i>
        </div>
      </div>
    </>
  );
}

export default PizzaContent;
