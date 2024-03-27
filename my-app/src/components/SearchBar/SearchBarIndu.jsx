import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import style from "./searchBar.module.css";
import { getArticlesByNameAdmin } from '../../redux/actions/articlesActions';

const SearchBarIndu = () => {
  const dispatch = useDispatch();

  const [searchByName, setSearchByName] = useState("");

   const handleChange = (e) => {
   setSearchByName(e.target.value);
  };

  useEffect(() => {
    dispatch(getArticlesByNameAdmin(searchByName));
  }, [searchByName, dispatch]);


  return (
    <div className={style.searchContainer}>
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

export default SearchBarIndu;