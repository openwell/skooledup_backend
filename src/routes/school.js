import express from 'express';
import controller from '../controller/school';
import validate from '../middleware/validateInput';
import helper from '../utils/helpers';

const router = express.Router();

router.post(
  '/school',
  validate.school,
  helper.verifyToken,
  controller.createSchool
);
router.get('/schools', helper.verifyToken, controller.findAllSchool);
router.put(
  '/school/:id',
  validate.school,
  validate.params,
  helper.verifyToken,
  controller.updateSchoolById
);
router.delete('/school/:id', helper.verifyToken, controller.deleteSchoolById);

export default router;
