const { multipleMongooseToObject } = require('../../util/mongoose');
const Course = require('../models/Course');

class MeController {
    // [GET] /news
    async storedCourses(req, res) {
        await Course.find({})
            .then((courses) => {
                res.render('me/stored-courses', { courses: multipleMongooseToObject(courses) });
            })
            .catch((err) => next(err));
    }
}

module.exports = new MeController();
