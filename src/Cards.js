import {useState, useEffect} from "react";
import React from 'react'

function Cards() {
    
//fetchiung data
const [data, setData] = useState([]);
const url = "https://rickandmortyapi.com/api/character"

  useEffect(() =>{
  fetch(url)
    .then(response => response.json())
    .then(result => setData(result.results));
    }, []);

    return(
        <div>
          {data && data.map((d) => {
    return <p key={d.id}>{d.name}</p>})}

    {/* <div>
    return <img key={d.id} src={d.image} alt="jhk" />; */}
          
          </div>
          );
};

export default Cards

