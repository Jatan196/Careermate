import React from 'react';

const VerticalNavBar = () => {
  return (
    <div className="h-screen w-48 bg-black text-white p-4 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-8">Menu</h2>
      <nav className="flex flex-col space-y-4">
        <a href="#home" className="text-yellow-500">Home</a>
        <a href="#profile" className="text-red-500">Profile</a>
        <a href="#appointments" className="text-pink-500">Appointments</a>
        <a href="#settings" className="text-yellow-500">Settings</a>
      </nav>
    </div>
  );
};

export default VerticalNavBar;
