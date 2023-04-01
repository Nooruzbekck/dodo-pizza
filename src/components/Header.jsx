import LogoSvg from "../assets/img/pizza-logo.svg";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import Search from "./search/Search";
import { useSelector } from "react-redux";

function Header() {
  const {items, totalPrice } = useSelector((state) => state.cart);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0)

  
  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img width={38} src={LogoSvg} alt="Pizza logo" />
            <div>
              <h1>React Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </Link>
        <Search />
        <div className="header__cart">
          <Link to="/cart" className="button button--cart">
            <span>{totalPrice} P</span>
            <div className="button__delimiter"></div>
            <BsCart2 />
            <span>{totalCount}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Header;
