import React, { useState } from 'react';

function MyModal({d}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <p>Modal content goes here</p>
            <button onClick={() => setIsOpen(false)}>Close Modal</button>
          </div>
        </div>
      )}
    </>
  );
}

export default MyModal;
