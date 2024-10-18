import React, { useEffect, useState } from 'react';
import './Requests.css';
import { useLocation } from 'react-router';
import axios from 'axios';


const Requests = () => {
    const location = useLocation();
    const [requests, setRequests] = useState([
        // { name: "Jay Patel", email: "abc@gmail.com", slot: "08:00:00" },
        // { name: "John Doe", email: "johndoe@example.com", slot: "09:00:00" },
        // { name: "Jane Smith", email: "janesmith@example.com", slot: "10:00:00" },

    ]);

    const fetchRequests = async () => {
        try {
            console.log(localStorage.getItem('counsId'));
            const response = await axios(`http://localhost:5001/api/v1/counsellor/viewRequests`, {
                params: {
                    cId: localStorage.getItem('counsId'),
                }
            });
            console.log(response);
            
            //   const result = await response.data.slots.rows;
            //   setSlots(result); // Assuming your query result is in rows
        } catch (error) {
            console.error('Error fetching slots:', error);
        }
    };
    fetchRequests();

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