import express from "express"
import {registerStud,getProfileByUserId, requestSession, login } from "../controllers/userController.js";

const router=express.Router();

// router.route("/getDepts").get(getDepts);

// router.route("/getAllCouns").get(getAllCounsInfo);
// router.route("/getInfoById").get(getInfoById);
// router.route("/getAllSlots").get(getAllSlots);

router.route("/registerStud").post(registerStud);
router.route("/registerCouns").post(requestSession); 
router.route("/getProfileById").get(getProfileByUserId);
router.route("/stuLogin").get(login);

export default router;