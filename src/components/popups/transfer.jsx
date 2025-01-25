import React from 'react'
import ReactDOM from 'react-dom'
import CoreTransfer from '../../pages/Transfer/CoreTransfer';

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
    const Transfer = () => {

        const { modal, setModal } = useState(true);

        const toggleTransfer = () => {
            setModal(!modal);
        }

        // if(modal) {
        //     document.body.classList.add('')
        // } else {
        //     document.body.classList.remove('')
        // }

        return (
            <div className={modal ? 'block' : 'hidden'}>
                <div 
                    className='overlay' 
                    style={
                        {
                            position : "fixed",
                            top : "0",
                            bottom : "0", 
                            left : "0",
                            right : "0",
                            height : "100vh",
                            width : "100vw",
                            backgroundColor : "grey"
                        }
                    }
                    onClick={toggleTransfer}
                >
                    <CoreTransfer />
                </div>        
                <div className="">
                </div>
            </div>
        )
    }

export default Transfer;