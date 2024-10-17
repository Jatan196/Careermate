import React from 'react';
import './verticalNavBar.css'

const VerticalNavBar = () => {
  return (
    <div className='vNav'>
<<<<<<< HEAD
      <div className="h-screen w-48 bg-black text-white p-4 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-8">Menu</h2>
        <nav className="flex flex-col space-y-4">
          <a href="#home" className="text-yellow-500">Home</a>
          <a href="#profile" className="text-red-500">Profile</a>
          {/* <a href="#appointments" className="text-pink-500">Appointments</a>
=======
    <div className="h-screen w-48 bg-black text-white p-4 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-8">Menu</h2>
      <nav className="flex flex-col space-y-4">
        <a href="/Home" className="text-yellow-500">Home</a>
        <a href="#profile" className="text-red-500">Profile</a>
        {/* <a href="#appointments" className="text-pink-500">Appointments</a>
>>>>>>> a62d638dff85b5e3050e7116641e7629f48c5338
        <a href="#settings" className="text-yellow-500">Settings</a> */}

        </nav>
        <div className='p-5 top-0'>
          <h1 className="stitle p-5">CareerMate</h1>
          <h3 className="stag p-5">Enlightening Futures, Nurturing Success</h3>
          <br /><br /><br />
        </div>
      </div>
    </div>
  );
};

export default VerticalNavBar;
