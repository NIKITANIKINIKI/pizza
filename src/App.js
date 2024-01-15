import "./scss/app.scss";
import Header from "./components/Header";
import Card from "./components/Card";
import PizzaType from "./components/PizzaType";
import Sort from "./components/Sort";
import Pizza from "./components/Pizza";
import React from "react";
import Skeleton from "./components/PizzaBlock/Skeleton"

// import values from './assets/db.json'

function App() {
  
  const [items, changeItems]=React.useState([])
  const [endLoad, changeEndLoad]=React.useState(true)

  React.useEffect(() => {
    fetch('https://6a54dec2369a2d50.mokky.dev/types')
    .then((rez) => rez.json())
    .then((rez) =>{
      changeItems(rez)
      changeEndLoad(false)
    } )
  },[])


  return (
    <div className="wrapper">
      <div className="header">
        <div className="container">
          <Header />
          <Card />
        </div>
      </div>
      <div className="content">
        <div className="container">
          <div className="content__top">
            <PizzaType />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {items.map((el, index)=>(
              <Pizza key={index} {...el}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
