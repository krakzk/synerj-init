// Modal.js
import React from "react";

const Modal = ({ isOpen, onClose, rowData }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white w-4/5 h-4/5 p-8 overflow-auto rounded-lg">
        <button
          onClick={onClose}
          className="bg-red-500 text-white px-4 py-2 rounded absolute top-4 right-4"
        >
          Close
        </button>
        <h2 className="text-2xl mb-4">Row Data</h2>
        <div className="grid grid-cols-2 gap-4">
          {Object.entries(rowData).map(([key, value]) => (
            <div key={key} className="p-2">
              <span className="font-bold text-gray-900">{key}: </span>
              <span className="text-gray-900">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
