import React from 'react'

function SingleCard({d}) {
    const{image, name}=d
    
  return (
    <div key={d.id} className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                    <img src={image} alt="Avatar" />
                                    </div>
                                    <div className="flip-card-back">
                                    <h1>{name}</h1> 
                                    <button> More Info</button>
                                    </div>
                                </div>
                                </div>
  )
}

export default SingleCard