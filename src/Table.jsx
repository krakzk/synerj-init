// Table.js
import React, { useState } from "react";
import Modal from "./Modal";

const Table = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleRowClick = (row) => {
    setSelectedRow(row);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="p-8 w-screen h-screen">
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr>
            {Object.keys(data[0]).map((key) => (
              <th
                key={key}
                className="py-2 px-4 border-b bg-gray-200 text-gray-600 text-left text-sm"
              >
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className="cursor-pointer hover:bg-gray-100 text-gray-900"
              onClick={() => handleRowClick(row)}
            >
              {Object.values(row).map((value, i) => (
                <td key={i} className="py-2 px-4 border-b text-sm">
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <Modal isOpen={isModalOpen} onClose={closeModal} rowData={selectedRow} />
    </div>
  );
};

export default Table;
