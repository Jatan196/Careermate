import express from "express"
import { makeQuiz, makeQuizz } from "../controllers/quizController.js";

const router=express.Router();

router.route('/make').get(makeQuizz);

export default router;
