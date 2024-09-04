import React, { useState } from 'react';
import SlotTable from './SlotTable';
import BookingPopup from './BookingPopup';

const Card = ({ counselor }) => {
  const [showSlots, setShowSlots] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [showBookingPopup, setShowBookingPopup] = useState(false);

  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot);
    setShowBookingPopup(true);
  };

  return (
    <div className="p-4 border rounded-md shadow-md">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xl font-bold">{counselor.name}</h3>
          <p>{counselor.domain}</p>
          <p>{counselor.experience} years of experience</p>
        </div>
        <button
          onClick={() => setShowSlots(!showSlots)}
          className="bg-blue-500 text-white p-2 rounded-md"
        >
          See Free Slots
        </button>
      </div>
      {showSlots && <SlotTable slots={counselor.slots} onSelect={handleSlotSelect} />}
      {showBookingPopup && (
        <BookingPopup
          slot={selectedSlot}
          counselor={counselor}
          onClose={() => setShowBookingPopup(false)}
        />
      )}
    </div>
  );
};

export default Card;
