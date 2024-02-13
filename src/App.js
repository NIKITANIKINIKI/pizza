import "./scss/app.scss";
import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import CartPizza from "./pages/CartPizza";
import FullPizza from "./pages/FullPizza";

// import values from './assets/db.json'

export const SearchContext = React.createContext();

function App() {
  const [searchTitle, changeTitle] = React.useState("");

  return (
    <div className="wrapper">
      <div className="header">
        <div className="container">
          <SearchContext.Provider value={{ searchTitle, changeTitle }}>
            <Header />
          </SearchContext.Provider>
        </div>
      </div>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home searchTitle={searchTitle} />} />
          <Route path="/pizza/:id" element={<FullPizza />} />
          <Route path="/cart" element={<CartPizza />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
