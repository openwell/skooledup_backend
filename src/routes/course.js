import express from 'express';
import controller from '../controller/course';
import validate from '../middleware/validateInput';
import helper from '../utils/helpers';

const router = express.Router();

router.post(
  '/course',
  //   validate.course,
  helper.verifyToken,
  controller.createCourse
);
router.get('/courses', helper.verifyToken, controller.findAllCourse);
router.get('/course/:courseId', helper.verifyToken, controller.findCourseById);
router.get(
  '/coursesByDepartDeg',
  helper.verifyToken,
  controller.findAllCourseByDepartDeg
);
router.put(
  '/course/:id',
  //   validate.course,
  validate.params,
  helper.verifyToken,
  controller.updateCourseById
);
router.delete('/course/:id', helper.verifyToken, controller.deleteCourseById);

export default router;
