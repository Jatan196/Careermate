import express from "express"
import { addNewSlot, changeReqStatus, getAllCounsInfo,getAllSlots,getInfoById } from "../controllers/counsellorController.js";

const router=express.Router();

// router.route("/getDepts").get(getDepts);

router.route("/getAllCouns").get(getAllCounsInfo);
router.route("/getInfoById").get(getInfoById);
router.route("/getAllSlots").get(getAllSlots);
router.route("/addNewSlot").post(addNewSlot);
router.route("/changeReqStatus").post(changeReqStatus);



export default router;