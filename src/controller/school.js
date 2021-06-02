import model from '../model/school';
import ErrorHandler from '../middleware/errorHandler';

class User {
  static async createSchool(req, res) {
    const { school_name, school_logo } = req.body;
    console.log(req.body);
    let payLoad = {
      school_name: school_name,
      school_logo: school_logo || '',
    };
    try {
      await model.createSchool(payLoad);
      return res.status(200).json({
        status: 200,
        data: {
          message: 'success',
        },
      });
    } catch (error) {
      console.log(error);
      if (error.routine == '_bt_check_unique') {
        ErrorHandler(409, res, 'School name already exist');
      }
    }
  }
  static async findAllSchool(req, res) {
    const rows = await model.getAllSchools();
    return res.status(200).json({
      status: 200,
      data: { message: 'success', data: rows },
    });
  }
  static async updateSchoolById(req, res) {
    const { school_name } = req.body;
    const { id } = req.params;
    const rows = await model.patchSchoolById(id, { school_name: school_name });
    return res.status(200).json({
      status: 200,
      data: {
        data: rows[0],
        message: 'success',
      },
    });
  }
  static async deleteSchoolById(req, res) {
    const { id } = req.params;
    await model.deleteSchoolById(id);
    // if deleted returns 1 else it returned 0
    return res.status(200).json({
      status: 200,
      data: {
        message: 'deleted successfully',
      },
    });
  }
}
export default User;
