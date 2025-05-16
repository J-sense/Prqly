import { useState } from "react";

const UserDetails = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-xl p-10 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 text-3xl hover:text-black"
        >
          &times;
        </button>

        {/* User Details Content */}
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-gray-800">
            All Containt write heare
          </h1>
        </div>
      </div>
    </div>
  );
};

const ModalComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal State

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setIsModalOpen(true)}
      >
        Open Modal
      </button>
      {isModalOpen && <UserDetails onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default ModalComponent;
