import React from "react";
import { Link } from "react-router-dom"; //use as anchor tag


//css
import "../css/Header.css";



const Header = () => {
  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/">
          <img
            className="header__icon"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
            alt="img"
          />
        </Link>
        <Link to="/Mymovie/movies/popular" style={{textDecoration : "none"}}><span>Popular</span></Link>
        <Link to="/Mymovie/movies/top_rated" style={{textDecoration : "none"}} ><span>Top Rated</span></Link>
        <Link to="/Mymovie/movies/upcoming" style={{textDecoration : "none"}} ><span>Upcoming</span></Link>
      </div>
    </div>
  );
};

export default Header;
