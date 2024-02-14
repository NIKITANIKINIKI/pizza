import "./scss/app.scss";
import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import CartPizza from "./pages/CartPizza";
import FullPizza from "./pages/FullPizza";
import MainLayout from "./layouts/MainLayout";

// import values from './assets/db.json'

function App() {
  const [searchTitle, changeTitle] = React.useState("");

  return (
    <Routes>
      <Route path='/' element={<MainLayout searchTitle={searchTitle} changeTitle={changeTitle} />}>
        <Route path="" element={<Home searchTitle={searchTitle} />} />
        <Route path="pizza/:id" element={<FullPizza />} />
        <Route path="cart" element={<CartPizza />}></Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
