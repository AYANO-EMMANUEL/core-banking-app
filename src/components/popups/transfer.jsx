import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import CoreTransfer from '../../pages/Transfer/CoreTransfer';
import { X } from 'lucide-react';

// function Transfer() {
    // const PopOver = ({ isOpen, onClose, children }) => {
    //     if (!isOpen) return null;
        
    //     return ReactDOM.createPortal(
    //         <div>
    //             <div
    //                 style={{
    //                 position: 'fixed',
    //                 top: 0,
    //                 left: 0,
    //                 width: '100%',
    //                 height: '100%',
    //                 backgroundColor: 'rgba(0, 0, 0, 0.5)',
    //                 display: 'flex',
    //                 alignItems: 'center',
    //                 justifyContent: 'center',
    //                 zIndex: 1000,
    //             }}
    //             onClick={onClose}
    //             >
    //                 <div
    //                     style={{
    //                     backgroundColor: '#fff',
    //                     padding: '20px',
    //                     borderRadius: '8px',
    //                     boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    //                     }}
    //                     onClick={(e) => e.stopPropagation()} 
    //                     // Prevent closing when clicking inside the popover
    //                 >
    //                     {children}
    //                 </div>
    //             </div>
    //             </div>,
    //         document.body
    //     )
    // };
// };
const Transfer = ( {open, onClose, children} ) => {
        // const [ open, setOpen ] = useState(false);
        // const onClose = (setOpen) => { setOpen(!open) };

        // const { modal, setmodal } = useState(false);

        // const toggleTransfer = () => {
        //     setModal(!modal);
        // }

        // if(modal) {
        //     document.body.classList.add('')
        // } else {
        //     document.body.classList.remove('')
        // }

        return (
            <div onClick={onClose} className={`fixed inset-0 flex justify-center cursor-pointer items-center transition-colors ${ open ? 'visible bg-black/20' : 'invisible hidden' }`}>
                <div 
                    className={`bg-white relative rounded-xl cursor-default transition-all 
                        ${ open ? '' : 'scale-12 opacity-0' }
                        `}
                    onClick={ (e) => e.stopPropagation() }
                >
                     <button className='absolute top-2 right-2 p-1 text-gray-500 hover:text-gray-900' onClick={onClose}> <X /> </button>
                    { children }
                </div>
            </div>
        )
    }

export default Transfer;