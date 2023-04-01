import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { clearItems } from "../redux/slices/cartSlice";


function Cart() {
  const dispatch = useDispatch();
  const {items, totalPrice} = useSelector((state) => state.cart)
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  
  const onClickClear = (id) => {
    if (window.confirm("Очистить корзину ?")) {
      dispatchEvent(clearItems());
    }
  };
  return (
    <div className="container container--cart">
      <div className="cart">
        <div className="cart__top">
          <h2 className="content__title">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            ></svg>
            Корзина
          </h2>
          <div onClick={onClickClear} className="cart__clear">
            <span>Очистить козину</span>
          </div>
        </div>
        <div className="conten__items">
          {items.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
        <div className="cart__bottom">
          <div className="cart__bottom-details">
            <span>
              Всего пицц: <b>{totalCount}шт.</b>
            </span>
            <span>
              Всего заказа: <b>{totalPrice} Р</b>
            </span>
          </div>
          <div>
            <Link to='/' className='button button--outline button--add go-back-btn'>
              <svg>
    
              </svg>
              <span>
                Вернуться назад
              </span>
            </Link>
            <div className="button pay-btn">
                  <span>Оплатить сейчас</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
