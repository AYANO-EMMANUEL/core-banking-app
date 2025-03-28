// src/components/Modal.js
import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
// import { useModal } from '../contexts/ModalContext';

const Modal = ({ children }) => {
    const navigate = useNavigate();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={() => navigate(-1)}>
      <div className="relative bg-white rounded-lg shadow-lg p-6 max-w-[600px] w-[90%] sm:w-max h-max" onClick={(e) => e.stopPropagation()}>
        <button className="absolute top-3 right-4 text-gray-500 hover:text-gray-700" onClick={() => navigate(-1)}>
          <AiOutlineClose />
        </button>
        <div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;