const clothes = require('../../models/Course');
const { mongooseToObject } = require('../../utli/mongoose');
const bodyParser = require('body-parser');

class CourseController {
    show(req, res) {
        clothes.findOne({ slug: req.params.slug }).then((course) => {
            if (!course) {
                // Xử lý trường hợp không tìm thấy bản ghi
                res.status(404).send('Không tìm thấy!');
                return;
            }
            res.render('course/show', { course: mongooseToObject(course) });
        }).catch((err) => {
            // Xử lý lỗi truy vấn
            console.error(err);
            res.status(500).send('Lỗi Server');
        });

    }
    create(req, res) {
        res.render('course/create');
    }
    stote(req, res, next) {
        const course = new clothes(req.body)
        course.save();
        res.send("save")
    }
}
module.exports = new CourseController();
