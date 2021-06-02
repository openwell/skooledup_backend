import * as model from '../model/department';

class User {
  static async createDepartment(req, res) {
    const { department_name, faculty_id } = req.body;
    let payLoad = {
      department_name,
      faculty_id,
    };
    await model.createDepartment(payLoad);
    return res.status(200).json({
      status: 200,
      data: {
        message: 'success',
      },
    });
  }
  static async findAllDepartment(req, res) {
    const rows = await model.getAllDepartments();
    return res.status(200).json({
      status: 200,
      data: { message: 'success', data: rows },
    });
  }
  static async findAllDepartmentsByFacultyId(req, res) {
    const { id } = req.params;
    const rows = await model.getAllDepartmentsByFacultyId(id);
    return res.status(200).json({
      status: 200,
      data: { message: 'success', data: rows },
    });
  }
  static async updateDepartmentById(req, res) {
    const { department_name } = req.body;
    const { id } = req.params;
    const rows = await model.patchDepartmentById(id, { department_name });
    console.log(rows);
    return res.status(200).json({
      status: 200,
      data: {
        // data: rows[0],
        message: 'success',
      },
    });
  }
  static async deleteDepartmentById(req, res) {
    const { id } = req.params;
    await model.deleteDepartmentById(id);
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
