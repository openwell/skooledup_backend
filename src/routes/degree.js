import express from 'express';
import controller from '../controller/degree';
import validate from '../middleware/validateInput';
import helper from '../utils/helpers';

const router = express.Router();

router.post(
  '/degree',
  validate.degree,
  helper.verifyToken,
  controller.createDegree
);
router.get('/degree', helper.verifyToken, controller.findAllDegree);
router.put(
  '/degree/:id',
  validate.degree,
  validate.params,
  helper.verifyToken,
  controller.updateDegreeById
);
router.delete('/degree/:id', helper.verifyToken, controller.deleteDegreeById);

export default router;
