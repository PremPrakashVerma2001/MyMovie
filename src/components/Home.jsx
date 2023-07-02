import React from 'react';
import { useEffect , useState} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { Link } from 'react-router-dom';


//css
import '../css/Home.css';
const Home = () => {
//pMovies : popular movies .
     const [pMovies, setMovies] = useState([]);

    useEffect(() => {
    //   fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
    //   .then(res=> res.json())
    //   .then(data=> console.log(data.results))
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
      .then(res=> res.json())
      .then(data=> setMovies(data.results))

    },[])
    
  return (
    <>
    <div>
        <Carousel
            showThumbs = {false}
            autoPlay = {true}
            transitionTime={2}
            infiniteLoop = {true}
            showStatus = {false}
        >
            {
                pMovies.map(movie => (
                    <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`} >
                        <div className="posterImage">
                            <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`}
                                    alt= "movie_img" />
                        </div>
                        <div className="posterImage__overlay">
                            <div className="posterImage__title">{movie ? movie.original_title: ""}</div>
                            <div className="posterImage__runtime">
                                {movie ? movie.release_date : ""}
                                <span className="posterImage__rating">
                                    {movie ? movie.vote_average :""}
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                        </div>
                    </Link>
                ))
            }
        </Carousel>
    </div>
    </>
  )
}

export default Home