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

// const Modal = ({ isOpen, onClose, children }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="modal-backdrop flex align-middle justify-center z-[1000] bg-slate-400 fixed top-0 left-0 w-full " onClick={onClose}>
//       <div 
//         className="modal-content bg-white relative w-[90%] max-w-[600px] p-6 rounded-lg shadow-lg animate-slideIn"
//         onClick={(e) => e.stopPropagation()}
//         role="dialog"
//         aria-modal="true"
//         style={{ animation: 'slideIn 0.3s ease-out' }}
//       >
//         {children}
//         <button 
//           className="modal-close absolute top-[1rem] right-[1rem] text-gray-500 hover:text-gray-700 size-[1.5rem] cursor-pointer border-none"
//           onClick={onClose}
//           aria-label="Close modal"
//         >
//           &times;
//         </button>
//       </div>
//     </div>
//   );
// };

export default Modal;