import React from 'react'
import MyModal from './Modal'
import { useState } from 'react';

function SingleCard({d}) {
    const{image, name}=d
    // const [isOpen, setIsOpen] = useState(false);
    
  return (
    <div key={d.id} className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                    <img src={image} alt="Avatar" />
                                    </div>
                                    <div className="flip-card-back">
                                    <h1>{name}</h1> 
{/* <button onClick={() => setIsOpen (true)}>Open Button</button>
<MyModal d={d} isOpen={isOpen} closeModal={()=> setIsOpen(false)} /> */}
                                    
                                    </div>
                                </div>
                                </div>
  )
  
}

export default SingleCard