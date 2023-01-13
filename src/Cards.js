import { useState, useEffect } from "react";
import React from "react";
import "./Cards.css";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import SingleCard from "./SingleCard";
import NavBar from "./NavBar";
import { Button } from "react-bootstrap";

function Cards() {
  //fetchiung data
  const [data, setData] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const url = "https://rickandmortyapi.com/api/character";
  //pagination
  // const urlPagination: "https://rickandmortyapi.com/api/character/?page=${page}";
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [error, setError] = useState(null);

  //fetch data traditional
  // useEffect(() => {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((result) => setData(result.results));
  //     }, []);

  // fetch data async with pagination
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/?page=${page}`
        );
        const result = await response.json();
        setData(result.results);
        setHasNextPage(data.info.next !== null); // can not reach data.info.next ?
        console.log("data.info", data.info);
      } catch (error) {
        console.log("catch :>> ", error);
        setError(error);
      }
    };
    fetchData();
  }, [page]);

  // example fetching data async

  // useEffect(() => {
  //   const fetchTryCatch = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://rickandmortyapi.com/api/character"
  //       );
  //       const result = await response.json();
  //       setFetchResult(result.results);
  //     } catch (error) {
  //       console.log("Catch: ", error);
  //       setError(error);
  //     }
  //   };

  //   fetchTryCatch();
  // }, []);

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
      <p style={{ backgroundColor: "red" }}>
        {page > 1 && (
          <Button onClick={() => setPage(page - 1)}>Previous</Button>
        )}
        {/* seems to cause Problems  {hasNextPage && ( */}
        <Button onClick={() => setPage(page + 1)}>Next Page</Button>
        {/* )} */}
      </p>
    </>
  );
}

export default Cards;
