import "./scss/app.scss";
import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Card from "./components/Card";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import CartPizza from "./pages/CartPizza";

// import values from './assets/db.json'

function App() {
  return (
    <div className="wrapper">
      <div className="header">
        <div className="container">
          <Header />
          <Card />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/cart' element={<CartPizza/>}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
