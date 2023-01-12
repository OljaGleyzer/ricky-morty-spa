import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function MyBootstrapModal({ show, handleClose, d }) {
  console.log("d", d);
  const styleModalBody = {
    backgroundColor: "pink",
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{ backgroudColor: "grey" }}>
          <Modal.Title>{d.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={styleModalBody}>
          <img src={d.image} alt="Avatar" className="img-fluid" />
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
