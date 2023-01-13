import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";

function MyBootstrapModal({ show, handleClose, d }) {
  console.log("d", d);
  const styleModalBody = {
    backgroundColor: "pink",
  };

  const styleModalImage = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "5px",
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{d.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={styleModalImage}>
            <img src={d.image} alt="Avatar" className="img-fluid" />
          </div>
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
