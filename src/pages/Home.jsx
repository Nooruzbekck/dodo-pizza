import React, { useCallback, useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { SearchContext } from "../App";
import Categories from "../components/Categories";
import Pagination from "../components/pagination/Pagination";
import PizzaBlock from "../components/pizzaBlock/PizzaBlock";
import Skeleton from "../components/pizzaBlock/Skeleton";
import Sort, { sortList } from "../components/Sort";
import {
  categoryIdClick,
  setCurrentPage,
  setFilters,
} from "../redux/slices/filterSlice";
import qs from "qs";
import { useNavigate } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isSearch = useRef(false);
  const isMounted = useRef(false);

  const { categoryId, sort, currentPage } = useSelector(
    (state) => state.filter
  );

  const { searchValue } = useContext(SearchContext);

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const onChangeCategory = useCallback((idx) => {
    dispatch(categoryIdClick(idx));

  }, []) 
  

  const onChangePage = (page) => {
    dispatch(setCurrentPage(page));
  };

  const fetchPizzas = () => {

    setIsLoading(true);
    
    const order = sort.sortProperty.includes("-") ? "asc" : "desc"; // если минус есть тогда рендер asc иначе рендер desc
    const sortBy = sort.sortProperty.replace("-", ""); // если - есть поменай на ''
    const category = categoryId > 0 ? `category=${categoryId}` : ""; /// если categoryId больше нуля верни category=${categoryId} иначе ''
    const search = searchValue ? `&search=${searchValue}` : "";

    axios
      .get(
        `https://6397249886d04c76338c32eb.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
      )
      .then((response) => {
        setItems(response.data);
        setIsLoading(false);
      });
  };

   // Если изменили параметр и был первый рендерд
  
 useEffect(() => {
   if (isMounted.current) {
     const queryString = qs.stringify({
       sortProperty: sort.sortProperty,
       categoryId,
       currentPage,
     });
     navigate(`?${queryString}`);
   }
   isMounted.current = true;
 }, [categoryId, sort.sortProperty, currentPage]); 

  
    // Если был первый рендер, то проверяем URL-параметр и сохраняем в редуксе
    useEffect(() => {
      if (window.location.search) {
        const params = qs.parse(window.location.search.substring(1));

        const sort = sortList.find(
          (obj) => obj.sortProperty === params.sortProperty
        );
      
          dispatch(
            setFilters({
              ...params,
              sort,
            })
          );
        

        isSearch.current = true;
      }
    }, []);

    // Если был рендер , то запрашивем пиццы
  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (!isSearch.current) {
      fetchPizzas();
    }
    isSearch.current = false; 
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);



  const skeletons = [...new Array(6)].map((_, i) => <Skeleton key={i} />);
  const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeletons : pizzas}</div>
      <Pagination onChangePage={onChangePage} />
    </div>
  );
}

export default Home;
