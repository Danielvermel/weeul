// Modal.jsx
import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40" onClick={onClose}>
            <div className="relative" onClick={(e) => e.stopPropagation()}>
                {React.cloneElement(children, { onClose })} {/* Pass the onClose function to children */}
              
            </div>
        </div>
    );
};

export default Modal;
