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

  const getInput = (event) => {
    console.log("event.target.value :>> ", event.target.value);
  };

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => setData(result.results));
  }, []);

  return (
    <>
      <NavBar getInput={getInput} />
      <div className="container">
        {data &&
          data.map((d) => {
            return (
              <SingleCard d={d} />

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
