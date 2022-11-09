import React, { useContext } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Moviecard from "../../components/moviecard/Moviecard";
import MainStyled, { SearchBar, InputBar, Search } from "./Mainstyled";
import { AuthContext } from "../../context/AuthContext";
import { toastWarnNotify } from "../../helper/ToastNotify";

const Main = () => {
  const [movie, setMovie] = useState("");
  const [searchBar, setSearchBar] = useState("");
  const { currentUser } = useContext(AuthContext);
  const API_KEY =
    // process.env.REACT_APP_TMDB_KEY;
    "a1438880f784e9a353cf7ea5917e3916";
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
  const urlSearch = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchBar}`;
  useEffect(() => {
    getApi(url);
  }, []);

  const getApi = (API) => {
    axios
      .get(API)
      .then((res) => {
        // console.log(res.data.results);
        setMovie(res.data.results);
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (searchBar && currentUser) {
      getApi(urlSearch);
      console.log(searchBar);
      setSearchBar("");
    } else if (!currentUser) {
      toastWarnNotify("please log in to search movie");
    } else {
      toastWarnNotify("please enter a task");
    }
  };

  return (
    <div>
      <SearchBar>
        <InputBar
          type="search"
          onChange={(e) => {
            setSearchBar(e.target.value);
          }}
        />
        <Search onClick={handleChange}>search</Search>
      </SearchBar>
      <MainStyled>
        {movie?.length > 0 &&
          movie.map((item, idx) => <Moviecard movie={item} key={idx} />)}
      </MainStyled>
    </div>
  );
};

export default Main;
