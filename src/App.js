import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

//css
import './App.css';


//components :
import Header from "./components/Header";
import Home from "./components/Home";
import MovieList from "./components/MovieList";
import Movie from "./components/Movie";



// import './css/Header.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home></Home>}/>
          <Route path="/movie/:id" element={<Movie />}/>
          <Route path="/movies/:type" element={<MovieList />}/>   
          <Route path="/*" element={<h1>404 NOT EXIST</h1>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
