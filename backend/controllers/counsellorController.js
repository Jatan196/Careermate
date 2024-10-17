//import { User } from "../models/userModel.js"
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
// import validator from 'validator';
import jwt from "jsonwebtoken";

import pg from "pg";
//import config from '../config/database.js'; // Your database configuration
import pool from "../config/localdb.js";

export const counsellorReg = async (req, res) => {
    const { domains, name, phone, email, password, highest_qualification } = req.body;

    try {
        const reg = await pool.query(
            'INSERT INTO Counsellor (name,phone,email,password,highest_qualification) VALUES($1,$2,$3,$4,$5) returning id', [name, phone, email, password, highest_qualification]
        );
        console.log(reg);
        res.status(201).json({ message: "Counsellor register successfully", couns_id: reg.rows[0]['id'] });
        for (let i = 0; i < domains.length; i++) {
            await pool.query('insert into domains (id, domain) values($1,$2)', [reg.rows[0]['id'], domains[i]]);
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Registration failed" });
    }

}

export const counsLogin = async (req, res) => {
    const { email, password } = req.query;
    console.log(email);
    try {
        const check = await pool.query(`select id,name,email from counsellor where email = $1 and password = $2`, [email, password]);
        console.log(check);
        if (check.rows.length === 0) {
            return res.status(250).json({ message: 'Invalid id or password' });
        }
        console.log(check.rows[0]);
        const counsellor = check.rows[0];
        const accessToken = jwt.sign(
            {
                counsId: counsellor.id,
                counsName: counsellor.name,
                counsEmail: counsellor.email,
            },
            process.env.ACCESS_TOKEN_SECRET_COUNSELLOR,
            { expiresIn: "15m" }
        );
        res.status(200).json({
            message:"Counsellor Login successful",
            counsellor: {
                id: counsellor.id,
                // name: student.name,
                // email: student.email
            },
            accessToken
        })
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Login Failed" });
    }
};

// export const addDomains = async (req,res) => {
//     const {} = req.body;
//     try {
//         const reg= await pool.query(
//             'INSERT INTO Counsellor (name,phone,email,password,highest_qualification) VALUES($1,$2,$3,$4,$5)',[name ,phone ,email ,password, highest_qualification ]
//         );
//         res.status(201).json({ message: "Counsellor register successfully"});
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ error: "Registration failed" });
//     }
// }


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
export const getAllSlots = async (req, res) => {
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
export const getInfoById = async (req, res) => {
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
        res.status(201).json({ message: "Timeslot added successfully" });// ,"newSlotId":newSlotId});
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to add new timeslot" });
    }
};

export const changeReqStatus = async (req, res) => {
    const { stud_id, couns_id, status } = req.body;

    // 1 -> accepted
    // 0 -> denied

    const statusReq = "Accepted";

    if (status == 0) statusReq = "Denied";
    try {
        //  const ack= await pool.query(`Update Request set status_of_request=${statusReq}   where student_id=${stud_id} and counsellor_id=${couns_id}`);
        const ack = await pool.query(`UPDATE Request 
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
