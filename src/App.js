import "./scss/app.scss";
import Header from "./components/Header";
import Card from "./components/Card";
import PizzaType from "./components/PizzaType";
import Sort from "./components/Sort";
import Pizza from "./components/Pizza";

import values from './assets/db.json'

function App() {
console.log(values)
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
            {values.map((el)=>(
              <Pizza {...el}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
