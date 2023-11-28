import express from 'express';
import { SemesterController } from './semester.controller';
import vaidateRequest from '../../middlewares/validetRequest';
import { SemesterValidation } from './semester.validation';

const router = express.Router();

router.post('/create-semester', vaidateRequest(SemesterValidation), SemesterController.createSemester)


export const SemesterRoutes = router;
