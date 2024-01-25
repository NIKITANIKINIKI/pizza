import "./scss/app.scss";
import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Card from "./components/Card";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import CartPizza from "./pages/CartPizza";
import SearchPizza from "./components/SearchPizza"

// import values from './assets/db.json'

function App() {

  const [searchTitle, changeTitle]=React.useState('')

  return (
    <div className="wrapper">
      <div className="header">
        <div className="container">
          <Header />
          <SearchPizza searchTitle={searchTitle} changeTitle={changeTitle}/>
          <Card />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home searchTitle={searchTitle} />} />
        <Route path='/cart' element={<CartPizza/>}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
