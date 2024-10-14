//import { User } from "../models/userModel.js"
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
// import validator from 'validator';

import pg from "pg"; 
//import config from '../config/database.js'; // Your database configuration
import pool from "../config/localdb.js"; 

// const { Pool } = pg;
// const pool = new Pool(config);
export const getAllCounsInfo = async (req, res) => {
    try {
        const counsellors = await pool.query('SELECT id,name,email,rating FROM Counsellor');
        res.json({
            message: "Got all counsellors",
            counsellors
        });
    } 
    catch (err) {
        console.error('D', err.stack);
        res.status(500).json({ error: 'Database connection failed' });
    }
};
export const getAllSlots = async (req,res) => {
    const { id } = req.query;
    console.log(id);

    console.log("hi");
    try {
        const slots = await pool.query(`SELECT * FROM Timeslot where counsellor_id = ${id}`);
        res.json({
            slots
        });
    }
    catch (err) {
        console.error('D', err.stack);
        res.status(500).json({ error: 'Database connection failed' });
    }
}
export const getInfoById = async (req,res) => {
    const { id } = req.body;

    try {
        const info = await pool.query(`SELECT * FROM Counsellor where id=${id}`);
        res.json({
            info
        });
    }
    catch (err) {
        console.error('D', err.stack);
        res.status(500).json({ error: 'Database connection failed' });
    }
}

// ------------------------------------------------------------------------------------------
export const addNewSlot = async (req, res) => {
    const { counsellor_id, start_time, end_time } = req.body;
//const sid=500;
    try {
        // Insert new timeslot into the database and automatically get the generated slot_id
        const result = await pool.query(
            `INSERT INTO Timeslot (counsellor_id, start_time, end_time)
            VALUES ($1, $2, $3)
            RETURNING slot_id`,  // This returns the generated slot_id
           [counsellor_id, start_time, end_time]
        );

        //const newSlotId = result.rows[0].slot_id;  // Access the newly generated slot_id
        res.status(201).json({ message: "Timeslot added successfully"});// ,"newSlotId":newSlotId});
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to add new timeslot" });
    }
};

export const changeReqStatus = async (req,res) => {
    const { stud_id,couns_id,status } = req.body;

    // 1 -> accepted
    // 0 -> denied

    const statusReq="Accepted";

    if(status==0) statusReq="Denied";
    try {
      //  const ack= await pool.query(`Update Request set status_of_request=${statusReq}   where student_id=${stud_id} and counsellor_id=${couns_id}`);
        const ack= await pool.query( `UPDATE Request 
             SET status_of_request = $1 
             WHERE student_id = $2 AND counsellor_id = $3`,
            [statusReq, stud_id, couns_id]);
        res.json({
            ack
        });
    }

    catch (err) {
        console.error('D', err.stack);
        res.status(500).json({ error: 'Database connection failed' });
    }
}