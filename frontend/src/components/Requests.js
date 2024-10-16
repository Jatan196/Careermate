import React, { useEffect, useState } from 'react';
import './Requests.css';
import { useLocation } from 'react-router';


const Requests = () => {
    const location = useLocation();
    const [requests] = useState([
        { name: "Jay Patel", email: "abc@gmail.com", slot: "08:00:00" },
        { name: "John Doe", email: "johndoe@example.com", slot: "09:00:00" },
        { name: "Jane Smith", email: "janesmith@example.com", slot: "10:00:00" },
        
    ]);

    console.log('Requests:', requests);

    return (
        <div className="Request-container">
            {requests.map((request, index) => (
                <div key={index} className="request-list">
                    <h2 className="Request-heading">Counselling Request {index + 1}</h2>
                    <p><strong>Student Name:</strong> {request.name}</p>
                    <p><strong>Email:</strong> {request.email}</p>
                    <p><strong>Slot:</strong> {request.slot}</p>
                    <div className="select-btn">
                        <button className="cancel-btn">
                            Denied
                        </button>
                        <button className="conform-btn" >
                            Accept
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Requests;