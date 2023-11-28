import express from 'express';
import { SemesterController } from './semester.controller';
import vaidateRequest from '../../middlewares/validetRequest';
import { SemesterValidation } from './semester.validation';

const router = express.Router();

router.get('/', SemesterController.getSemesters);
router.get('/:semesterId', SemesterController.getSingleSemester)
router.post('/create-semester', vaidateRequest(SemesterValidation), SemesterController.createSemester);
router.patch('/:semesterId', vaidateRequest(SemesterValidation), SemesterController.updateSingleSemester)


export const SemesterRoutes = router;
