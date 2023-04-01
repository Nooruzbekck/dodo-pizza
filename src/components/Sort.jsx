import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSort } from "../redux/slices/filterSlice";

 export const sortList = [
   { name: "популярности (DESC)", sortProperty: "rating" },
   { name: "популярности (ASC)", sortProperty: "-rating" },
   { name: "цене (DESC)", sortProperty: "price" },
   { name: "цене (ASC)", sortProperty: "-price" },
   { name: "алфавиту (DESC)", sortProperty: "title" },
   { name: "алфавиту (ASC)", sortProperty: "-title" },
 ];

function Sort() {

  const dispatch = useDispatch()
  const {sort} = useSelector((state) => state.filter)
  const sortRef = useRef()
  const [open, setOpen] = useState(false)


  const onClickListItem = (obj) => {
      dispatch(setSort(obj))
    setOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.path.includes(sortRef.current)) {
        setOpen(false);
      }
    };
     document.body.addEventListener('click',handleClickOutside)
     return () => {
       document.body.removeEventListener('click', handleClickOutside )
     }
  }, [])

  
  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://ww.w3.org/2000/svg"
        >
          <path fill="#2C2C2C" />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={() => setOpen(!open)}>{sort.name}</span>
      </div>
      {open && (
        <div className="sort__popup">
          <ul>
            {sortList.map((obj, i) => (
              <li
                key={i}
                onClick={() => onClickListItem(obj)}
                className={
                  sort.sortProperty === obj.sortProperty ? "active" : ""
                }
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
export default Sort