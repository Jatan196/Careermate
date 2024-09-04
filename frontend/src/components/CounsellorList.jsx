import React, { useState } from 'react';
import Card from './Card';
import Filter from './Filter';
import VerticalNavBar from './verticalNavBar';

const CounsellorList = () => {
  const [counselors, setCounselors] = useState([
    {
      id: 1,
      name: 'Mr. Jagdish Rajput',
      domain: 'Engineering',
      experience: 5,
      slots: [
        { date: '2024-09-10', time: '10:00 AM' },
        { date: '2024-09-11', time: '2:00 PM' }
      ]
    },

  ]);
  
  const [filters, setFilters] = useState({ domain: '', experience: '' });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    // Filter logic based on the filters
  };

  return (
    <div className="flex">
      <VerticalNavBar />
      <div className="p-4 w-full">
        <Filter filters={filters} onChange={handleFilterChange} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {counselors.map((counselor) => (
            <Card key={counselor.id} counselor={counselor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CounsellorList;
