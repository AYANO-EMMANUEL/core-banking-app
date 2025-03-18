import React from 'react'
import ReactDOM from 'react-dom';

const TestModal = ({ open, children, onClose }) => {
    if (!open) return null;

    return ReactDOM.createPortal(
        <div className='fixed inset-0 bg-slate-300 bg-opacity-50' onClick={() => onClose()}>
            {/* <div className='flex justify-center items-center'>
            </div> */}
            <div className=" flex items-center justify-center h-full w-full " >
                <div className=" bg-white p-4 h-max w-max rounded shadow-lg" onClick={(e) => e.stopPropagation()}>
                    {children}
                </div>
            </div>
        </div>,
        document.getElementById('portal')
    );
};

export default TestModal;[]