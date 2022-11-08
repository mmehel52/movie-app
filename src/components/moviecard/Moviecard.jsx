import React from "react";
import { useNavigate } from "react-router-dom";
import MovieCard, { CardImg, Det, Pp, Overview } from "./MoviecardStyled";

const Moviecard = ({ movie }) => {
  const navigate = useNavigate();
  // console.log(movie);
  //
  const getVoteClass = (vote) => {
    if (vote > 8) {
      return "green";
    } else if (vote >= 6) {
      return "orange";
    } else {
      return "red";
    }
  };
  return (
    <MovieCard
      onClick={() => navigate("/moviedetail/" + movie.id, { state: movie })}
    >
      <CardImg src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`} />
      <Det>
        <h5>{movie.title}</h5>
        <Pp style={{ backgroundColor: `${getVoteClass(movie.vote_average)}` }}>
          {movie.vote_average}
        </Pp>
      </Det>
      <Overview>{movie.overview}</Overview>
    </MovieCard>
  );
};

export default Moviecard;
