import { useState, useEffect } from "react";
import React from "react";
import "./Cards.css";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SingleCard from "./SingleCard";
import NavBar from "./NavBar";

function Cards() {
  //fetchiung data
  const [data, setData] = useState([]);
  const url = "https://rickandmortyapi.com/api/character";

  //Search Bar

  const getInput = (event) => {
    console.log("event.target.value :>> ", event.target.value);
  };
  // function SearchBar() {
  //     const [getInput, setGetInput] = useState("");
  //     // const [data, setData] = useState([]);
  //     const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => setData(result.results));
    //filter Search
    //     const searchdata = data.filter(d => d.name.toLowerCase().includes(getInput.toLowerCase())
    //     );
    //     setFilteredData(searachdata);
    // });
  }, []); // }, [getInput]);

  //Eventhandler
  //      const handleSearch = (event) => {
  //     setGetInput(event.target.value);
  //   }

  return (
    <>
      <NavBar getInput={getInput} />
      {/* {filteredData.map((d) => (
              <div key={d.id}>
                  <p>{d}</p>
             </div>
          ))}
           */}
      <div className="container">
        {data &&
          data.map((d) => {
            return (
              <SingleCard d={d} />

              // Single Card without beeing an own component
              // <div key={d.id} className="flip-card">
              // <div className="flip-card-inner">
              //     <div className="flip-card-front">
              //     <img src={d.image} alt="Avatar" />
              //     </div>
              //     <div className="flip-card-back">
              //     <p>{d.name}</p>
              //     </div>
              // </div>
              // </div>
            );
          })}
      </div>
    </>
  );
}

export default Cards;
