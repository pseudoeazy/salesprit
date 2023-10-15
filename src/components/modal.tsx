import React, { useEffect, useState } from "react";

interface Props {
  isOpen: boolean;
  children: React.ReactNode;
  onClose: () => void;
}

const SimpleModal = ({ isOpen, onClose, children }: Props) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content flex  flex-col space-y-4">
        {children}
        <button
          type="button"
          onClick={onClose}
          className="modal__button  modal__close"
        >
          Close
        </button>
      </div>
    </div>
  );
};

function Modal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    setTimeout(() => {
      setIsModalOpen(true);
    }, 3000);
  }, []);

  return (
    <>
      {isModalOpen && (
        <div>
          <button onClick={openModal}>Open Modal</button>
          <SimpleModal isOpen={isModalOpen} onClose={closeModal}>
            <a
              href="https://eazy4sng.gumroad.com/l/ghitkq"
              target="_blank"
              className="modal__button modal__download"
            >
              <h2>Download Template</h2>
            </a>
          </SimpleModal>
        </div>
      )}
    </>
  );
}

export default Modal;
