// App.js
import React, { useState } from 'react';
import Modal from './Modal';

function ModalApp() {
  const [isModalOpen, setIsModalOpen] = useState(false);

return (
    <div className="ModalApp">
        <button 
            onClick={() => setIsModalOpen(true)}
            className="open-modal-btn px-4 py-2 text-lg bg-green-500 text-white border-none rounded cursor-pointer m-8"
            style={{ backgroundColor: '#45a049' }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#45a049'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#4CAF50'}
        >
            Open Modal
        </button>

        <Modal 
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
        >
            <h2>Modal Title</h2>
            <p>Modal content goes here...</p>
        </Modal>
    </div>
);
}

export default ModalApp;