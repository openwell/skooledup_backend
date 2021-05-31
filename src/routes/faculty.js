import express from 'express';
import controller from '../controller/faculty';
import validate from '../middleware/validateInput';
import helper from '../utils/helpers';

const router = express.Router();

router.post(
  '/faculty',
  validate.faculty,
  helper.verifyToken,
  controller.createFaculty
);
router.get('/faculty', helper.verifyToken, controller.findAllFaculties);
router.put(
  '/faculty/:id',
  validate.faculty,
  validate.params,
  helper.verifyToken,
  controller.updateFacultyById
);
router.delete('/faculty/:id', helper.verifyToken, controller.deleteFacultyById);

export default router;
