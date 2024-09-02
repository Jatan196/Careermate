import express from "express"; // (2nd ->> way)change in package.json
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import cors from "cors"
import http from "http";
import { Client } from "pg";

dotenv.config({});

const app=express();

const PORT=  5000 ; //process.env.PORT ||
 
const server = http.createServer(app);
const coresOption={
  origin:'http://localhost:3000',
  credentials:true
}; 
app.use(cors(coresOption));
app.use(express.urlencoded({extended:true}));    
app.use(express.json());


server.listen(PORT,()=>{
   
  Client();
    console.log(`Server listen at port ${PORT}`);
 });  

