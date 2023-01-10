import {useState, useEffect} from "react";
import React from 'react'
import Card from 'react-bootstrap/Card';
import './Cards.css'

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
                <div key={d.id} className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                        <img> src={d.image} alt="Avatar"</img>
                        </div>
                        <div className= "flip-cards-back">
                        <h1>{d.name}</h1> 
                        <button/>
                        </div>
                    </div>
             </div>)

                {/* //       <Card style={{ width: '13rem' }}>
                //   <Card.Img variant="top" src={d.image} />
                //   </Card> */}
            
             })}
          </div>
          );
};


export default Cards

