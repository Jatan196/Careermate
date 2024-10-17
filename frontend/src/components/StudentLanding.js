import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // <-- Import useNavigate
import './StudentLanding.css';
import { useLocation } from 'react-router-dom';

const StudentLanding = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();  // <-- Initialize navigate

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  const location = useLocation();

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Function to start the quiz and navigate to the quiz page
  const startQuiz = () => {
    setIsModalOpen(false);  // Close the modal
    navigate('/');  // Navigate to the quiz page
  };

  return (
    <div className="student-landing">
      {/* Header Section */}
      <header className="header">
        <div className="logo">CareerMate</div>
        <nav className="nav">
          <ul>
            <li><a href="/Home">Home</a></li>
            <li><button onClick={openModal} className="quiz-button">Quiz</button></li>
            <li><a href="/report">Report</a></li>
            <li><a href="/counsellor">Counselling</a></li>
            <li><a href="/resources">Resource</a></li>
          </ul>
        </nav>
        <div className="user-icon">CM</div> {/* Placeholder for user profile icon */}
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-text">
          <h1>Explore your career with a quiz or with experts.</h1>
          <p className="cta-text">Choose the right path without any dilemma...</p>
        </div>
        <div className="hero-image">
          <img src="/path-to-your-image.jpg" alt="Career Exploration" />
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-section">
        <h2>ABOUT US</h2>
        <p>
          We at CareerMate aim at providing the best guidance and motivation to the future aspirants of our nation. 
          We believe that choosing a right career option is as necessary as building a brighter future...
        </p>
      </section>

      {/* Why Choose the Right Path Section */}
      <section className="why-section">
        <h2>WHY TO CHOOSE THE RIGHT PATH?</h2>
        <p>
          Choosing the right career path is essential for personal fulfillment and long-term success. 
          When you pursue a career that aligns with your passion and strengths, you’re more likely to find job satisfaction and excel in your role.
        </p>
      </section>

      {/* Career Illustrations Section */}
      <section className="careers-section">
        <div className="career-icons">
          <img src="/path-to-icon1.jpg" alt="Career 1" />
          <img src="/path-to-icon2.jpg" alt="Career 2" />
          <img src="/path-to-icon3.jpg" alt="Career 3" />
          <img src="/path-to-icon4.jpg" alt="Career 4" />
          <img src="/path-to-icon5.jpg" alt="Career 5" />
        </div>
      </section>

      {/* Popup Modal for Quiz */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Start Your Quiz</h2>
            <p>Are you ready to begin your career quiz?</p>
            <button onClick={closeModal} className="close-modal-btn">Cancel</button>
            <button onClick={startQuiz} className="start-quiz-btn">Start Quiz</button> {/* Call startQuiz */}
          </div>
        </div>
      )}

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2024 Developed and Maintained by careermate.org</p>
      </footer>
    </div>
  );
};

export default StudentLanding;
