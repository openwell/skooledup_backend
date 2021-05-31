import model from '../model/auth';
import helpers from '../utils/helpers';

class User {
  static async login(req, res) {
    let row = req.user;
    let isAdmin = row.role == 'admin' ? true : false;
    return res.status(200).json({
      status: 200,
      data: {
        message: 'Login successfully',
        token: helpers.generateToken(row.id, isAdmin),
      },
    });
  }
  static async signup(req, res) {
    const row = await model.createUser({
      email: req.body.email,
      password: helpers.hashPassword(req.body.password),
      name: req.body.name,
      role: 'user',
    });
    let isAdmin = row[0].role == 'admin' ? true : false;
    return res.status(200).json({
      status: 200,
      data: {
        message: 'signup successfully',
        token: helpers.generateToken(row[0].id, isAdmin),
      },
    });
  }
}
export default User;
