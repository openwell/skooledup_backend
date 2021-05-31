import auth from '../utils/helpers';
import model from '../model/auth';
import errorHandler from './errorHandler';

class userValidation {
  static async checkEmailExist(req, res, next) {
    try {
      const row = await model.getUserByEmail(req.body.email);
      if (row) {
        return next(409);
      }
      return next();
    } catch (err) {
      return errorHandler(500, res, err);
    }
  }

  static async checkEmailPassword(req, res, next) {
    try {
      const row = await model.getUserByEmail(req.body.email);
      if (!row) {
        return errorHandler(401, res, 'Invalid Email');
      } else if (!auth.comparePassword(row.password, req.body.password)) {
        return errorHandler(401, res, 'Invalid Password');
      }
      req.user = row;
      return next();
    } catch (err) {
      return errorHandler(500, res, err);
    }
  }
}

export default userValidation;
