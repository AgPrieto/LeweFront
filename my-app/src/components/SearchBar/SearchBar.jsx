import { useState } from "react";
import { useDispatch } from "react-redux";
import style from "./searchBar.module.css";
import { getCategoryArticles } from '../../redux/actions/categoriesActions';

const SearchBar = () => {
  const dispatch = useDispatch();

  const [searchByName, setSearchByName] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value)
    setSearchByName(e.target.value);
    console.log(searchByName)
  };
  const handleSearch = () => {
    dispatch(getCategoryArticles(searchByName));
  };

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