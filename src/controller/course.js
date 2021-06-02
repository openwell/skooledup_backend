import model from '../model/course';

class User {
  static async createCourse(req, res) {
    const {
      course_name,
      department_id,
      degree_id,
      // string
      dur,
      tui_fee_local,
      tui_fee_int,
      levy,
      levy_non_african,
      local_app_fee_online,
      local_app_fee_paper,
      int_app_fee_online,
      int_app_fee_paper,
      study_mode_full_time,
      study_mode_part_time,
      min_req_local_aps,
      min_req_local_eng,
      min_req_local_add_lang,
      min_req_local_math,
      min_req_international,
      online_classes,
      //   dates
      app_opening_date,
      app_closing_date,
      //   text
      note,
      hero_image,
    } = req.body;
    let payLoad = {
      course_name: course_name,
      department_id: department_id,
      degree_id: degree_id,
      // string
      duration: dur,
      tuition_fee_local: tui_fee_local || '',
      tuition_fee_int: tui_fee_int || '',
      levy: levy || '',
      levy_non_african: levy_non_african || '',
      local_application_fee_online: local_app_fee_online || '',
      local_application_fee_paper: local_app_fee_paper || '',
      international_application_fee_online: int_app_fee_online || '',
      international_application_fee_paper: int_app_fee_paper || '',
      study_mode_full_time: study_mode_full_time || '',
      study_mode_part_time: study_mode_part_time || '',
      min_req_local_aps: min_req_local_aps || '',
      min_req_local_english: min_req_local_eng || '',
      min_req_local_additional_lang: min_req_local_add_lang || '',
      min_req_local_mathematics: min_req_local_math || '',
      min_req_international: min_req_international || '',
      online_classes: online_classes || '',
      //   dates
      application_opening_date: app_opening_date || '',
      application_closing_date: app_closing_date || '',
      //   text
      note: note || '',
      hero_image: hero_image || '',
    };
    try {
      await model.createCourse(payLoad);
      return res.status(200).json({
        status: 200,
        data: {
          message: 'success',
        },
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: 500,
        data: {
          message: 'error',
          error: error,
        },
      });
    }
  }
  static async findAllCourse(req, res) {
    const rows = await model.getAllCourses();
    return res.status(200).json({
      status: 200,
      data: { message: 'success', data: rows },
    });
  }
  static async findAllCourseByDepartDeg(req, res) {
    const { department_id, degree_id } = req.query;
    console.log(department_id, degree_id);
    try {
      const rows = await model.getAllCoursesByDepartDeg({
        department_id,
        degree_id,
      });
      return res.status(200).json({
        status: 200,
        data: { message: 'success', data: rows },
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        data: { message: 'error', error: error },
      });
    }
  }
  static async updateCourseById(req, res) {
    const { course_name } = req.body;
    const { id } = req.params;
    const rows = await model.patchCourseById(id, { course_name });
    console.log(rows);
    return res.status(200).json({
      status: 200,
      data: {
        // data: rows[0],
        message: 'success',
      },
    });
  }
  static async deleteCourseById(req, res) {
    const { id } = req.params;
    await model.deleteCourseById(id);
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
