
//import { pool } from './dbConnection.js'; // Your PostgreSQL connection pool
import pool from "../config/localdb.js";
import { spawn } from 'child_process';

export const login = async () => {

}
export const logout = async () => {

}
export const registerCouns = async (req, res) => {
    try {
        // Get data from the request body 
        const { student_id, counsellor_id, status_of_request, slot_id } = req.body; 
        console.log(student_id, counsellor_id, status_of_request, slot_id);
        // const a = stringToInteger(student_id);
        // const b = stringToInteger(counsellor_id);
        // const c = stringToInteger(slot_id);
        const values = [student_id, counsellor_id, status_of_request, slot_id];
        const insertStudentQuery = `
                INSERT INTO Request (student_id, counsellor_id, status_of_request, slot_id)
                VALUES ($1, $2, $3, $4) RETURNING slot_id`;
        const result = await pool.query(insertStudentQuery, values);
        // Step 3: Send success response
        res.status(201).json({ message: 'Sesion registered successfully!' });

    } catch (error) {
        console.error('Error registering session:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
export const registerStud = async (req, res) => {
    try {
        // Get data from the request body 
        const { acad,userName, namee, phone, email, password, hobbies,edu_achieve,extra_achieve } = req.body; //, name, phone, email, password, hobbies, edu_achieve, interest 

        // Step 1: Insert student data into the Student table
        const studentId = stringToInteger(userName);
        const insertStudentQuery = `
                INSERT INTO Student (id, name, phone, email, password, hobbies ,edu_achieve, extra_achieve)
                VALUES ($1, $2, $3, $4, $5, $6, $7, &8) RETURNING id`;
        const values = [studentId,namee, phone, email, password, hobbies, edu_achieve,extra_achieve];

        // Add basic details
        const result = await pool.query(insertStudentQuery, values);

        // TOKEN // SESSION CREATION

        // add 10th marks in table
        
        console.log(acad);

        // Trigger ML model
        await addNewProfile({acad,studentId});  //studentId, name, edu_achieve, interest);

        // Step 3: Send success response
        res.status(201).json({ message: 'Student registered successfully!' }); //, studentId

    } catch (error) {
        console.error('Error registering student:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const addNewProfile = async ({acad,studentId}) => {
    return new Promise((resolve, reject) => {
        // Step 1: Trigger the Python ML Model using spawn
        const x = acad.selfStdyHrs,
            y = acad.extraCuri,
            w = acad.mathScore,
            z = acad.langScore,
            p = acad.scienceScore,
            q = acad.englishScore,
            r = acad.sstScore;
            console.log(acad,studentId);
        const pythonProcess = spawn('python', ['./mlmodel/Model.py', x, y, w, z, p, q, r]);

        pythonProcess.stdout.on('data', async (data) => {
            // Parse the data returned by the ML model 
            const mlResult = JSON.parse(data.toString());
            const { interestFields } = mlResult;

            console.log(mlResult, interestFields);

            // Add predicited interest in table
     
            const insertInterestQuery = `
                INSERT INTO Interest (report_id, field, interest)
                VALUES ($1, $2, $3)`;

            for (const field of interestFields) {
                const interestValues = [studentId, field.fieldName, field.interestScore];
                await pool.query(insertInterestQuery, interestValues);
            }

            // console.log('ML data inserted into Interest table');

            resolve();
        });

        // Handle any errors from the Python process
        pythonProcess.stderr.on('data', (data) => {
            console.error('Error from ML model:', data.toString());
            reject(new Error('Error from ML model'));
        });
    });
};

export const updateProfile = async () => {
    // similar
}
export const getProfileByUserId = async () => {

}

function stringToInteger(str) {
    let result = 0;
    const base = 31; // A prime number used as a base multiplier (can be any other prime)

    for (let i = 0; i < str.length; i++) {
        // Get the ASCII value of the character
        const charValue = str.charCodeAt(i);

        // Combine it using the base multiplier to create a unique number
        result = result * base + charValue;
    }

    return result;
}

