import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function MyBootstrapModal({ show, handleClose, d }) {
  console.log("d", d);
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{d.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={d.image} alt="Avatar" />
          <p>Status: {d.status}</p>
          <p>Species: {d.species}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default MyBootstrapModal;
