import express from 'express';
import controller from '../controller/department';
import validate from '../middleware/validateInput';
import helper from '../utils/helpers';

const router = express.Router();

router.post(
  '/department',
  validate.department,
  helper.verifyToken,
  controller.createDepartment
);
router.get('/department', helper.verifyToken, controller.findAllDepartment);
router.put(
  '/department/:id',
  validate.department,
  validate.params,
  helper.verifyToken,
  controller.updateDepartmentById
);
router.delete('/department/:id', helper.verifyToken, controller.deleteDepartmentById);

export default router;
