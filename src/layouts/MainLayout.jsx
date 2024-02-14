import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import React from "react";


export const SearchContext = React.createContext();

function MainLayout({searchTitle,changeTitle }) {
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
        <Outlet/>
      </div>
    </div>
  );
}

export default MainLayout


