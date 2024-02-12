import React from "react";
import { useSelector } from "react-redux";

import NotFoundBlock from "../components/NotFoundBlock";

function NotFound() {
  const { status } = useSelector((state) => state.pizzaSlice);
  return (
    <>
      {status != "error" ? (
        <NotFoundBlock
          title="Ничего не найдено"
          content="Вернитесь на главную и попробуйте снова!"
          picture="🕵"
        />
      ) : (
        <NotFoundBlock
          title="Пицц нет!"
          content="Не удалось получить информацию с сервера!"
          picture="🔧"
        />
      )}
    </>
  );
}

export default NotFound;
