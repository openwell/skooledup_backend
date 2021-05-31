import model from '../model/degree';

class User {
  static async createDegree(req, res) {
    // const { school_name, school_logo } = req.body;
    // let payLoad = {
    //   school_name: school_name,
    //   school_logo: school_logo || '',
    // };
    // await model.createDegree(payLoad);
    return res.status(200).json({
      status: 200,
      data: {
        message: 'success',
      },
    });
  }
  static async findAllDegree(req, res) {
    const rows = await model.getAllDegrees();
    return res.status(200).json({
      status: 200,
      data: { message: 'success', data: rows },
    });
  }
  static async updateDegreeById(req, res) {
    // const { school_name } = req.body;
    // const { id } = req.params;
    // const rows = await model.patchSchoolById(id, { school_name: school_name });
    // console.log(rows);
    return res.status(200).json({
      status: 200,
      data: {
        // data: rows[0],
        message: 'success',
      },
    });
  }
  static async deleteDegreeById(req, res) {
    const { id } = req.params;
    await model.deleteDegreeById(id);
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
