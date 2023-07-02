import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


//components :
import Header from "./components/Header";
import Home from "./components/Home";

//css
import './App.css';
// import './css/Header.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home></Home>}/>
          <Route path="/movie/:id" element={<h1>movie details page</h1>}/>
          <Route path="/movies/:type" element={<h1>movie list page</h1>}/>   
          <Route path="/*" element={<h1>404 NOT EXIST</h1>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
