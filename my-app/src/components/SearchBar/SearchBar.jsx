import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import style from "./searchBar.module.css";
import { getCategoryArticlesByName } from '../../redux/actions/categoriesActions';
import { GrPowerReset } from "react-icons/gr";

const SearchBar = () => {
  const dispatch = useDispatch();

  const [searchByName, setSearchByName] = useState("");

   const handleChange = (e) => {
   setSearchByName(e.target.value);
  };
  const handleSearch = () => {
    console.log("click")
    dispatch(getCategoryArticlesByName(searchByName));
  };

  useEffect(() => {
    dispatch(getCategoryArticlesByName(searchByName));
  }, [searchByName, dispatch]);


  return (
    <div class={style.searchContainer}>
    <div className={style.searchBar}
    >
      <input
        type="search"
        placeholder="Busca un articulo por nombre.."
        onChange={handleChange}
        value={searchByName}
      />
    </div>
      
    </div>
  );
};

export default SearchBar;