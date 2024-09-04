import React from 'react';

const BookingPopup = ({ slot, counselor, onClose }) => {
  const handleConfirmBooking = () => {
    // Implement booking logic here
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Confirm Booking</h2>
        <p><strong>Counselor:</strong> {counselor.name}</p>
        <p><strong>Date:</strong> {slot.date}</p>
        <p><strong>Time:</strong> {slot.time}</p>
        <div className="mt-6 flex justify-between">
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirmBooking}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingPopup;
