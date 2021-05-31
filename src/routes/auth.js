import express from 'express';
import user from '../controller/auth';
import validate from '../middleware/validateInput';
import userValidate from '../middleware/validateUser';
// import admin from '../controller/adminController';
// import adminValidate from '../middleware/validateAdmin';

const router = express.Router();

router.get('/', (req, res) => {
  return res.status(200).json({
    status: 200,
    data: 'Welcome',
  });
});

router.post(
  '/auth/signup',
  validate.user,
  userValidate.checkEmailExist,
  user.signup
);

router.post(
  '/auth/login',
  validate.login,
  userValidate.checkEmailPassword,
  user.login
);

// router.post('/auth/admin',
//   validate.login,
//   adminValidate.checkEmailPassword,
//   admin.login);

export default router;
