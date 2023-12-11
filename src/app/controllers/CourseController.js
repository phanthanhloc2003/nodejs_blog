const { mongooseToObject } = require('../../utli/mongoose');

const clothes = require("../../models/Course");
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
    async stote(req, res) {
        const course = new clothes(req.body);
        course.save()
            .then((course) => {

                return res.redirect("/me/stored/courses")
            })
            .catch((err) => {
                console.log(err);
                return res.status(400).json({
                    message: err.message,
                })
            })
    }
    edit(req, res, next) {

        clothes.findById(req.params.id)
            .then(course => res.render('course/edit', {
                courses: mongooseToObject(course)
            }))
            .catch(next)
    }
    update(req, res, next) {

        clothes.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect("/me/stored/courses"))
            .catch(next)
    }
    deletes(req, res, next) {
        clothes.delete({ _id: req.params.id })
            .then(() => res.redirect("back"))
            .catch(next)

    }
    forceDeletes(req, res, next) {
        clothes.deleteOne({ _id: req.params.id })
            .then(() => res.redirect("back"))
            .catch(next)
    }

    async restore(req, res, next) {
        const course = await clothes.findOneDeleted({ _id: req.params.id });
        course.restore({ _id: req.params.id }).then(() => {
                res.redirect("back")
            })
            .catch(next)

    }
    handleFormAction(req, res, next) {
        switch (req.body.action) {
            case "delete":
                clothes.delete({ _id: { $in: req.body.coursesId } })
                    .then(() => res.redirect("back"))
                    .catch(next)
                break;
            default:
                res.json({ message: "Invalid action" })
        }
        // res.json({ $in: req.body.coursesId })
    }
}
module.exports = new CourseController();