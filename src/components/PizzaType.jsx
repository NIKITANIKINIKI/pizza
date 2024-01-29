import React from "react";

function PizzaType(props) {

const menu=['Все','Мясные','Вегетарианская','Гриль','Острые','Закрытые']

  return (
    <div className="categories">
      <ul>
        {
          menu.map((el, index)=>(
            <li key={index} onClick={()=>props.onClickButton(index) } className={props.pizzaType==index ? 'active': '' }>{el}</li>
          ))
        }
      </ul>
    </div>
  );
}


export default PizzaType