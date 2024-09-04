import React from 'react';

const SlotTable = ({ slots, onSelect }) => {
  return (
    <table className="w-full mt-4">
      <thead>
        <tr>
          <th className="text-left">Date</th>
          <th className="text-left">Time</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {slots.map((slot, index) => (
          <tr key={index}>
            <td>{slot.date}</td>
            <td>{slot.time}</td>
            <td>
              <button
                onClick={() => onSelect(slot)}
                className="bg-green-500 text-white p-1 rounded-md"
              >
                Book Slot
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SlotTable;
    