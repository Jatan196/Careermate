import React, { useState } from 'react';
import './Student_Details_Submission.css'; // Assuming you already have the CSS
import { useNavigate } from 'react-router';
function Student_Details_Submission() {
  const [formData, setFormData] = useState({
    userName: '',
    namee: '',
    phone: '',
    email: '',
    password: '',
    hobbies: '',
    edu_achieve: '',
    extra_achieve: ''
  });
  
  const navigate= useNavigate();
  // Handle change in input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    // Combine domains into a single string (optional)
    // const combinedDomains = domains.filter(Boolean).join(', ');

    const submissionData = { ...formData};

    console.log(submissionData);

    // try {
    //   const response = await fetch('http://localhost:5000/api/counsellor/register', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(submissionData),
    //   }
    // );

    //   const data = await response.json();
    //   if (response.ok) {
    //     alert(data.message); // Success message
    //     // Reset form or redirect user
    //   } else {
    //     alert(data.message || 'Error submitting form');
    //   }
    // } catch (error) {
    //   console.error('Error:', error);
    //   alert('There was a problem with the submission.');
    // }
  };

  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="logo">
          <h1>CareerMate</h1>
        </div>
        <nav className="navbar">
          <a href="/">Home</a>
        </nav>
      </header>

      {/* Form */}
      <div className="form-container">
        <h2>Enter your details</h2>
        <form className="form" onSubmit={handleSubmit}>
          {/* Removed ID input field */}
          <div className="form-group">
            <label>Name: </label>
            <input
              type="text"
              name="namee"
              placeholder="Enter your name"
              value={formData.namee}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Phone No.: </label>
            <input
              type="text"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Email ID: </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Password: </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Hobbies: </label>
            <input
              type="text"
              name="hobbies"
              placeholder="Enter your hobbies"
              value={formData.hobbies}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Educational Achievements</label>
            <input
              type="text"
              name="edu_achieve"
              placeholder="Enter your qualification"
              value={formData.edu_achieve}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Extra Achievements: </label>
            <input
              type="text"
              name="extra_achieve"
              placeholder="Enter your achievements"
              value={formData.extra_achieve}
              onChange={handleInputChange}
            />
          </div>

          <button onClick={()=>navigate("/StudentLanding")} type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Student_Details_Submission;
