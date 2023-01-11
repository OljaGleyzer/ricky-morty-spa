import './App.css';
import {useState, useEffect} from "react";
import './Cards';
import NavBar from './NavBar';
import Cards from './Cards';




function App() {
  
  return (
 <>
 <NavBar />
  <h1>Hello Rick & Morty</h1>
<Cards />
  </>
  );
}

export default App;
