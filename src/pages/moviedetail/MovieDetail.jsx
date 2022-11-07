import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import DetailStyled, {
  CardImg,
  Bottom,
  Video,
  Detail,
  Prf,
} from "./MovieDetailStyled";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
const MovieDetail = () => {
  const [video, setVideo] = useState("");
  const [movdet, setMovdet] = useState("");
  const navigate = useNavigate();
  const { state: detail } = useLocation();
  const API_KEY = "a1438880f784e9a353cf7ea5917e3916";
  const url = `https://api.themoviedb.org/3/movie/${detail.id}/videos?api_key=${API_KEY}`;
  const getApi = () => {
    axios
      .get(url)
      .then((res) => {
        console.log(res.data.results[0]);
        setVideo(res.data.results[0]);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getApi();
  }, []);

  const url2 = `https://api.themoviedb.org/3/movie/${detail.id}?api_key=${API_KEY}`;
  const getApi2 = () => {
    axios
      .get(url2)
      .then((res) => {
        console.log(res.data);
        setMovdet(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getApi2();
  }, []);
  console.log(movdet);
  return (
    <DetailStyled>
      <h1>{movdet.title}</h1>
      <Video src={`https://www.youtube.com/embed/${video.key}`}></Video>
      <Bottom>
        <CardImg
          src={`https://image.tmdb.org/t/p/w1280${movdet.poster_path}`}
        />
        <Detail>
          <div>
            <h4>Overview</h4>
            <p>{movdet.overview}</p>
          </div>
          <div>
            <Prf>Release Date:{movdet.release_date}</Prf>
            <Prf>Rate:{movdet.vote_average}</Prf>
            <Prf>Total Vote:{movdet.vote_count}</Prf>
            {movdet?.genres?.map((item) => (
              <Prf>{item?.name}</Prf>
            ))}
            <Link to="/" onClick={() => navigate(-1)}>
              Go Back
            </Link>
          </div>
        </Detail>
      </Bottom>
    </DetailStyled>
  );
};

export default MovieDetail;
