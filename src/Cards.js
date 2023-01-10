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

            return (
                <div key={d.id}>
                    <p>{d.name}</p>
                    <img src={d.image} alt="image character" />
                </div>
            )
    
    })}

    {/* <div>
    return ; */}
          
          </div>
          );
};

export default Cards

