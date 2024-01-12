import React from "react";

function PizzaType() {

const menu=['Все','Мясные','Вегетарианская','Гриль','Острые','Закрытые']


const [choice, changeChoice]=React.useState(0)

const onClickButton=(index)=>{
  changeChoice(index)
}

  return (
    <div className="categories">
      <ul>
        {
          menu.map((el, index)=>(
            <li onClick={()=>onClickButton(index) } className={choice==index ? 'active': '' }>{el}</li>
          ))
        }
      </ul>
    </div>
  );
}


export default PizzaType