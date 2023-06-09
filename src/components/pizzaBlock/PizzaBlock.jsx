import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../../redux/slices/cartSlice'

  const typeNames = ["Tонкое", "Tрадиционное"];


function PizzaBlock({id, title, price, imageUrl, sizes ,types, rating }) {
const dispatch = useDispatch()
const cartItem = useSelector((state) => state.cart.items.find((item) => item.id === id))

 const [activeType, setActiveType] = useState(0);
 const [activeSize, setActiveSize] = useState(0);

const addedCount = cartItem ? cartItem.count  : 0

  const onClickAdd  = () => {
    const item = {
      id,
      title,
      price,
      imageUrl,
      type: typeNames[activeType],
      size: activeSize,
    };
    dispatch(addProduct(item));
  };
 

  return (
    <div className="pizza-block-wrapper">
      <div className="pizza-block">
        <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
        <h4 className="pizza-block__title">{title}</h4>
        <div className="pizza-block__selector">
          <ul>
            {types.map((type) => (
              <li
                key={type}
                onClick={() => setActiveType(type)}
                className={activeType === type ? "active" : ""}
              >
                {typeNames[type]}
              </li>
            ))}
          </ul>
          <ul>
            {sizes.map((size, i) => (
              <li
                key={size}
                onClick={() => setActiveSize(size)}
                className={activeSize === size ? "active" : ""}
              >
                {size}см.
              </li>
            ))}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">от {price}</div>
          <button
            onClick={onClickAdd}
            className="button button--outline button--add"
          >
            <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
              <path fill="white" />
            </svg>
            <span>Добавить</span>
            {addedCount > 0 && <i>{addedCount}</i>}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PizzaBlock