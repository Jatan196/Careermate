import express from "express"
import { addNewSlot, changeReqStatus, counsellorReg, getAllCounsInfo,getAllSlots,getInfoById } from "../controllers/counsellorController.js";

const router=express.Router();

// router.route("/getDepts").get(getDepts);

router.route("/getAllCouns").get(getAllCounsInfo);
router.route("/getInfoById").get(getInfoById);
router.route("/getAllSlots").get(getAllSlots);
router.route("/addNewSlot").post(addNewSlot);
router.route("/changeReqStatus").post(changeReqStatus);
router.route("/counsellorReg").post(counsellorReg)



export default router;