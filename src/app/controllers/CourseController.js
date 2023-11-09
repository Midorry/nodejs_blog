const { mongooseToObject } = require('../../util/mongoose');
const Course = require('../models/Course');

class NewsController {
    // [GET] /courses/:slug
    show(req, res) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/show', { course: mongooseToObject(course) });
            })
            .catch((err) => next(err));
    }
}

module.exports = new NewsController();
