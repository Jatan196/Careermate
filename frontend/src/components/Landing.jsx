import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-pink-500">
      <Link to="/counsellor" className="text-3xl text-white">
        Go to Counselor List
      </Link>
    </div>
  );
};

export default Landing;
