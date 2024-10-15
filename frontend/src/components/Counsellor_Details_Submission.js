import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Counsellor_Details_Submission.css'; // Assuming you already have the CSS

function Counsellor_Details_Submission() {
  const [domains, setDomains] = useState(['']); // Array to store domain inputs
  
  const navigate= useNavigate();
  // Handle change in domain input fields

  const handleDomainChange = (index, event) => {
    const newDomains = [...domains];
    newDomains[index] = event.target.value;
    setDomains(newDomains);
  };

  // Add a new input field for domain
  const addDomainField = () => {
    setDomains([...domains, '']);
  };

  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="logo">
          <h1>CareerMate</h1>
        </div>
        <nav className="navbar">
          <a href="/Home">Home</a>
        </nav>
      </header>

      {/* Form */}
      <div className="form-container">
        <h2>Enter your details</h2>
        <form className="form">
          {/* Other form fields */}
          <div className="form-group">
            <label>Name :- </label>
            <input type="text" placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label>Phone No. :- </label>
            <input type="text" placeholder="Enter your phone number" />
          </div>
          <div className="form-group">
            <label>Email ID :- </label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label>Password :- </label>
            <input type="password" placeholder="Enter your password" />
          </div>
          <div className="form-group">
            <label>Highest Qualification :- </label>
            <input type="text" placeholder="Enter your qualification" />
          </div>

          {/* Multi-domain input field */}
          <div className="form-group">
            <label>Domains :-</label>
            {domains.map((domain, index) => (
              <div key={index} className="domain-input-container">
                <input
                  type="text"
                  placeholder="Enter domain"
                  value={domain}
                  onChange={(e) => handleDomainChange(index, e)}
                />
                {index === domains.length - 1 && (
                  <button type="button" onClick={addDomainField} className="add-btn">
                    +
                  </button>
                )}
              </div>
            ))}
          </div>

          <button onClick={()=>navigate("/counslanding")} type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Counsellor_Details_Submission;
