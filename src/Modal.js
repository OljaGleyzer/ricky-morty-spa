import React, { useState } from "react";
// import "./Modal.css";
import Modal from "react-bootstrap/Modal";

function MyModal({ d, isOpen, setIsOpen }) {
  console.log("d", d);
  console.log("isOpen :>> ", isOpen);

  return (
    <>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>{d.name}</h2>
            <img src={d.image} alt="Avatar" />
            <p>Species: {d.species}</p>
            <p>Status: {d.status}</p>

            <button onClick={() => setIsOpen(false)}>Close Modal</button>
          </div>
        </div>
      )}
    </>
  );
}

export default MyModal;
