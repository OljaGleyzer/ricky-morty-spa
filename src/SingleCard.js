import React from "react";
// import MyModal from "./Modal";
import { useState } from "react";
import MyBootstrapModal from "./MyBootstrapModal";
import Button from "react-bootstrap/Button";

function SingleCard({ d }) {
  const { image, name } = d;
  //   const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div key={d.id} className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={image} alt="Avatar" />
          </div>
          <div className="flip-card-back">
            <h1>{name}</h1>

            {/* <button onClick={openUglyModal}>open Modal</button> */}
            <Button
              style={{
                backgroundColor: "blueviolet",
                color: "black",
                padding: "5px",
                margin: "5px",
              }}
              variant="primary"
              onClick={handleShow}
            >
              More Info
            </Button>
          </div>
        </div>
      </div>
      <div>
        {/* <MyModal d={d} isOpen={isOpen} setIsOpen={setIsOpen} /> */}
        <MyBootstrapModal show={show} handleClose={handleClose} d={d} />
      </div>
    </>
  );
}

export default SingleCard;
