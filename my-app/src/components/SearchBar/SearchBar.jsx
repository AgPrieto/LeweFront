import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import style from "./searchBar.module.css";
import { getCategoryArticlesByName } from '../../redux/actions/categoriesActions';

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
    <div className={style.searchBar}
    >
      <input
        type="search"
        placeholder="Search by Name"
        onChange={handleChange}
        value={searchByName}
      />
      <button onClick={handleSearch}>🔎</button>
    </div>
  );
};

export default SearchBar;