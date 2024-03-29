import { Link, useLocation  } from "react-router-dom";

import Card from "./Card";
import SearchPizza from "./SearchPizza";

function Header() {
  const {pathname}=useLocation()
  return (
    <>
      <Link to="/">
        <div className="header__logo">
          <img width="38" src="./img/pizza-logo.svg" alt="Pizza logo" />
          <div>
            <h1>React Pizza</h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </div>
      </Link>
      <SearchPizza/>
      {pathname!=='/cart' && (
        <Card />
      )}

    </>
  );
}

export default Header;
