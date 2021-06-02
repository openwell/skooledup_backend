import model from '../model/faculty';

class User {
  static async createFaculty(req, res) {
    const { faculty_name, school_id } = req.body;
    let payLoad = {
      faculty_name,
      school_id,
    };
    await model.createFaculty(payLoad);
    return res.status(200).json({
      status: 200,
      data: {
        message: 'success',
      },
    });
  }
  static async findAllFaculties(req, res) {
    const rows = await model.getAllFaculties();
    return res.status(200).json({
      status: 200,
      data: { message: 'success', data: rows },
    });
  }
  static async findAllFacultiesBySchoolId(req, res) {
    const { id } = req.params;
    const rows = await model.getAllFacultiesBySchoolId(id);
    return res.status(200).json({
      status: 200,
      data: { message: 'success', data: rows },
    });
  }
  static async updateFacultyById(req, res) {
    const { faculty_name } = req.body;
    const { id } = req.params;
    const rows = await model.patchFacultyById(id, {
      faculty_name,
    });
    return res.status(200).json({
      status: 200,
      data: {
        data: rows[0],
        message: 'success',
      },
    });
  }
  static async deleteFacultyById(req, res) {
    const { id } = req.params;
    await model.deleteFacultyById(id);
    return res.status(200).json({
      status: 200,
      data: {
        message: 'deleted successfully',
      },
    });
  }
}
export default User;
