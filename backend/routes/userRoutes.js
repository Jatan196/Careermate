import express from "express"
import { registerCouns, registerStud } from "../controllers/userController.js";

const router=express.Router();

// router.route("/getDepts").get(getDepts);

// router.route("/getAllCouns").get(getAllCounsInfo);
// router.route("/getInfoById").get(getInfoById);
// router.route("/getAllSlots").get(getAllSlots);

router.route("/registerStud").post(registerStud);
router.route("/registerCouns").post(registerCouns);

// router.route("/changeReqStatus").post(changeReqStatus);

export default router;