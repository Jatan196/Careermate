import express from "express"
import { addNewSlot, changeReqStatus, counsellorReg, counsLogin, getAllCounsInfo,getAllSlots,getInfoById, viewRequests } from "../controllers/counsellorController.js";

const router=express.Router();

// router.route("/getDepts").get(getDepts);

router.route("/getAllCouns").get(getAllCounsInfo);
router.route("/getInfoById").get(getInfoById);
router.route("/getAllSlots").get(getAllSlots);
router.route("/addNewSlot").post(addNewSlot);
router.route("/changeReqStatus").post(changeReqStatus);
router.route("/counsellorReg").post(counsellorReg)
router.route("/counsLogin").get(counsLogin); 
router.route("/viewRequests").get(viewRequests);



export default router;