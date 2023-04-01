import React from 'react'
import { useDispatch } from 'react-redux';
import { addProduct, minusItem, removeItem } from '../redux/slices/cartSlice';
import { TiDeleteOutline } from "react-icons/ti";
import {HiOutlineMinusCircle} from 'react-icons/hi'
import {AiOutlinePlusCircle} from 'react-icons/ai'


function CartItem({id, title,type, price, count, imageUrl}) {

    const dispatch = useDispatch()

    const onClickPlus = (id) => {
        dispatch(addProduct({id}))
    }
     const onClickMinus = (id) => {
       dispatch(minusItem(id));
     };
       const onClickRemove = (id) => {
         if(window.confirm('sadf')){
             dispatch(removeItem(id))
         }
       };
  return (
    <div className="cart__item">
      <div className="cart__item-img">
        <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      </div>
      <div className="cart__item-info">
        <h3>{title}</h3>
        <p>{type}, 26см.</p>
      </div>
      <div className="cart__item-count">
        <div
          onClick={onClickMinus}
          className="button button-outline button--circle cart__item-count-minus"
        >
          <HiOutlineMinusCircle/>
        </div>
        <b></b>
        <div
          onClick={onClickPlus}
          className="button button-outline button--circle cart__item-count-plus"
        >
          <AiOutlinePlusCircle />
        </div>
        <div className="cart__item-remove">
          <div className="button button--outline button--circle">
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              xmlns="https://www.w3/2000/svg"
            ></svg>
          </div>
          <b>{count}</b>
          <div className="button button--outline button--circle cart__item-count-pl">
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              xmlns="https://www.w3/2000/svg"
            ></svg>
          </div>
        </div>
        <div className="cart__item-price">
          <b>{price * count} </b>
        </div>
        <div className="cart__item-remove">
          <div
            onClick={onClickRemove}
            className="button button--outline button-circle"
          >
            <TiDeleteOutline />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem