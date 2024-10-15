import React, { useState } from 'react';
import './CounsLanding.css';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function CounsLanding() {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to handle the modal open/close
  const [startTime, setStartTime] = useState('00:00:00');
  const [endTime, setEndTime] = useState('00:00:00');
  const [errorMessage, setErrorMessage] = useState(''); // For displaying error messages
  const location = useLocation();

  // Open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setErrorMessage(''); // Clear error message when closing the modal
  };

  // Helper function to check if start time is before end time and the difference is at least 30 minutes
  const isValidTimeRange = (start, end) => {
    const [startHours, startMinutes] = start.split(':').map(Number);
    const [endHours, endMinutes] = end.split(':').map(Number);

    // Convert start and end times to total minutes
    const startTotalMinutes = startHours * 60 + startMinutes;
    const endTotalMinutes = endHours * 60 + endMinutes;

    // Check if start time is before end time and the difference is at least 30 minutes
    return endTotalMinutes > startTotalMinutes && (endTotalMinutes - startTotalMinutes) >= 30;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate time range
    if (!isValidTimeRange(startTime, endTime)) {
      setErrorMessage('End time must be at least 30 minutes after start time.');
      return;
    }

    // Process the submitted start and end times (e.g., send to backend)
    console.log("Start Time:", startTime);
    console.log("End Time:", endTime);

    // Clear error message
    setErrorMessage('');

    const fetchSlots = async () => {
      try {
        const response = await axios.post(`http://localhost:5001/api/v1/counsellor/addNewSlot`, {
          counsellor_id: location.state,
          start_time: startTime,
          end_time: endTime
        });
        console.log(response);
      } catch (error) {
        console.error('Error adding slots:', error);
      }
    };
    fetchSlots();
    
    // Close the modal after submitting
    closeModal();
  };

  return (
    <div className="Nav-bar">
      <header className="header">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">CareerMate</h1>
          <nav>
            <ul className="Nav_bar">
              <li><a href="/Home" className="hover:underline">HOME</a></li>
              <li>
                <button className="hover:underline" onClick={openModal}>ADD SLOT</button>
              </li>
              <li><a href="#" className="hover:underline">REQUEST</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="hero_section">
          <h1>Give guidance to others.</h1>
          <p className="cta-text">Guide the right path to students with your experience...</p>
        </section>

        <section className="about_section">
          <div className="about_box">
            <h2>ABOUT US</h2>
            <p>
              We at CareerMate aim at providing the best guidance and motivation to help students shape their future.
              We believe that choosing the right career option is necessary for building a brighter future and fostering
              the skills of students, requiring proper guidance and planning...
            </p>
          </div>
        </section>

        <section className="why">
          <div className="why-box">
            <h2>WHY GUIDE THE RIGHT CAREER PATH?</h2>
            <p>Guiding the right career path is essential for personal fulfillment and long-term success...</p>
          </div>
        </section>

        <section className="Session">
          <h2 className="expart">Expert Career Guidance</h2>
          <p className="expart-more">Unlock Your Potential with Personalized Career Counselling</p>
        </section>
      </main>

      <footer className="footer-section">
        <div className="footer-box">
          <p>CareerMate Counselling</p>
        </div>
      </footer>

      {/* Add Slot Modal */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Add Slot</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Start Time:</label>
                <input
                  type="time"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>End Time:</label>
                <input
                  type="time"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                  required
                />
              </div>

              {/* Display error message if start time is greater than end time or time diff is less than 30 minutes */}
              {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

              <button type="submit">Submit</button>
              <button type="button" onClick={closeModal}>Close</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default CounsLanding;
