import { useState, useEffect } from "react";
import React from "react";
import "./Cards.css";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import SingleCard from "./SingleCard";
import NavBar from "./NavBar";

function Cards() {
  //fetchiung data
  const [data, setData] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const url = "https://rickandmortyapi.com/api/character";

  //Search Bar
  // function SearchBar() {
  //     const [serachTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => setData(result.results));
    //filter Search

    //     const searchdata = data.filter(d) => d.name.toLowerCase().includes(searchTerm.toLowerCase())
    //     );
    //     setFilteredData(searachdata);
    // });
  }, []); // }, [searchTerm, data]);

  //Eventhandler
  const getInput = (event) => {
    const searchTerm = event.target.value;
    // setSearchTerm(event.target.value);
    // console.log("event.target.value :>> ", event.target.value);
    const searchdata = data.filter((d) =>
      d.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResult(searchdata);
  };

  return (
    <>
      <NavBar getInput={getInput} />

      <div className="container">
        {searchResult == 0
          ? data.map((d) => {
              return <SingleCard d={d} />;
            })
          : searchResult.map((d) => {
              return <SingleCard d={d} />;
            })}

        {/* {searchResult !== 0
          ? searchResult.map((d) => {
              return (
                <SingleCard d={d} />
              );
            })
          : data.map((d) => {
              return <SingleCard d={d} />;
            })} */}
      </div>
    </>
  );
}

export default Cards;
