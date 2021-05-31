import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import model from '../model/auth';
import errorHandler from '../middleware/errorHandler';

class auth {
  static hashPassword(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
  }

  static comparePassword(hashPassword, password) {
    return bcrypt.compareSync(password, hashPassword);
  }

  static generateToken(id, isAdmin) {
    const token = jwt.sign(
      {
        userId: id,
        isAdmin: isAdmin,
      },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );
    return token;
  }

  static async verifyToken(req, res, next) {
    const token = req.headers.authorization;
    if (!token) {
      return errorHandler(401, res, 'Token is not provided');
    }
    const tokenArray = token.split(' ');
    try {
      const decoded = await jwt.verify(tokenArray[1], process.env.JWT_SECRET);
      if (decoded.isAdmin === 'true') {
        return errorHandler(403, res, 'Token Forbidden');
      }
      const row = await model.getUserById(decoded.userId);
      if (!row) {
        return errorHandler(401, res, 'Invalid token');
      }
      req.user = { id: decoded.userId, isAdmin: decoded.isAdmin };
      return next();
    } catch (error) {
      return errorHandler(401, res, error);
    }
  }

  // static async adminVerifyToken(req, res, next) {
  //   const token = req.headers.tokens;
  //   if (!token) {
  //     return errorHandler(401, res, 'Token is not provided');
  //   }
  //   try {
  //     const decoded = await jwt.verify(token, process.env.SECRET);
  //     if (decoded.isAdmin === 'false') {
  //       return errorHandler(403, res, 'Token Forbidden');
  //     }
  //     const { rows } = await db.query(queries.selectById('admins', 'id', decoded.userId));
  //     if (!rows[0]) {
  //       return errorHandler(401, res, 'Invalid token');
  //     }
  //     req.user = { id: decoded.userId, isadmin: decoded.isAdmin };
  //     return next();
  //   } catch (error) {
  //     return errorHandler(401, res, error);
  //   }
  // }
}

export default auth;
