import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Moviecard from "../../components/moviecard/Moviecard";
import MainStyled, { SearchBar, InputBar, Search } from "./Mainstyled";
const Main = () => {
  const [movie, setMovie] = useState("");
  const [searchBar, setSearchBar] = useState("");
  const API_KEY = "a1438880f784e9a353cf7ea5917e3916";
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
  const urlSearch = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchBar}`;
  const getApi = () => {
    axios
      .get(url)
      .then((res) => {
        // console.log(res.data.results);
        setMovie(res.data.results);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getApi();
  }, []);
  const getSearch = () => {
    axios
      .get(urlSearch)
      .then((res) => {
        console.log(res);
        setMovie(res.data.results);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getApi();
  }, []);

  return (
    <div>
      <SearchBar>
        <InputBar
          type="text"
          onChange={(e) => {
            setSearchBar(e.target.value);
          }}
        />
        <Search onClick={() => getSearch()}>search</Search>
      </SearchBar>
      <MainStyled>
        {movie?.length > 0 &&
          movie.map((item, idx) => <Moviecard movie={item} key={idx} />)}
      </MainStyled>
    </div>
  );
};

export default Main;
