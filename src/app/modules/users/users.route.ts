import express, { Router } from "express"
import { UserController } from "./users.controller";
import vaidateRequest from "../../middlewares/validetRequest";
import { createStudentValidationSchema } from "../student/student.validation";

const router: Router = express.Router();


router.post('/create-student', vaidateRequest(createStudentValidationSchema), UserController.createStudent);



export const userRoutes = router;